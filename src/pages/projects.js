import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import { BackgroundSet } from "../components/background"
import { Layout, Content } from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

import "../css/base.scss"
import "../css/projects.scss"

const ProjectsIndex = ({ data, location }) => {
  const Projects = data.allMarkdownRemark.edges
  const title = "Case studies"

  return (
    <div className="root">
      <BackgroundSet
        light1props={{
          n_elements: 10,
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
          animationDuration: 500,
        }}
        darkprops={{
          n_elements: 3,
          size: 50,
          opacity: 0.5,
          animationDuration: 1000,
        }}
      />
      <Layout location={location}>
        <SEO title={title} />
        <Header title={title} links_to="/" className="projects-header" />
        <Content>
          <div className="project-container">
            {Projects.map((p, i) => {
              const { title, thumbnail, technologies } = p.node.frontmatter
              return (
                <Link className="p-item-link" to={p.node.fields.slug}>
                  <div className={"project-item-g"}>
                    <img src={thumbnail.childImageSharp.fixed.src} />
                    <div className="project-card">
                      <div className="project-left-card">
                        <div className="project-item-title">
                          <span>{title}</span>
                        </div>
                        <ul className="project-tech">
                          {technologies.map((t) => (
                            <li>{t}</li>
                          ))}
                        </ul>
                      </div>
                      {/* <div className="project-right-card">
                      <FontAwesomeIcon icon={faHeart} />
                    </div> */}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </Content>
      </Layout>
    </div>
  )
}

export default ProjectsIndex

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___project_index] }
      filter: { frontmatter: { project: { eq: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          html
          frontmatter {
            title
            technologies
            status
            thumbnail {
              id
              childImageSharp {
                fixed(
                  height: 300
                  width: 300
                  fit: CONTAIN
                  background: "#f9f8f8"
                ) {
                  src
                }
              }
            }
          }
          id
        }
      }
    }
  }
`
