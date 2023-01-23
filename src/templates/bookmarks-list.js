import React from "react"
import { Link, graphql } from "gatsby"

import { BackgroundSet } from "../components/background"
import { Layout, Content } from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import BookmarkNavigation from "../components/bookmark_navigation"
import BookmarkList from "../components/bookmark_list"

import "../css/bookmarks.scss"
import "../css/base.scss"

const BookmarkIndex = (props) => {
  const { data, location, pageContext } = props
  const bookmarks = data.allBookmark.nodes

  const { numPages, currentPage } = pageContext
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
        <Header title="Best of internet" links_to="/" className="blog-header" />
        <Content>
          <div className="bookmark-intro">
            This is a list of interesting websites I've found. Maybe you find
            them interesting too.
          </div>
          <BookmarkNavigation numPages={numPages} currentPage={currentPage} />
          <BookmarkList bookmarks={bookmarks} />

          <BookmarkNavigation numPages={numPages} currentPage={currentPage} />
        </Content>
      </Layout>
    </div>
  )
}

export default BookmarkIndex

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allBookmark(
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: date_added }
    ) {
      nodes {
        id
        tag_names
        url
        website_title
        website_description
        date_added
        title
        description
      }
    }
  }
`
