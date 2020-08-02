import React from "react"

const ProjectCard = ({ client, description, location }) => (
  <div class="column card is-one-third">
    <header class="card-header">
      <p class="card-header-title">{client}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <p>
          <strong>Pekerjaan:</strong> {description}
        </p>
        <p>
          <strong>Lokasi:</strong> {location}
        </p>
      </div>
    </div>
  </div>
)

const YearlyProjects = ({ year, projectsList }) => (
  <div class="centered vertical pb-5">
    <h3 class="title is-3">{year}</h3>
    <div class="columns is-multiline align-image">
      {projectsList.map((p) => (
        <ProjectCard
          client={p.client}
          description={p.description}
          location={p.location}
        />
      ))}
    </div>
  </div>
)

export default YearlyProjects
