import React from "react"
import { Link, graphql } from "gatsby"
import Moment from "moment"

const BookmarkList = ({ bookmarks }) => {
  const first_date = Moment(bookmarks[0].date_added)

  const first_date_str = first_date.format("Do MMMM YYYY")
  var last_date_found = first_date
  return (
    <div>
      <div className="bookmark-date">on {first_date_str}...</div>
      {bookmarks.map((bookmark) => {
        const title = bookmark.title || bookmark.website_title || bookmark.url
        const url = bookmark.url
        const description = bookmark.description || bookmark.website_description
        const bookmark_added = Moment(bookmark.date_added)
        var duration = Moment.duration(last_date_found.diff(bookmark_added))
        var days = duration.asDays()
        var date_el
        if (days > 7) {
          const bookmark_added_str = bookmark_added.format("Do MMMM YYYY")
          last_date_found = bookmark_added
          date_el = (
            <div className="bookmark-date">on {bookmark_added_str}...</div>
          )
        }
        return (
          <>
            {date_el}
            <div className="bookmark-container">
              <a href={url} target="_blank">
                <div className="bookmark-link">{title}</div>
                {description && (
                  <div className="bookmark-desc">{description}</div>
                )}
              </a>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default BookmarkList
