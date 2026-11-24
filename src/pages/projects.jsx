import React from "react"

import ProjectsPage from "@components/ProjectsPage"
import Layout from "@components/layout"
import SEO from "@components/seo"

import "@components/styles.scss"

const Projects = () => (
  <>
    <SEO
      title="Daftar Proyek PKS"
      description="132 proyek untuk 95 klien sejak 2000: 32 PKS baru, 25 penambahan kapasitas, 30 pekerjaan sterilizer, dan tangki timbun serta bulking station. Lengkap dengan klien, lokasi dan tahun."
    />
    <Layout>
      <ProjectsPage />
    </Layout>
  </>
)

export default Projects
