import React from "react"

import ContactPage from "@components/ContactPage"
import Layout from "@components/layout"
import SEO from "@components/seo"

import "@components/styles.scss"

const Contact = () => (
  <>
    <SEO
      title="Hubungi Kami"
      description="Kirimkan kapasitas dan lokasi rencana PKS Anda. Kantor kami di Kawasan Industri Modern IV, Deli Serdang, telepon +62 852-7791-8325 atau +62 852-9889-0246."
    />
    <Layout>
      <ContactPage />
    </Layout>
  </>
)

export default Contact
