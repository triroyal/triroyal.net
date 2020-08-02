import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import projects from "@images/projects.png"
import YearlyProjects from "./YearlyProjects"

const getUniqueYears = (projects) =>
  projects
    .map((p) => p.year)
    .filter((val, idx, arr) => arr.indexOf(val) === idx)
    .sort((a, b) => parseInt(b, 10) - parseInt(a, 10))

const csvReducer = (map, val) => {
  const { client, description, location, year } = val
  // defaults to empty list if key does not exist
  map[year] = Array.isArray(map[year]) ? map[year] : []
  map[year] = map[year].concat({
    client: client,
    description: description,
    location: location,
  })
  return map
}

const ProjectsPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        projectsCsv {
          items {
            client
            description
            location
            year
          }
        }
      }
    `
  )

  const allProjects = data.projectsCsv.items.reduce(csvReducer, {})
  const reverseChronologicalYears = getUniqueYears(data.projectsCsv.items)

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
        <YearlyProjects
          key={year}
          year={year}
          projectsList={allProjects[year]}
        />
      ))}
    </div>
  )
}

export default ProjectsPage
