import axios from "axios"

const do_request = async (method, url, post_body = null) => {
  console.log(`REQUESTING ${url}`)
  const linkding_token = process.env.LINKDING_TOKEN
  const { data } = await axios({
    method: method,
    url: `https://links.agustibau.com/${url}`,
    headers: {
      Authorization: `Token ${linkding_token}`,
    },
    data: post_body,
  })
  return data
}

const get_bookmarks = async () => {
  const resp = await do_request("GET", "api/bookmarks/?limit=9999")
  return resp["results"]
}
const check = async (url) => {
  const encoded = encodeURIComponent(url)
  const resp = await do_request("GET", `api/bookmarks/check/?url=${encoded}`)
  return resp.metadata
}
const update_bookmark = async (bookmark_id, bookmark) => {
  const resp = await do_request(
    "PUT",
    `api/bookmarks/${bookmark_id}/`,
    bookmark
  )
  return resp
}

const bookmarks = await get_bookmarks()
for (const bookmark of bookmarks) {
  try {
    const check_bookmark = await check(bookmark.url)
    // console.log(check_bookmark)

    if (check_bookmark.title != null) {
      bookmark.title = check_bookmark.title
    }
    if (check_bookmark.description != null) {
      bookmark.description = check_bookmark.description
    }
    if (check_bookmark.description != null && check_bookmark.title != null) {
      const updated_bookmark = await update_bookmark(bookmark.id, bookmark)
    }
    // console.log(updated_bookmark0)
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message)
    }
  }
}
