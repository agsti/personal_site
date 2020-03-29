import React from "react"
import { Link, graphql } from "gatsby"

import Background from "../components/background"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

import "../css/blog.scss"
import "../css/base.scss"
import colors from '../css/_colors.scss';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <div class='root'>
      <div className="background-container">
        <Background color={colors.light1} n_elements={10} size={50} opacity={0.4} animationDuration={1000} />
        <Background color={colors.accent1} n_elements={5} size={50} opacity={0.6} />
        <Background color={colors.accent2} n_elements={2} size={50} opacity={0.6} animationDuration={500} />
        <Background color={colors.dark} n_elements={3} size={50} opacity={0.5} animationDuration={500} />
      </div>
      <Layout location={location} header={<Header title={siteTitle} />}>
        <SEO title="All posts" />
        {/* <Bio /> */}
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug} className="post-item">
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              <header>
                <h3>
                    {title}
                </h3>
                <small className="date">{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                  />
              </section>
                  </Link>
            </article>
          )
        })}
      </Layout>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {project: {nin: true}}}) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
}

`
