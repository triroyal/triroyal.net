import React from "react"
import about from "@images/about.png"

const AboutPage = () => (
  <div className="container px-5 pb-5">
    <div className="has-text-centered pb-4">
      <img
        src={about}
        className="responsive"
        alt="Triroyal engineering team."
      />
    </div>
    <div className="centered vertical">
      <p className="align-image justify pb-4">
        PT. Triroyal Timurraya merupakan perusahaan swasta nasional yang
        didirikan oleh R.Kasin di Medan, Sumatera Utara pada tahun 1994.
        Perusahaan ini pada awalnya bergerak dalam bidang usaha Heavy Metal
        Construction dan Water Treatment Plant yang kemudian dan terus
        berkembang sebagai perusahaan konstruksi sipil, mekanikal, dan
        elektrikal untuk pembangunan Pabrik Kelapa Sawit (PKS).
      </p>
      <p className="align-image justify">
        Sesuai dengan visi dan misi perusahaan yang didukung dengan pengalaman,
        fasilitas dan juga keahlian serta dedikasi sumber daya manusia (SDM),
        PT. Triroyal Timurraya selalu berusaha memenuhi standar mutu yang
        diinginkan klien. Dalam usaha menjaga kebersihan lingkungan, PT.
        Triroyal Timurraya bekerja sama dengan Aquakimia Sdn. Bhd. Malaysia
        dalam bidang Environmental Protection.
      </p>
    </div>
  </div>
)

export default AboutPage
