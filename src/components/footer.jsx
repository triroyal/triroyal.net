import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faMap,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"
import {
  address,
  companyName,
  emailAddr,
  phoneNumbers,
} from "@components/contactInfo"

const copyright = `1994-${new Date().getFullYear()} ${companyName}`

const FooterLine = ({ icon, content }) => (
  <p className="subtitle is-6 has-text-white">
    <FontAwesomeIcon icon={icon} /> {content}
  </p>
)

export const PhoneLinks = () =>
  phoneNumbers.map((phone, i) => (
    <React.Fragment key={phone.tel}>
      {i > 0 && " | "}
      <a href={`tel:${phone.tel}`}>{phone.display}</a>
    </React.Fragment>
  ))

const Footer = () => (
  <footer className="footer has-background-primary px-5 py-5">
    <div className="content has-text-centered">
      <FooterLine icon={faMap} content={address} />
      <FooterLine icon={faPhoneAlt} content={<PhoneLinks />} />
      <FooterLine
        icon={faEnvelope}
        content={<a href={`mailto:${emailAddr}`}>{emailAddr}</a>}
      />
      <FooterLine icon={faCopyright} content={copyright} />
    </div>
  </footer>
)

export default Footer
