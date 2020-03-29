/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import '../css/base.scss';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
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
  return (
    <div
      class='bio-container'
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        className="bio-image"
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author.name}</strong> <br/>
        {` `}
        <strong>I'll love</strong> to know your thoughts about this post.<br/>
        <a href={`https://twitter.com/${social.twitter}`}>
          Here's my twitter
        </a>
      </p>
    </div>
  )
}

export default Bio
