import React from "react"

import ServicesPage from "@components/ServicesPage"
import Layout from "@components/layout"
import SEO from "@components/seo"

import "@components/styles.scss"

const Services = () => (
  <>
    <SEO title="Services" />
    <Layout>
      <ServicesPage />
    </Layout>
  </>
)

export default Services
