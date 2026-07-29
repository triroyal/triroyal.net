import React from "react"
import ContactForm from "./ContactForm"
import AppImage from "@components/shared/AppImage"

const ContactPage = () => (
  <div className="container centered vertical px-5 pb-5">
    <div className="has-text-centered pb-4">
      <AppImage name="contact" className="responsive" alt="Triroyal team." />
    </div>
    <div className="align-image full-width">
      <ContactForm />
    </div>
  </div>
)

export default ContactPage
