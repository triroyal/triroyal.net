import React from "react"

import ContactPage from "@components/ContactPage"
import Layout from "@components/layout"
import SEO from "@components/seo"

import "@components/styles.scss"

const Contact = () => (
  <>
    <SEO
      title="Hubungi Kami"
      description="Hubungi PT Triroyal Timurraya di Kawasan Industri Modern IV, Deli Serdang: +62 852-7791-8325, +62 852-9889-0246, mail@triroyal.net."
    />
    <Layout>
      <ContactPage />
    </Layout>
  </>
)

export default Contact
