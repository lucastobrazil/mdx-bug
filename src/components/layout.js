/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import * as DS from "lucas-test-design-system"
import CodeBlock from "./code-block"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "../theme"

import "./layout.css"

import { MDXProvider } from "@mdx-js/react"

const GlobalStyle = createGlobalStyle`
body {
  font-family: ${props => props.theme.fonts.default};
}
`
const HEADER_HEIGHT = 80

const components = {
  h1: props => <DS.Text variant="h1" mb={3} {...props} />,
  h2: props => <DS.Text variant="h2" fontWeight="bold" mt={6} mb={2} {...props} />,
  h3: props => <DS.Text variant="h3" fontWeight="500" mt={4} mb={2}  {...props} />,
  code: CodeBlock,
  ...DS,
}
const Layout = ({ children, ml }) => {
  return (
    <MDXProvider components={components}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />

          <div>
            <DS.Box as="main" mt={HEADER_HEIGHT} ml={ml} color="text">
              {children}
            </DS.Box>
          </div>
        </>
      </ThemeProvider>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
