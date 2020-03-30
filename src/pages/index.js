import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Background from "../components/background"

import '../css/index.scss'

const Index = ({ location }) => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            twitter
            email
          }
        }
      }
    }
  `)
  console.log("colors", colors);
  const {twitter, email} = data.site.siteMetadata.social;

  const [contactVisible, setContactVisible] = useState(false);
  const onContactClick = () => {
    setContactVisible(prev => !prev);
  }
  const colors = {
    "accent1": "#5D21D0",
    "accent2": "#BFF128",
    "light1": "#f9f8f8",
    "light2": "#85cfb6",
    "light3": "#10A674",
    "dark": "#062E03"
  }
  return (<div className='root'>
    <div className="background-container">
      <Background color={colors.light1} n_elements={30} size={50} opacity={0.4} animationDuration={3000} />
      <Background color={colors.accent1} n_elements={5} size={50} opacity={0.6} />
      <Background color={colors.accent2} n_elements={2} size={50} opacity={0.6} />
      <Background color={colors.dark} n_elements={3} size={50} opacity={0.5} animationDuration={1000} />
    </div>
    <Layout location={location}>
      <SEO title="Hi :)" />
      <div className="greeter-container">
        <div className='greeter-box'>
          <div className='greeter-text'>
            <h1>Hey, <em className='name'>I'm Agusti.</em></h1>
            <Contact isShown={contactVisible} twitter={twitter} emailAddress={email}/>
            <h2>I'm a full-stack software engineer. Currently based in London.
                </h2>
          </div>
          <ul className='section-list'>
            <li>
              <Link to='projects'>
                Projects
                </Link>
            </li>
            <li>
              <Link to='blog'>
                CV
                </Link>
            </li>
            <li>
              <Link to='blog'>
                Writtings
                </Link>
            </li>
            <li>
              <a href="#" onClick={onContactClick}>
                Contact
                </a>
            </li>
          </ul>
        </div>

      </div>

    </Layout>
  </div>)
}

export default Index

