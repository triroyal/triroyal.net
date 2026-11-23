import React from "react"
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
    <p className="align-image justify">
      Selamat datang di PT Triroyal Timurraya. Kami adalah perusahaan yang
      bergerak di bidang jasa konstruksi sipil dan mekanikal yang berlokasi di
      Sumatera Utara, Indonesia. Kami melayani berbagai jenis permintaan
      konstruksi mulai dari fabrikasi dan instalasi rebusan/sterilizer, sistem
      water treatment, pembangunan tangki timbun, bulking station sampai
      pembangunan Pabrik Kelapa Sawit (PKS) sepenuhnya.
    </p>
  </div>
)

export default LandingPage
