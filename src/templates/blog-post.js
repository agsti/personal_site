import React from "react"
import { Link, graphql } from "gatsby"

import Gitalk from "gatsby-plugin-gitalk"

import Bio from "../components/bio"
import Header from "../components/header"
import { Layout, Content } from "../components/layout"
import SEO from "../components/seo"
import { BackgroundSet } from "../components/background"

import "@suziwen/gitalk/dist/gitalk.css"
import "../css/blog.scss"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  console.log(post)
  const { slug } = data
  const gitalkConfig = {
    id: slug || post.id,
    title: post.frontmatter.title,
  }
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
        <Header title={siteTitle} links_to="/blog" className="blog-header" />
        <Content>
          <article className="blog-content">
            <header>
              <h1>{post.frontmatter.title}</h1>
              <div className="sub-header">
                <p className="date">{post.frontmatter.date}</p>
                <p className="date">{post.timeToRead} minutes</p>
              </div>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <Bio />
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
      timeToRead
    }
  }
`
