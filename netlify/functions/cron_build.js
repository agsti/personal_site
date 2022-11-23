import fetch from "node-fetch"
import { schedule } from "@netlify/functions"

// This is a sample build hook URL
const BUILD_HOOK = process.env.HOOK_URL

// Schedules the handler function to run at midnight on
// Mondays, Wednesday, and Friday
const handler = schedule("0 0 * * 1,3,5", async () => {
  await fetch(BUILD_HOOK, {
    method: "POST",
  }).then(response => {
    console.log("Build hook response:", response)
  })

  return {
    statusCode: 200,
  }
})

export { handler }
