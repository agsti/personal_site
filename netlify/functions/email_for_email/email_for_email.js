// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
const process = require("process")

const nodemailer = require("nodemailer")

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

  const unsubscribe_link = `https://www.agustibau.com/.functions/unsubscribe?email=${body.email}`
  try {
    let info = await transporter.sendMail({
      from: '"Agusti Bau 👻" <agusti@briefalert.io>',
      to: dest_addr,
      subject: "Here is my CV",
      text: `What is promised is promised. Sorry to make you go through this process. I have stored your email in an email list. You can delete it by replying to this email \"I just wanted to stalk you, please remove my email\" or clicking the following link ${unsubscribe_link}`,
      html: `What is promised is promised. Sorry to make you go through this process. I have stored your email in an email list. You can delete it by replying to this email "I just wanted to stalk you, please remove my email" or clicking the following link ${unsubscribe_link}`,
    })
    console.log("Email sent", info)
    return { statusCode: 200, body: "" }
  } catch (error) {
    return { statusCode: 500, body: error.message }
  }
}

module.exports = { handler }
