import React, { useState } from "react"
import { Link } from "gatsby"

import { Layout, Content } from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Modal from "../components/modal"

import "../css/index.scss"
import { LottieBg } from "../components/bg_lottie/lottie_bg"

const Index = ({ location }) => {
  const [contactVisible, setContactVisible] = useState(false)
  const [cvModalVisible, setCvModalVisible] = useState(false)

  const onContactClick = () => {
    setContactVisible((prev) => !prev)
  }

  return (
    <>
      {cvModalVisible && <Modal closeModal={() => setCvModalVisible(false)} />}
      <div className="root">
        <LottieBg />
        <Layout location={location}>
          <SEO title="My corner of the internet" />
          <Content>
            <div className="greeter-container">
              <div className="greeter-box">
                <div className="greeter-text">
                  <h1>Software solutions</h1>
                  <Contact isShown={contactVisible} />
                </div>
                <ul className="section-list">
                  <li>
                    <Link to="/case-studies">Case studies</Link>
                  </li>
                  <li>
                    <a href="#" onClick={() => setCvModalVisible(true)}>
                      Experience
                    </a>
                  </li>
                  <li>
                    <Link to="/blog">Writings</Link>
                  </li>
                  <li>
                    <Link to="/bookmarks">Bookmarks</Link>
                  </li>
                </ul>
                <ul className="section-list section-bookmarks">
                  <li>
                    <a href="#" onClick={onContactClick}>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footnote">🚀</div>
            </div>
          </Content>
        </Layout>
      </div>
    </>
  )
}

export default Index
