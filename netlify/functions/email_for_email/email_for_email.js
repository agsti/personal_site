// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
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

const handler = async (event) => {
  if (!process.env.SMTP_USERNAME) {
    return error_response("process.env.SMTP_USERNAME must be defined")
  }
  const smtp_username = process.env.SMTP_USERNAME

  if (!process.env.SMTP_PASSWORD) {
    return error_response("process.env.SMTP_PASSWORD must be defined")
  }
  const smtp_password = process.env.SMTP_PASSWORD

  const body = JSON.parse(event.body)

  try {
    validateEmail("body.email", body.email)
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message,
    }
  }
  let transporter = nodemailer.createTransport({
    host: "box.briefalert.io",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: smtp_username,
      pass: smtp_password,
    },
  })
  transporter.use("compile", htmlToText())

  const unsubscribe_link = `https://www.agustibau.com/.functions/unsubscribe?email=${body.email}`
  try {
    let info = await transporter.sendMail({
      from: '"Agusti Bau" <agusti@briefalert.io>',
      to: body.email,
      subject: "Here is my CV",
      html: `What is promised is promised.<br>Sorry to make you go through this process.<br><br>
        <b>My cv can be found <a href="https://www.agustibau.com/AgustiBau-CV.pdf">here</a></b><br><br>
        I have stored your email in an email list. I will only send a message when I build something new. <br><br>I won't sell the data or anything like that <br> You can ask to delete it by replying to this email "Please remove my email"<br> or clicking the following <a href="${unsubscribe_link}">link </a>`,
    })
    console.log("Email sent", info)
    return { statusCode: 200, body: "" }
  } catch (error) {
    return { statusCode: 500, body: error.message }
  }
}

module.exports = { handler }
