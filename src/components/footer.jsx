import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faMap,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"

const address =
  "Jln. Pulau Sangir Talaud I No. 8, Kawasan Industri Modern IV, Deli Serdang, Indonesia 20374"
const mobileNums = ["+62-852-7791-8325", "+62-852-9889-0246"]
const emailAddr = "mail@triroyal.net"
const copyright = `1994-${new Date().getFullYear()} PT. Triroyal Timurraya`

const FooterLine = ({ icon, content }) => (
  <p className="subtitle is-6 has-text-white">
    <FontAwesomeIcon icon={icon} /> {content}
  </p>
)
const Footer = () => (
  <footer className="footer has-background-primary px-5 py-5">
    <div className="content has-text-centered">
      <FooterLine icon={faMap} content={address} />
      <FooterLine icon={faPhoneAlt} content={mobileNums.join(" | ")} />
      <FooterLine
        icon={faEnvelope}
        content={<a href={`mailto:${emailAddr}`}>{emailAddr}</a>}
      />
      <FooterLine icon={faCopyright} content={copyright} />
    </div>
  </footer>
)

export default Footer
