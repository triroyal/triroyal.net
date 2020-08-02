import React from "react"

import ProjectsPage from "@components/ProjectsPage"
import Layout from "@components/layout"
import SEO from "@components/seo"

import "@components/styles.scss"

const Projects = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <ProjectsPage />
    </Layout>
  </>
)

export default Projects
