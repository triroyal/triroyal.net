import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const ProjectCard = ({ client, description, location }) => (
  <div className="column is-one-third">
    <div className="card full-height rounded">
      <header className="card-header">
        <p className="card-header-title">{client}</p>
      </header>
      <div className="card-content px-4 full-height">
        <div className="content">
          <p className="justify">{description}</p>
        </div>
      </div>
      <div className="card-footer">
        <span className="card-footer-item">
          <span className="icon pr-1">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </span>
          {location}
        </span>
      </div>
    </div>
  </div>
)

const YearlyProjects = ({ year, projectsList }) => (
  <div className="pb-5 align-image full-width">
    <h3 id={year} className="title is-3">
      {year}
    </h3>
    <div className="columns is-multiline">
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
