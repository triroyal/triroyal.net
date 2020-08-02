/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Header from "@components/header"
import Footer from "@components/footer"

import "@components/styles.scss"

const Layout = ({ children }) => (
  <>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
