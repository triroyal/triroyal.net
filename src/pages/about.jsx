import React from "react"

import AboutPage from "@components/AboutPage"
import Layout from "@components/layout"
import SEO from "@components/seo"

import "@components/styles.scss"

const About = () => (
  <>
    <SEO
      title="Tentang Kami"
      description="Didirikan di Medan oleh R. Kasin, awalnya di konstruksi baja berat dan water treatment plant, sekarang kontraktor sipil, mekanikal dan elektrikal untuk pabrik kelapa sawit."
    />
    <Layout>
      <AboutPage />
    </Layout>
  </>
)

export default About
