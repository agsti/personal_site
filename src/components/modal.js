import React, { useState } from "react"

import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

import "../css/modal.scss"

const email_for_email_url = ".netlify/functions/email_for_email"

export default ({ closeModal }) => {
  const data = useStaticQuery(graphql`
    query EmailForEmailQuery {
      site {
        siteMetadata {
          social {
            linkedin
          }
        }
      }
    }
  `)
  const [email, setEmail] = useState("")

  const onSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    }
    fetch(email_for_email_url, requestOptions).then((response) => {
      console.log("Email captured!")
      closeModal()
    })
  }

  const { linkedin } = data.site.siteMetadata.social
  return (
    <div className="modal-bg">
      <div className="modal-card">
        <FontAwesomeIcon
          height={35}
          width={35}
          className="close-button"
          onClick={closeModal}
          icon={faXmark}
        />
        <h3>I no longer share my CV openly😥</h3>
        <br />I can send it to you in exchange for your email
        <div className="input-container">
          <input
            type="text"
            name="email"
            className="modal-input"
            placeholder="your@email.com"
            value={email}
            onChange={(el) => setEmail(el.target.value)}
          />
          <button className="contact-button" onClick={onSubmit}>
            Get CV
          </button>
        </div>
        <a href={linkedin}>Linkedin </a>
        is still updated
      </div>
    </div>
  )
}
