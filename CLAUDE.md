# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `yarn develop` (or `yarn start`) — run Gatsby dev server
- `yarn build` — production build into `public/`
- `yarn serve` — serve the built site locally
- `yarn clean` — wipe Gatsby cache/public (required after changing `gatsby-*.js` or plugin config)
- `yarn format` — Prettier over `**/*.{js,jsx,json,md}`

Node version pinned via `.nvmrc` to **v18.12.1**. No test runner is configured (`yarn test` just prints a TODO).

## Environment variables

- `LINKDING_TOKEN` — token for the Linkding bookmarks API at `https://links.vps.agustibau.com`. Without it, `gatsby-node.js` falls back to **fake bookmark data** (`createFakeBookmarkData`) so the dev build still succeeds. Real bookmarks only appear in builds where the token is present (Netlify prod).
- `SMTP_HOST`, `SMTP_USERNAME`, `SMTP_PASSWORD` — required by the `email_for_email` Netlify function.
- `HOOK_URL` — Netlify build hook called by the `cron_build` scheduled function (Mon/Wed/Fri 00:00).

## Architecture

Gatsby 5 static site deployed on Netlify. Three content sources, one template per source:

1. **Markdown blog posts** — `content/blog/<slug>/index.md`, rendered by `src/templates/blog-post.js` at `/blog/<slug>`.
2. **Markdown case studies** — `content/projects/<slug>/index.md` with `project: true` in frontmatter, rendered by `src/templates/project-page.js` at `/case-studies/<slug>`. The `project_index` frontmatter field orders them on `/projects`.
3. **Remote bookmarks** — fetched from Linkding in `sourceNodes` and paginated (20/page) into `/bookmarks`, `/bookmarks/1`, … via `src/templates/bookmarks-list.js`.

Page creation all lives in `gatsby-node.js`:
- `onCreateNode` derives the `slug` field and prefixes `/blog` vs `/case-studies` based on the `project` frontmatter flag — this is why the same `allMarkdownRemark` query powers both blog posts and case studies.
- `createPages` walks markdown edges, and for blog posts (not projects) computes prev/next by skipping over project entries in the sorted list.
- `onPostBuild` writes `public/bookmarks-data.json` from all `allBookmark` nodes. `src/components/bookmark_search.js` fetches this JSON client-side and builds a FlexSearch index in the browser — search is **not** part of the Gatsby GraphQL layer.

### SSR / webpack quirks

`react-lottie`, `lottie-web`, and `gitalk` are replaced with `loaders.null()` during `build-html`/`develop-html` stages (see both `gatsby-node.js` and `gatsby-ssr.js`) because they touch `window` and break SSR. When adding browser-only libraries that access `window`/`document`, follow the same pattern rather than trying to make them SSR-safe.

### Netlify functions (`netlify/functions/`)

- `cron_build.js` — scheduled function that POSTs to a build hook on a cron.
- `email_for_email.js` — contact form endpoint that emails the CV to the submitted address via nodemailer.
- `validations.js` — shared input validators.

`netlify.toml` sets `node_bundler = "esbuild"` for functions.

### Styling

Sass (`.scss`) imported directly from components/pages. Global-ish styles live in `src/css/` (`base.scss`, `layout.scss`, `blog.scss`, `bookmarks.scss`, `projects.scss`, `index.scss`). There is no CSS-in-JS or CSS module convention here.

### Scripts

`scripts/update_bookmarks.mjs` is a one-off maintenance script that walks every Linkding bookmark, calls the `check` endpoint to refresh title/description metadata, and PUTs the updates back. Requires `LINKDING_TOKEN`. Run with `node scripts/update_bookmarks.mjs`. Not invoked by the build.

## Conventions

- Prettier config: no semicolons, double quotes, 2-space indent, ES5 trailing commas, LF line endings.
- Blog posts set `draft: true` in frontmatter to exclude themselves from the build (filter in `createPages`).
