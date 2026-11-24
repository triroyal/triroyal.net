import React from "react"
import AppImage from "@components/shared/AppImage"

const AboutPage = () => (
  <div className="container centered vertical px-5 pb-5">
    <div className="pb-4">
      <AppImage
        name="about"
        className="responsive"
        alt="Tim teknik PT Triroyal Timurraya"
      />
    </div>
    <p className="align-image justify pb-4">
      PT Triroyal Timurraya merupakan perusahaan swasta nasional yang didirikan
      oleh R.Kasin di Medan, Sumatera Utara pada tahun 1994. Perusahaan ini pada
      awalnya bergerak dalam bidang usaha Heavy Metal Construction dan Water
      Treatment Plant yang kemudian dan terus berkembang sebagai perusahaan
      konstruksi sipil, mekanikal, dan elektrikal untuk pembangunan Pabrik
      Kelapa Sawit (PKS).
    </p>
    <p className="align-image justify">
      Sejak tahun 2000 kami sudah mengerjakan 132 proyek untuk 95 klien,
      dari grup perkebunan besar sampai pabrik mandiri. Untuk pekerjaan
      pengolahan air dan perlindungan lingkungan, kami bekerja sama dengan
      Aquakimia Sdn. Bhd. dari Malaysia.
    </p>
  </div>
)

export default AboutPage
