const path = require(`path`)
const axios = require("axios")
const { createFilePath } = require(`gatsby-source-filesystem`)

const is_dev = process.env["NODE_ENV"] == "development"

const findNextIndex = (array, from_index, matcher) => {
  for (let index = from_index + 1; index < array.length; index++) {
    const element = array[index]
    if (matcher(element)) {
      return element.node
    }
  }
  return null
}
const findPrevIndex = (array, from_index, matcher) => {
  for (let index = from_index - 1; index >= 0; index--) {
    const element = array[index]
    if (matcher(element)) {
      return element.node
    }
  }
  return null
}

const createFakeBookmarkData = () => {
  let data = []
  for (let index = 0; index < 4; index++) {
    const obj = {
      id: `id_${index}`,
      tag_names: `tag_names_${index}`,
      url: `url_${index}`,
      website_title: `website_title_${index}`,
      website_description: `website_description_${index}`,
      date_added: `date_added_${index}`,
      title: `title_${index}`,
      description: `description_${index}`,
    }
    data.push(obj)
  }
  return { results: data }
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  console.log(process.env)
  const linkding_token = process.env.LINKDING_TOKEN
  let data
  if (linkding_token) {
    console.log(`Found linkding_token: ${linkding_token}`)
    const response = await axios.get(
      `https://links.vps.agustibau.com/api/bookmarks?limit=9999`,
      {
        headers: {
          Authorization: `Token ${linkding_token}`,
        },
      }
    )
    data = response.data
  } else {
    console.log("Using fake data for bookmarks...")
    data = createFakeBookmarkData()
  }
  data.results.forEach((d) => {
    actions.createNode({
      ...d,
      id: createNodeId(d.id),
      internal: {
        type: "bookmark",
        contentDigest: createContentDigest(data),
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const projectPage = path.resolve(`./src/templates/project-page.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
        limit: 1000
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              project
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const { project } = post.node.frontmatter

    const slug = post.node.fields.slug
    if (project) {
      createPage({
        path: slug,
        component: projectPage,
        context: {
          slug: slug,
        },
      })
    } else {
      const previous = findPrevIndex(
        posts,
        index,
        (element) => !element.node.frontmatter.project
      )
      const next = findNextIndex(
        posts,
        index,
        (element) => !element.node.frontmatter.project
      )

      createPage({
        path: slug,
        component: blogPost,
        context: {
          slug: slug,
          previous,
          next,
        },
      })
    }
  })

  const bookmark_query = await graphql(`
    {
      allBookmark(sort: { order: DESC, fields: date_added }) {
        nodes {
          id
        }
      }
    }
  `)
  const bookmarks = bookmark_query.data.allBookmark.nodes
  const bookmarksPerPage = 20
  const numPages = Math.ceil(bookmarks.length / bookmarksPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/bookmarks` : `/bookmarks/${i}`,
      component: path.resolve("./src/templates/bookmarks-list.js"),
      context: {
        limit: bookmarksPerPage,
        skip: i * bookmarksPerPage,
        numPages,
        currentPage: i,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const { project } = node.frontmatter
    let slug = project ? `/case-studies${value}` : `/blog${value}`
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
  }
}
