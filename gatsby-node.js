const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "styled-components": path.resolve("./node_modules/styled-components"),
      },
    },
  })
}

// Creating Documentation pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  const pageTemplate = path.resolve("./src/templates/layout-with-sidebar.js")

  // Redirect for /documentation page goes to first component
  const defaultPath = "/components/button"

  const allDocs = await graphql(
    `
      {
        allMdx(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (allDocs.errors) {
    console.error(`Error in allDocs: ${allDocs.errors}`)
    throw Error(`Error in allDocs: ${allDocs.errors}`)
  }

  // Dynamically create a page for each markdown file with layout: pageTemplate
  allDocs.data.allMdx.edges.forEach((page, index) => {
    const { slug } = page.node.fields

    // https://www.gatsbyjs.org/docs/actions/#createPage
    createPage({
      path: slug,
      component: pageTemplate,
      context: {
        slug,
      },
    })
  })

  // createRedirect({
  //   fromPath: `/`,
  //   isPermanent: true,
  //   redirectInBrowser: true,
  //   toPath: defaultPath,
  // });

  createRedirect({
    fromPath: `/components`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: defaultPath,
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = path.join(
      "/",
      "components",
      createFilePath({ node, getNode })
    )
    const parent = getNode(node.parent)

    if (parent.internal.type === "File") {
      createNodeField({
        name: `sourceName`,
        node,
        value: parent.sourceInstanceName,
      })
    }
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
