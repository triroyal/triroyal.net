import React from "react"

import LandingPage from "@components/LandingPage"
import Layout from "@components/layout"
import SEO from "@components/seo"

import "@components/styles.scss"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <LandingPage />
    </Layout>
  </>
)

export default IndexPage
