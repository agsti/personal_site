import React, { useState, useEffect } from "react"
import FlexSearch from "flexsearch"
import Moment from "moment"

const BookmarkSearch = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [index, setIndex] = useState(null)
  const [bookmarks, setBookmarks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load bookmarks data and create search index
    fetch("/bookmarks-data.json")
      .then((res) => res.json())
      .then((data) => {
        setBookmarks(data)

        // Create FlexSearch index
        const searchIndex = new FlexSearch.Index({
          tokenize: "forward",
          cache: true,
        })

        // Index all bookmarks
        data.forEach((bookmark, i) => {
          const searchText = [
            bookmark.title || "",
            bookmark.description || "",
            bookmark.tag_names || "",
            bookmark.url || "",
          ].join(" ")
          searchIndex.add(i, searchText)
        })

        setIndex(searchIndex)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error("Failed to load bookmarks:", err)
        setIsLoading(false)
      })
  }, [])

  const handleSearch = (e) => {
    const searchQuery = e.target.value
    setQuery(searchQuery)

    if (!searchQuery.trim() || !index) {
      setResults([])
      return
    }

    // Search and get results
    const resultIndices = index.search(searchQuery, { limit: 50 })
    const searchResults = resultIndices.map((i) => bookmarks[i])
    setResults(searchResults)
  }

  return (
    <div className="bookmark-search-container">
      <input
        type="text"
        className="bookmark-search-input"
        placeholder="Search bookmarks..."
        value={query}
        onChange={handleSearch}
        disabled={isLoading}
      />
      {isLoading && <div className="search-status">Loading bookmarks...</div>}
      {query && !isLoading && (
        <div className="search-results">
          {results.length > 0 ? (
            <>
              <div className="search-status">
                Found {results.length} result{results.length !== 1 ? "s" : ""}
              </div>
              {results.map((bookmark) => {
                const title =
                  bookmark.title || bookmark.website_title || bookmark.url
                const url = bookmark.url
                const description =
                  bookmark.description || bookmark.website_description
                const bookmark_added = Moment(bookmark.date_added)
                const bookmark_added_str = bookmark_added.format("Do MMM YYYY")

                return (
                  <div key={bookmark.id} className="bookmark-container">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <div className="bookmark-link">{title}</div>
                      {description && (
                        <div className="bookmark-desc">{description}</div>
                      )}
                      <div className="bookmark-meta">
                        {bookmark.tag_names && (
                          <span className="bookmark-tags">
                            {bookmark.tag_names}
                          </span>
                        )}
                        <span className="bookmark-date-small">
                          {bookmark_added_str}
                        </span>
                      </div>
                    </a>
                  </div>
                )
              })}
            </>
          ) : (
            <div className="search-status">No results found for "{query}"</div>
          )}
        </div>
      )}
    </div>
  )
}

export default BookmarkSearch
