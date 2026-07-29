import React from "react"

import ProjectsPage from "@components/ProjectsPage"
import Layout from "@components/layout"
import SEO from "@components/seo"

import "@components/styles.scss"

const Projects = () => (
  <>
    <SEO title="Projects" />
    <Layout>
      <ProjectsPage />
    </Layout>
  </>
)

export default Projects
