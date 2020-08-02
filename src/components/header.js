import { Link } from "gatsby"

import React from "react"

import header from "@images/header.png"

const pageNames = {
  beranda: "/",
  "tentang kami": "/about",
  pekerjaan: "/services",
  "daftar proyek": "/projects",
  galeri: "/gallery",
  "hubungi kami": "/contact",
}

const Navbar = () => {
  const [isActive, setIsActive] = React.useState(false)

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          onClick={() => setIsActive(!isActive)}
          role="button"
          className={`navbar-burger burger ${
            isActive ? "is-active" : "has-text-white has-background-primary"
          }`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarMenu"
        className={`navbar-menu ${isActive ? "is-active" : ""} centered`}
      >
        {/* center navbar on desktop mode */}
        <div className="navbar-start" style={{ "margin-right": "unset" }}>
          {Object.keys(pageNames).map((name) => (
            <Link
              to={pageNames[name]}
              className="navbar-item is-tab"
              activeClassName="is-active"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

const Header = () => {
  return (
    <header>
      <div className="container px-6 pt-6 pb-4 has-text-centered">
        <Link to="/">
          <img src={header} className="responsive" alt="Company logo." />
        </Link>
      </div>
      <Navbar />
    </header>
  )
}

export default Header
