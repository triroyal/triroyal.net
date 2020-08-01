import { Link } from "gatsby"
import React from "react"

import HeaderImage from "@components/image"

const Header = () => (
  <header>
    <Link to="/">
      <HeaderImage />
    </Link>
  </header>
)

export default Header
