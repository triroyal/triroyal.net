import React from "react"

import ContactPage from "@components/ContactPage"
import Layout from "@components/layout"
import SEO from "@components/seo"

import "@components/styles.scss"

const Contact = () => (
  <>
    <SEO title="Contact" />
    <Layout>
      <ContactPage />
    </Layout>
  </>
)

export default Contact
