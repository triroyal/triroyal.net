import React from "react"
import landing from "@images/landing.png"

const LandingPage = () => (
  <div className="container px-6 pt-4 pb-6">
    <div className="has-text-centered pb-4">
      <img
        src={landing}
        className="responsive"
        alt="Triroyal engineering team."
      />
    </div>
    <div className="centered">
      <p className="align-image justify">
        Selamat datang ke PT. Triroyal Timurraya. Kami adalah perusahaan yang
        bergerak di bidang jasa konstruksi sipil dan mekanikal yang berlokasi di
        Sumatera Utara, Indonesia. Kami melayani berbagai jenis permintaan
        konstruksi mulai dari fabrikasi dan instalasi rebusan/sterilizer, sistem
        water treatment, pembangunan tangki timbun, bulking station sampai
        pembangunan Pabrik Kelapa Sawit (PKS) sepenuhnya.
      </p>
    </div>
  </div>
)

export default LandingPage
