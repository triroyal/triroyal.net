import { Link } from "gatsby"
import React from "react"

import HeaderImage from "../components/image"

const Header = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,

        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link to="/">
        <HeaderImage />
      </Link>
    </div>
  </header>
)

export default Header
