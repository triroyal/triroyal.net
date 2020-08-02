import React from "react"

const ProjectCard = ({ client, description, location }) => (
  <div className="column is-one-third">
    <div className="card full-height">
      <header className="card-header">
        <p className="card-header-title">{client}</p>
      </header>
      <div className="card-content">
        <div className="content">
          <p className="justify">
            <strong>Pekerjaan:</strong> {description}
          </p>
          <p className="justify">
            <strong>Lokasi:</strong> {location}
          </p>
        </div>
      </div>
    </div>
  </div>
)

const YearlyProjects = ({ year, projectsList }) => (
  <div className="centered vertical pb-5">
    <h3 className="title is-3">{year}</h3>
    <div className="columns is-multiline align-image full-width">
      {projectsList.map((p) => (
        <ProjectCard
          key={`${p.client}-${p.description}-${p.location}`}
          client={p.client}
          description={p.description}
          location={p.location}
        />
      ))}
    </div>
  </div>
)

export default YearlyProjects
