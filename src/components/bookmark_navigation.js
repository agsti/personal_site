import React from "react"
import { Link } from "gatsby"

import "../css/base.scss"

const BookmarkNavigation = props => {
  const { numPages, currentPage } = props
  const previous = currentPage != 0
  const previous_link =
    currentPage == 1 ? "/bookmarks" : `/bookmarks/${currentPage - 1}`
  const next = currentPage != numPages - 1
  return (
    <nav>
      <ul className="blog-nav">
        <li className={previous ? "blog-nav-button" : ""}>
          {previous && (
            <Link to={previous_link} rel="prev">
              ← Previous
            </Link>
          )}
        </li>
        <li className={next ? "blog-nav-button" : ""}>
          {next && (
            <Link to={`/bookmarks/${currentPage + 1}`} rel="next">
              Next →
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}
export default BookmarkNavigation
