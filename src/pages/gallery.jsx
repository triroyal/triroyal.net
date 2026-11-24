import React from "react"

import GalleryPage from "@components/GalleryPage"
import Layout from "@components/layout"
import SEO from "@components/seo"

import "@components/styles.scss"

const Gallery = () => (
  <>
    <SEO title="Galeri" />
    <Layout>
      <GalleryPage />
    </Layout>
  </>
)

export default Gallery
