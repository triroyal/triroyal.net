import React from "react"

import AboutPage from "@components/AboutPage"
import Layout from "@components/layout"
import SEO from "@components/seo"

import "@components/styles.scss"

const About = () => (
  <>
    <SEO
      title="Tentang Kami"
      description="Didirikan di Medan pada 1994, PT Triroyal Timurraya adalah kontraktor sipil, mekanikal dan elektrikal untuk pembangunan pabrik kelapa sawit (PKS) di seluruh Indonesia."
    />
    <Layout>
      <AboutPage />
    </Layout>
  </>
)

export default About
