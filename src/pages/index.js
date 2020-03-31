import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import {BackgroundSet} from "../components/background"

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
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  const {twitter, email} = data.site.siteMetadata.social;

  const [contactVisible, setContactVisible] = useState(false);
  const onContactClick = () => {
    setContactVisible(prev => !prev);
  }

  const cvPdf = data.allFile.edges[0].node.publicURL;
  console.log(cvPdf);
  return (<div className='root'>
    <BackgroundSet
      light1props={{
        n_elements: 30,
        size: 50,
        opacity: 0.4,
        animationDuration: 3000,
      }}
      accent1props={{
        n_elements: 5,
        size: 50,
        opacity: 0.6,
      }}
      accent2props={{
        n_elements: 2,
        size: 50,
        opacity: 0.6,
      }}
      darkprops={{
        n_elements: 3,
        size: 50,
        opacity: 0.5,
        animationDuration: 1000,
      }}
    />
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
              <Link to='/projects'>
                Projects
                </Link>
            </li>
            <li>
              <Link to={cvPdf}>
                CV
                </Link>
            </li>
            <li>
              <Link to='/blog'>
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

