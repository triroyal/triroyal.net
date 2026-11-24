import React from "react"

import AboutPage from "@components/AboutPage"
import Layout from "@components/layout"
import SEO from "@components/seo"

import "@components/styles.scss"

const About = () => (
  <>
    <SEO title="Tentang Kami" />
    <Layout>
      <AboutPage />
    </Layout>
  </>
)

export default About
