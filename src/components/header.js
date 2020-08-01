import { Link } from "gatsby"
import React from "react"

import header from "@images/header.png"

const Header = () => (
  <header>
    <div className="container px-6 py-6 has-text-centered">
      <Link to="/">
        <img src={header} className="responsive" />
      </Link>
    </div>
    <div className="container px-6">
      <div className="tabs is-centered">
        <ul>
          <li>
            <a>beranda</a>
          </li>
          <li>
            <a>beranda</a>
          </li>
          <li>
            <a>beranda</a>
          </li>
          <li>
            <a>beranda</a>
          </li>
          <li>
            <a>beranda</a>
          </li>
          <li>
            <a>beranda</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

export default Header
