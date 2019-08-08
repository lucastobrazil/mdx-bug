import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Box } from "lucas-test-design-system"
import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import Sidebar, {
  getSidebarPadding,
  getSidebarWidth,
} from "../components/sidebar"
import { MDXRenderer } from "gatsby-plugin-mdx"

const SIDEBAR_WIDTH = getSidebarWidth()
const SIDE_PADDING = getSidebarPadding()

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        subTitle
        component
      }
      fields {
          slug
      }
      body
    }
  }
`

export default ({ data }) => {
  const children = <MDXRenderer children={data.mdx.body} />
  return (
    <Layout ml={SIDEBAR_WIDTH}>
      <>
        <Sidebar title="Components" />
        <PageHeader
          category="Components"
          title={data.mdx.frontmatter.title}
          subTitle={data.mdx.frontmatter.subTitle}
          pl={8}
        />
        <Box pt={4} ml={8} maxWidth={640}>{children}</Box>
      </>
    </Layout>
  )
}
