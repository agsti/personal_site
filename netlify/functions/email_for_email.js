const process = require("process")

const nodemailer = require("nodemailer")
const htmlToText = require("nodemailer-html-to-text").htmlToText

const { validateEmail, validateLength } = require("./validations.js")

const error_response = (msg) => {
  return {
    statusCode: 500,
    body: msg,
  }
}

const send_email = async (host, username, password, dest_email) => {
  let transporter = nodemailer.createTransport({
    host: host,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: username,
      pass: password,
    },
  })
  transporter.use("compile", htmlToText())

  return await transporter.sendMail({
    from: '"Agusti Bau" <agusti@briefalert.io>',
    to: dest_email,
    subject: "Agusti's Bau CV",
    attachments: [
      {
        filename: "AgustiBau-CV.pdf",
        path: "https://www.agustibau.com/AgustiBau-CV.pdf",
      },
    ],
    html: `What is promised is promised.<br>Sorry to make you go through this process.<br><br>
        I have not stored your email in any other way than this email itself in my sent folder. It's probably fair<br>Hit me up, I'm nice`,
  })
}

const handler = async (event) => {
  if (!process.env.SMTP_USERNAME) {
    return error_response("process.env.SMTP_USERNAME must be defined")
  }
  const smtp_username = process.env.SMTP_USERNAME

  if (!process.env.SMTP_PASSWORD) {
    return error_response("process.env.SMTP_PASSWORD must be defined")
  }
  const smtp_password = process.env.SMTP_PASSWORD

  if (!process.env.SMTP_HOST) {
    return error_response("process.env.SMTP_HOST must be defined")
  }
  const smtp_host = process.env.SMTP_HOST
  const body = JSON.parse(event.body)

  try {
    validateEmail("body.email", body.email)
    const info = await send_email(
      smtp_host,
      smtp_username,
      smtp_password,
      body.email
    )
    console.log("Email sent", info)
    return { statusCode: 200, body: "" }
  } catch (error) {
    return { statusCode: 500, body: error.message }
  }
}

module.exports = { handler }
