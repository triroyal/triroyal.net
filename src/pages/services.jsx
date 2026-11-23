import React from "react"

import ServicesPage from "@components/ServicesPage"
import Layout from "@components/layout"
import SEO from "@components/seo"

import "@components/styles.scss"

const Services = () => (
  <>
    <SEO
      title="Layanan Kontraktor PKS"
      description="Pembangunan pabrik kelapa sawit lengkap, fabrikasi dan instalasi sterilizer (termasuk oblique sterilizer), water treatment, tangki timbun dan bulking station."
    />
    <Layout>
      <ServicesPage />
    </Layout>
  </>
)

export default Services
