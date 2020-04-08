import React, { useState } from "react"
import { Link, graphql, Image } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { BackgroundSet } from "../components/background"
import {Layout, Content} from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

import "../css/base.scss"
import "../css/projects.scss"

const ProjectsIndex = ({ data, location }) => {
  const Projects = data.allMarkdownRemark.edges
  const title = "Projects";


  return (
    <div className='root'>
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
        <Header title={title} links_to="projects" className="projects-header" />
        <Content>
          <div className="main-container">
        <p className="p-brief">This is a showcase of things I've built and got to the point where I can name them :). Some of them are built because I thought someone would benefit from them. Most of them were built because it was fun.</p>
        <div className='project-container'>
          {
            Projects.map((p, i) => {
              const { title, thumbnail, technologies } = p.node.frontmatter;
              console.log(thumbnail.childImageSharp)
              return <Link className="p-item-link" to={p.node.fields.slug} >
                <div
                  className={"project-item-g"}
                  >
                  <img src={thumbnail.childImageSharp.fixed.src} />
                  <div className="project-card">
                    <div className="project-left-card">
                      <div className="project-item-title">
                        <span>
                          {title}
                        </span>
                      </div>
                      <ul className="project-tech">
                        {
                          technologies.map(t => <li>{t}</li>)
                        }
                      </ul>
                    </div>
                    {/* <div className="project-right-card">
                      <FontAwesomeIcon icon={faHeart} />
                    </div> */}
                  </div>

                </div>
            </Link>
            })
          }
        </div>
        </div>
        </Content>
      </Layout>
    </div>);
}

export default ProjectsIndex;


export const pageQuery = graphql`
{
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___project_index]}, filter: {frontmatter: {project: {eq: true}}}) {
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
            link
            status
            thumbnail {
              id
              childImageSharp {
                fixed(height: 300, width: 300, fit: CONTAIN, background:"#f9f8f8") {
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
