import React from "react"

import ServicesPage from "@components/ServicesPage"
import Layout from "@components/layout"
import SEO from "@components/seo"

import "@components/styles.scss"

const Services = () => (
  <>
    <SEO
      title="Pembangunan dan Upgrade PKS"
      description="PKS baru 30–60 TPH, penambahan kapasitas, sterilizer oblique dan vertikal, tangki timbun sampai 50.000 MT, bulking station, kernel crushing plant dan water treatment."
    />
    <Layout>
      <ServicesPage />
    </Layout>
  </>
)

export default Services
