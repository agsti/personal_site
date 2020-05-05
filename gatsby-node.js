const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


const findNextIndex = (array, from_index, matcher) => {
  for (let index = from_index + 1; index < array.length; index++) {
    const element = array[index];
    if (matcher(element)){
      return element.node;
    }
  }
  return null;
}
const findPrevIndex = (array, from_index, matcher) => {
  for (let index = from_index -1; index >= 0; index--) {
    const element = array[index];
    if (matcher(element)){
      return element.node;
    }
  }
  return null;
}


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const projectPage = path.resolve(`./src/templates/project-page.js`)
  const result = await graphql(
    `
    {
      allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___date]}, limit: 1000, filter: {frontmatter: {draft: {ne: true}}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              project
            }
          }
        }
      }
    }
    
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    
    const { project } = post.node.frontmatter;
    
    const slug = post.node.fields.slug;
    if (project) {
      createPage({
        path: slug,
        component: projectPage,
        context: {
          slug: slug,
        },
      })
    } else {
      const previous = findPrevIndex(posts, index, (element)=> !element.node.frontmatter.project)
      const next = findNextIndex(posts, index, (element)=> !element.node.frontmatter.project)

      createPage({
        path: slug,
        component: blogPost,
        context: {
          slug: slug,
          previous,
          next,
        },
      })
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const { project } = node.frontmatter;
    let slug = project ? `/projects${value}`:`/blog${value}`;
    createNodeField({
      name: `slug`,
      node,
      value : slug
    })
  }
}
