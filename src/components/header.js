import { Link } from "gatsby"
import React from "react"
import CloudinaryImage from "@components/shared/CloudinaryImage"

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
        <button
          onClick={() => setIsActive(!isActive)}
          className={`button is-text navbar-burger burger ${
            isActive ? "is-active" : "has-text-white has-background-primary"
          }`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div
        id="navbarMenu"
        className={`navbar-menu ${isActive ? "is-active" : ""} navbar-centered`}
      >
        {/* center navbar on desktop mode */}
        <div className="navbar-start" style={{ marginRight: "unset" }}>
          {Object.keys(pageNames).map((name) => (
            <Link
              key={name}
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
      <div className="container px-5 py-5">
        <div className="has-text-centered">
          <Link to="/">
            <CloudinaryImage
              name="header"
              className="responsive pb-4"
              alt="Company logo."
            />
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
