const process = require("process")

const nodemailer = require("nodemailer")
const htmlToText = require("nodemailer-html-to-text").htmlToText

const error_response = (msg) => {
  return {
    statusCode: 500,
    body: msg,
  }
}

const escape_html = (v) =>
  String(v).replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c]
  )

const render_role_rows = (roleResults) =>
  roleResults
    .map(
      (r) => `
        <tr>
          <td>${escape_html(r.name || r.en || "")}</td>
          <td style="text-align:right">${escape_html(r.total)}</td>
          <td>${escape_html(r.range && r.range.label ? r.range.label : "")}</td>
        </tr>`
    )
    .join("")

const build_html = ({ answers, roleResults }) => {
  const sorted = [...roleResults].sort((a, b) => b.total - a.total)
  return `
    <h2>New work style questionnaire result</h2>
    <p>Someone just completed the questionnaire on agustibau.com/work-style.</p>

    <h3>Roles ordered by score</h3>
    <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse">
      <thead>
        <tr><th align="left">Role</th><th align="right">Total</th><th align="left">Range</th></tr>
      </thead>
      <tbody>${render_role_rows(sorted)}</tbody>
    </table>

    <h3>Raw answers</h3>
    <pre style="font-family:monospace; font-size:12px">${escape_html(
      JSON.stringify(answers, null, 2)
    )}</pre>
  `
}

const send_email = async (host, username, password, html) => {
  const transporter = nodemailer.createTransport({
    host: host,
    port: 465,
    secure: true,
    auth: {
      user: username,
      pass: password,
    },
  })
  transporter.use("compile", htmlToText())

  return await transporter.sendMail({
    from: '"Work Style Form" <agusti@briefalert.io>',
    to: "agustibau@gmail.com",
    subject: "New work style questionnaire result",
    html,
  })
}

const handler = async (event) => {
  if (!process.env.SMTP_USERNAME) {
    return error_response("process.env.SMTP_USERNAME must be defined")
  }
  if (!process.env.SMTP_PASSWORD) {
    return error_response("process.env.SMTP_PASSWORD must be defined")
  }
  if (!process.env.SMTP_HOST) {
    return error_response("process.env.SMTP_HOST must be defined")
  }

  let body
  try {
    body = JSON.parse(event.body || "{}")
  } catch (e) {
    return { statusCode: 400, body: "invalid json" }
  }

  const { answers, roleResults } = body
  if (!Array.isArray(answers) || !Array.isArray(roleResults)) {
    return {
      statusCode: 400,
      body: "answers and roleResults arrays are required",
    }
  }

  try {
    const info = await send_email(
      process.env.SMTP_HOST,
      process.env.SMTP_USERNAME,
      process.env.SMTP_PASSWORD,
      build_html({ answers, roleResults })
    )
    console.log("Work style email sent", info)
    return { statusCode: 200, body: "" }
  } catch (error) {
    return { statusCode: 500, body: error.message }
  }
}

module.exports = { handler }
