import React from "react"
import { Link } from "react-router-dom"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Halaman tidak ditemukan" noindex />
    <div className="container centered vertical px-5 pb-5 has-text-centered">
      <h1 className="title">Halaman tidak ditemukan</h1>
      <p>
        Halaman yang Anda cari tidak ada. Kembali ke <Link to="/">beranda</Link>{" "}
        atau lihat <Link to="/projects">daftar proyek</Link> kami.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
