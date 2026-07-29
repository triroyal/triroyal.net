import React from "react"
import aboutImg from "@images/about.png"
import contactImg from "@images/contact.png"
import headerImg from "@images/header.png"
import projectsImg from "@images/projects.png"
import servicesImg from "@images/services.png"

const imageMap = {
  about: aboutImg,
  contact: contactImg,
  header: headerImg,
  projects: projectsImg,
  services: servicesImg,
}

const AppImage = ({ name, alt, className }) => {
  const imgSrc = imageMap[name] || name
  return <img src={imgSrc} className={className} alt={alt} />
}

export default AppImage
