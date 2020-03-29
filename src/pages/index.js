import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/background"
import Image from "gatsby-image"
import '../css/index.scss'
import colors from '../css/_colors.scss';

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
    return (<div>
      <div className="background-container">
        <Background color={colors.white1} n_elements={30} size={50} opacity={0.6}/>
        <Background color={colors.accentBlue} n_elements={5} size={50} opacity={1}/>
        <Background color={colors.accentRed} n_elements={2} size={50} opacity={0.6}/>
        <Background color={colors.dark} n_elements={3} size={50} opacity={0.5}/>
      </div>
    <Layout location={location}>
        <SEO title="Bending software here and there" />
        <div class="greeter-container">
            <div class='greeter-box'>
            <div class='greeter-text'>
                <h1>Hey, <em class='name'>I'm Agusti.</em></h1>
                <h2>I'm a full-stack software engineer. Currently based in London.
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
            
        </div>
        
    </Layout>
    </div>)
}

export default Index

