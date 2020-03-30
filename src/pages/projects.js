import React from "react"
import { Link, graphql, Image } from "gatsby"

import Background from "../components/background"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

import "../css/base.scss"
import "../css/projects.scss"
import colors from '../css/_colors.scss';

const ProjectsIndex = ({ data, location }) => {
    const Projects = data.allMarkdownRemark.edges
    const title = "Projects";
    return (
        <div class='root'>
            <div className="background-container">
                <Background color={colors.light1} n_elements={10} size={50} opacity={0.4} animationDuration={1000} />
                <Background color={colors.accent1} n_elements={5} size={50} opacity={0.6} />
                <Background color={colors.accent2} n_elements={2} size={50} opacity={0.6} animationDuration={500} />
                <Background color={colors.dark} n_elements={3} size={50} opacity={0.5} animationDuration={500} />
            </div>
            <Layout location={location} header={<Header title={title} links_to="projects" />}>
                <SEO title={title} />
                <div className='project-container'>
                    {
                        Projects.map(({ node }) => {
                            const { title, description, image, technologies } = node.frontmatter;
                            return <div className="project-item">
                                {/* <Image /> */}
                                <div className="project-data">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                    <ul className="project-tech">
                                    {
                                        technologies.map(t => <li key={t}>{t}</li>)
                                    }
                                    </ul>
                                </div>
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
    allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___project_index]}, filter: {frontmatter: {project: {eq: true}, image: {}}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            technologies
            image {
              id
            }
          }
        }
      }
    }
  }
  
`
