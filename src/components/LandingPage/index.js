import React from "react"
import Landing from "@images/about.png"

const LandingPage = () => (
  <div className="container centered vertical px-5 pb-5">
    <div className="pb-4">
      <img
        src={Landing}
        className="responsive"
        alt="Triroyal engineering team."
      />
    </div>
    <p className="align-image justify">
      Selamat datang ke PT. Triroyal Timurraya. Kami adalah perusahaan yang
      bergerak di bidang jasa konstruksi sipil dan mekanikal yang berlokasi di
      Sumatera Utara, Indonesia. Kami melayani berbagai jenis permintaan
      konstruksi mulai dari fabrikasi dan instalasi rebusan/sterilizer, sistem
      water treatment, pembangunan tangki timbun, bulking station sampai
      pembangunan Pabrik Kelapa Sawit (PKS) sepenuhnya.
    </p>
  </div>
)

export default LandingPage
