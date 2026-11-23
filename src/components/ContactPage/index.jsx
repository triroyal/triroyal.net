import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faMap,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons"
import ContactForm from "./ContactForm"
import AppImage from "@components/shared/AppImage"
import { PhoneLinks } from "@components/footer"
import { address, emailAddr } from "@components/contactInfo"

const ContactPage = () => (
  <div className="container centered vertical px-5 pb-5">
    <div className="has-text-centered pb-4">
      <AppImage
        name="contact"
        className="responsive"
        alt="Tim PT Triroyal Timurraya"
      />
    </div>
    <div className="align-image full-width pb-5">
      <p className="pb-2">
        Telepon kami atau kirim pesan melalui formulir di bawah ini.
      </p>
      <p>
        <FontAwesomeIcon icon={faPhoneAlt} /> <PhoneLinks />
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />{" "}
        <a href={`mailto:${emailAddr}`}>{emailAddr}</a>
      </p>
      <p>
        <FontAwesomeIcon icon={faMap} /> {address}
      </p>
    </div>
    <div className="align-image full-width">
      <ContactForm />
    </div>
  </div>
)

export default ContactPage
