import React from "react"

import ProjectsPage from "@components/ProjectsPage"
import Layout from "@components/layout"
import SEO from "@components/seo"

import "@components/styles.scss"

const Projects = () => (
  <>
    <SEO
      title="Daftar Proyek"
      description="Lebih dari 130 proyek pembangunan dan pengembangan pabrik kelapa sawit untuk 95 klien di Sumatera, Kalimantan dan Sarawak sejak 1994."
    />
    <Layout>
      <ProjectsPage />
    </Layout>
  </>
)

export default Projects
