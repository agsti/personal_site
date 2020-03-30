import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/background"

import '../css/blog.scss'
import colors from '../css/_colors.scss';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <div class='root'>
      <div className="background-container">
        <Background color={colors.white1} n_elements={20} size={50} opacity={0.4} animationDuration={1000} />
        <Background color={colors.accent1} n_elements={5} size={50} opacity={0.6} animationDuration={2000} />
        {/* <Background color={colors.accentRed} n_elements={2} size={50} opacity={0.6} animationDuration={500} /> */}
        {/* <Background color={colors.dark} n_elements={3} size={50} opacity={0.5} animationDuration={500} /> */}
      </div>
      <Layout location={location} header={<Header title={siteTitle} links_to="blog" className="blog-header" />}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
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
        description
      }
    }
  }
`
