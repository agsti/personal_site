import React from "react"
import { Link, graphql } from "gatsby"

import {BackgroundSet} from "../components/background"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

import "../css/blog.scss"
import "../css/base.scss"


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <div class='root'>
       <BackgroundSet
      light1props={{
        n_elements: 10,
        size: 50,
        opacity: 0.4,
        animationDuration: 3000,
      }}
      accent1props={{
        n_elements: 5,
        size: 50,
        opacity: 0.6,
      }}
      accent2props={{
        n_elements: 2,
        size: 50,
        opacity: 0.6,
      }}
      darkprops={{
        n_elements: 3,
        size: 50,
        opacity: 0.5,
        animationDuration: 1000,
      }}
    />
      <Layout location={location} header={<Header title={"Agusti's Blog"} links_to='blog' className="blog-header" />}>
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
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {project: {nin: true}, draft: {ne: true}}}) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  }
}


`
