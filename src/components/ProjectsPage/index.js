import React from "react"
import allProjects from "@data/allProjects"
import projects from "@images/projects.png"
import YearlyProjects from "./YearlyProjects"

const ProjectsPage = () => {
  const reverseChronologicalYears = [...Object.keys(allProjects)].sort(
    (a, b) => b - a
  )

  return (
    <div className="container px-5 pb-5">
      <div className="has-text-centered pb-4">
        <img
          src={projects}
          className="responsive"
          alt="Triroyal engineering team."
        />
      </div>
      {reverseChronologicalYears.map((year) => (
        <YearlyProjects year={year} projectsList={allProjects[year]} />
      ))}
    </div>
  )
}

export default ProjectsPage
