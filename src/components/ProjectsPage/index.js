import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Projects from "@images/projects.png"
import SearchBar from "./SearchBar"
import YearlyProjects from "./YearlyProjects"

const getUniqueYears = (projects) =>
  projects
    .map((p) => p.year)
    .filter((val, idx, arr) => arr.indexOf(val) === idx)
    .sort((a, b) => parseInt(b, 10) - parseInt(a, 10))

const doesLocationInclude = (ref) => (target) =>
  target.location.toLowerCase().includes(ref.toLowerCase())

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

  const [filter, setFilter] = React.useState("")

  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  const filteredProjs = data.projectsCsv.items.filter(
    doesLocationInclude(filter)
  )
  const filteredProjsByYear = filteredProjs.reduce(csvReducer, {})

  const reverseChronologicalYears = getUniqueYears(filteredProjs)

  return (
    <div className="container centered vertical px-5 pb-5">
      <div className="pb-4">
        <img
          src={Projects}
          className="responsive"
          alt="Triroyal engineering team."
        />
      </div>
      <SearchBar searchText={filter} handleChange={handleChange} />
      {reverseChronologicalYears.map((year) => (
        <YearlyProjects
          key={year}
          year={year}
          projectsList={filteredProjsByYear[year]}
        />
      ))}
    </div>
  )
}

export default ProjectsPage
