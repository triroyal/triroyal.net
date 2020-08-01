import { Link } from "gatsby"
import React from "react"

import HeaderImage from "@components/image"

const Header = () => (
  <header>
    <div className="container centered">
      <Link to="/">
        <HeaderImage />
      </Link>
    </div>
  </header>
)

export default Header
