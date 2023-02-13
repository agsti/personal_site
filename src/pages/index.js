import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { Layout, Content } from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import { NewBackground } from "../components/3d_background"
import { Background2 } from "../components/background2/background2.js"

import "../css/index.scss"

const Index = ({}) => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            github
            email
          }
        }
      }
    }
  `)
  const { github, email } = data.site.siteMetadata.social

  const [contactVisible, setContactVisible] = useState(false)
  const onContactClick = () => {
    setContactVisible((prev) => !prev)
  }

  const cvPdf = "/AgustiBau-CV.pdf"
  return (
    <div className="root">
      <Background2 />
      <Layout location={window.location}>
        <SEO title="My corner of the internet" />
        <Content>
          <div className="greeter-container">
            <div className="greeter-box">
              <div className="greeter-text">
                <h1>
                  Hey, <em className="name">I'm Agusti.</em>
                </h1>
                <Contact
                  isShown={contactVisible}
                  github={github}
                  emailAddress={email}
                />
                <h2>
                  I'm a software engineer. <br />
                  Currently working at{" "}
                  <a href="https://www.clovrlabs.com/">Clovr Labs</a>
                </h2>
              </div>
              <ul className="section-list">
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <a href={cvPdf}>CV</a>
                </li>
                <li>
                  <Link to="/blog">Writings</Link>
                </li>
                <li>
                  <a href="#" onClick={onContactClick}>
                    Contact
                  </a>
                </li>
              </ul>
              <ul className="section-list section-bookmarks">
                <li>
                  <Link to="/bookmarks">Best of the internet</Link>
                </li>
              </ul>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  )
}

export default Index
