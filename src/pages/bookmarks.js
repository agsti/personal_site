import React from "react"
import { Link, graphql } from "gatsby"

import { BackgroundSet } from "../components/background"
import { Layout, Content } from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

import "../css/bookmarks.scss"
import "../css/base.scss"

const BookmarkIndex = ({ data, location }) => {
  const bookmarks = data.allBookmark.nodes
  console.log(bookmarks)

  return (
    <div class="root">
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
      <Layout location={location}>
        <SEO title="Bookmarks" />
        <Header title={"Agusti's Blog"} links_to="/" className="blog-header" />
        <Content>
          {bookmarks.map(bookmark => {
            const title = bookmark.website_title || bookmark.website_url
            const url = bookmark.website_url
            return (
              <div className="link-container">
                <Link style={{ boxShadow: `none` }} to={url}>
                  {title}
                </Link>
              </div>
            )
          })}
        </Content>
      </Layout>
    </div>
  )
}

export default BookmarkIndex

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allBookmark {
      nodes {
        id
        tag_names
        url
        website_title
        date_added
      }
    }
  }
`
