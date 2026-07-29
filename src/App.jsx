import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "@pages/index"
import About from "@pages/about"
import Services from "@pages/services"
import Projects from "@pages/projects"
import Gallery from "@pages/gallery"
import Contact from "@pages/contact"
import NotFound from "@pages/404"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
