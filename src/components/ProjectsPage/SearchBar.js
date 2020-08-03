import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const SearchBar = ({ searchText, handleChange }) => (
  <div id="search-wrapper" className="full-width align-image pb-4">
    <div className="field">
      <div class="control has-icons-left">
        <input
          className="input"
          type="text"
          placeholder="Masukkan nama daerah"
          value={searchText}
          onChange={handleChange}
        />
        <span className="icon is-left">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </span>
      </div>
    </div>
  </div>
)

export default SearchBar
