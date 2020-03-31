import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {BackgroundSet} from "../components/background"

import '../css/blog.scss'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <div class='root'>
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
      <Layout location={location} header={<Header title={siteTitle} links_to="blog" className="blog-header" />}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
        />
        <article className='blog-content'>
          <header>
            <h2>
              {post.frontmatter.title}
            </h2>
            <p className='date'>
              {post.frontmatter.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: "1.75rem",
            }}
          />
          <Bio />
        </article>

        <nav>
          <ul className='blog-nav'>
            <li className={previous ? 'blog-nav-button' : ''}>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li className={next ? 'blog-nav-button' : ''}>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
      }
    }
  }
`
