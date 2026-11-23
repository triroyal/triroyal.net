import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Landing from "@pages/index"
import About from "@pages/about"
import Services from "@pages/services"
import Projects from "@pages/projects"
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
        {/* Gallery is hidden until it has project photos */}
        <Route path="/gallery" element={<Navigate to="/projects" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
