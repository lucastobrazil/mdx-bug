import React from "react"
import { Box, Text } from "lucas-test-design-system"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { color, space } from "styled-system"
import themeGet from "@styled-system/theme-get"

const SIDEBAR_WIDTH = 347
const SIDE_PADDING = 64
const getSidebarWidth = () => SIDEBAR_WIDTH
const getSidebarPadding = () => SIDE_PADDING

const query = graphql`
  fragment mdxContent on MdxConnection {
    edges {
      node {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
  query {
    allMdx(
        filter: { fields: { sourceName: { eq: "components" } } }
        sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      ...mdxContent
    }
  }
`
const angledImage = ({tint, ...restProps}) => (
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    fill="currentColor"
    {...restProps}
  >
    <polygon points="0,100 100,0 0,0" />
  </svg>
)
const AngledBox = styled(angledImage)`
  ${color}
  ${space}
  height: 100vh;
  position: relative;
  background: transparent;
  width: 30px;
  margin-right: -10px;
  fill: ${ props => themeGet(props.tint)(props)};
`

function NavItem({ label, active, ...props }) {
  return (
    <Box {...props} as={Link} variant={active ? "active" : undefined} px={5}>
      <Text fontWeight="bold" color="white">
        {label}
      </Text>
    </Box>
  )
}

export default ({ title }) => {
  //   const pathname = props.location.pathname
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Box
          position="fixed"
          display="flex"
          color="white"
          width={SIDEBAR_WIDTH}
          //   mr={2}
          left={0}
          height="100%"
          style={{
            transition: "all 350ms ease-in-out",
            zIndex: 98,
            boxSizing: "border-box",
          }}
        >
          <Box
            bg="extended.neutrals.N700"
            color="white"
            pt={6}
            px={5}
            width={SIDEBAR_WIDTH}
          >
            <Text variant="h5" fontWeight="bold">
              {title}
            </Text>
            {data.allMdx.edges.map(({ node }, index) => (
              <NavItem
                key={index}
                to={node.fields.slug}
                //   active={pathname === node.fields.slug}
                label={node.frontmatter.title}
              />
            ))}
          </Box>
          <AngledBox tint="colors.extended.neutrals.N700" />
        </Box>
      )}
    ></StaticQuery>
  )
}

export { getSidebarPadding, getSidebarWidth }
