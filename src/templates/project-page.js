import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Header from "../components/header"
import { Layout, Content } from "../components/layout"
import SEO from "../components/seo"
import { BackgroundSet } from "../components/background"

import "../css/blog.scss"
import "../css/project-view.scss"

const ProjectPageTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const project_link = data.markdownRemark.frontmatter.link
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <div class="root">
      <BackgroundSet
        light1props={{
          n_elements: 20,
          size: 50,
          opacity: 0.4,
          animationDuration: 3000,
        }}
        accent1props={{
          n_elements: 5,
          size: 50,
          opacity: 0.6,
        }}
      />
      <Layout location={location}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Header
          title={siteTitle}
          links_to="/projects"
          className="blog-header"
        />
        <Content>
          <article className="blog-content">
            <header className="project-header">
              <h1>{post.frontmatter.title}</h1>
              <p>
                {project_link && (
                  <a className="project-link" href={project_link}>
                    Visit project
                  </a>
                )}
              </p>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            {/* <Bio /> */}
          </article>

          <nav>
            <ul className="blog-nav">
              <li className={previous ? "blog-nav-button" : ""}>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li className={next ? "blog-nav-button" : ""}>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </Content>
      </Layout>
    </div>
  )
}

export default ProjectPageTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        link
      }
    }
  }
`
