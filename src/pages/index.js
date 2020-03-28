import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import '../css/index.scss'

const Index = ({ location }) => {
    const data = useStaticQuery(graphql`
    query IndexQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)
    const { author, social } = data.site.siteMetadata
    // const siteTitle = data.site.siteMetadata.title;
    return (<Layout location={location}>
        <SEO title="Bending software here and there" />
        <div class="greeter-container">
            <div class="greeter-box">
                <h1>Hey, I'm Agusti.</h1>
                <h2>I'm a full-stack software engineer. Currently based in london.
                    
                </h2>
            </div>
            <ul class='section-list'>
                <li>
                <Link to='blog'>
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
                <Link to='blog'>
                    Contact
                </Link>
                </li>
            </ul>
        </div>
    </Layout>)
}

export default Index

