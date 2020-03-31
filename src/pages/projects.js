import React from "react"
import { Link, graphql, Image } from "gatsby"

import { BackgroundSet } from "../components/background"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

import "../css/base.scss"
import "../css/projects.scss"

const ProjectsIndex = ({ data, location }) => {
    const Projects = data.allMarkdownRemark.edges
    const title = "Projects";
    return (
        <div class='root'>
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
            <Layout location={location} header={<Header title={title} links_to="projects" className="projects-header" />}>
                <SEO title={title} />
                <div className='project-container'>
                    {
                        Projects.map(({ node }) => {
                            const { html, fields } = node;
                            const { title, link, status, technologies } = node.frontmatter;
                            return <div className="project-item">
                                {/* <Image /> */}
                                <div className="project-data">
                                    <h2>{title}</h2>
                                    <small className={`status-${status}`}>{status}</small>
                                </div>
                                <ul className="project-tech">
                                    {
                                        technologies.map(t => <li key={t}>{t}</li>)
                                    }
                                </ul>
                                <section dangerouslySetInnerHTML={{ __html: html }} />
                                {link && <a className="project-link" href={link}>link</a>}
                            </div>
                        })
                    }
                </div>
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
          }
        }
      }
    }
  }
  
`
