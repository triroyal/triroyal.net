import React from "react"
import { Link } from "react-router-dom"
import AppImage from "@components/shared/AppImage"

const LandingPage = () => (
  <div className="container centered vertical px-5 pb-5">
    <div className="pb-4">
      <AppImage
        name="about"
        className="responsive"
        alt="Tim teknik PT Triroyal Timurraya"
      />
    </div>
    <p className="align-image justify pb-4">
      PT Triroyal Timurraya membangun pabrik kelapa sawit baru dan menambah
      kapasitas pabrik yang sudah berjalan. Kami mengerjakan sipil, mekanikal
      dan elektrikal, dari pekerjaan tanah dan pondasi sampai pemasangan mesin
      dan instalasi listrik.
    </p>
    <p className="align-image justify pb-4">
      Sejauh ini kami sudah membangun 32 PKS baru berkapasitas 30 sampai 60
      TPH dan mengerjakan 25 penambahan kapasitas, misalnya dari 20 ke 60 TPH
      dan dari 45 ke 90 TPH. Kami juga membuat sterilizer (oblique, vertikal
      dan horizontal), tangki timbun sampai 50.000 MT, bulking station, kernel
      crushing plant dan water treatment plant. Proyek kami ada di 14 provinsi,
      sebagian besar di Sumatera dan Kalimantan.
    </p>
    <p className="align-image justify">
      Setiap proyek tercantum dengan nama klien, lingkup kerja dan tahunnya di{" "}
      <Link to="/projects">daftar proyek</Link>. Kalau Anda sedang merencanakan
      PKS baru atau penambahan kapasitas, kirimkan kapasitas dan lokasi
      rencananya lewat <Link to="/contact">formulir kontak</Link>.
    </p>
  </div>
)

export default LandingPage
