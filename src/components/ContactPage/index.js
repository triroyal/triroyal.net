import React from "react"
import ContactForm from "./ContactForm"
import CloudinaryImage from "@components/shared/CloudinaryImage"

const ContactPage = () => (
  <div className="container centered vertical px-5 pb-5">
    <div className="has-text-centered pb-4">
      <CloudinaryImage
        name="contact"
        className="responsive"
        alt="Triroyal team."
      />
    </div>
    <div className="align-image full-width">
      <ContactForm />
    </div>
  </div>
)

export default ContactPage
