import React from "react"
import { Link } from "react-router-dom"
import AppImage from "@components/shared/AppImage"

const ServicesPage = () => (
  <div className="container centered vertical px-5 pb-5">
    <div className="pb-4">
      <AppImage
        name="services"
        className="responsive"
        alt="Tim teknik PT Triroyal Timurraya"
      />
    </div>
    <div className="align-image content">
      <p>
        Kami bisa mengerjakan satu pabrik penuh sebagai desain-bangun, atau
        hanya bagian sipil, mekanikal atau elektrikalnya saja.
      </p>
      <h2 className="is-size-5">PKS baru</h2>
      <p>
        32 pabrik berkapasitas 30 sampai 60 TPH, termasuk pabrik yang disiapkan
        untuk dua tahap seperti 45/60 dan 45/90 TPH.
      </p>
      <h2 className="is-size-5">Penambahan kapasitas</h2>
      <p>
        25 proyek perluasan pabrik yang sudah berjalan, misalnya dari 20 ke 60
        TPH, 30 ke 60 TPH dan 45 ke 90 TPH.
      </p>
      <h2 className="is-size-5">Sterilizer</h2>
      <p>
        30 proyek pembuatan, penggantian dan migrasi sterilizer: oblique,
        vertikal dan horizontal, termasuk liner, pintu dan sistem kontrol
        otomatis.
      </p>
      <h2 className="is-size-5">Tangki timbun dan bulking station</h2>
      <p>
        Tangki CPO dan PKO dari 2.000 sampai 50.000 MT, bulking station, sub
        bulking station dan kernel bulk silo.
      </p>
      <h2 className="is-size-5">Stasiun lain dan utilitas</h2>
      <p>
        Kernel crushing plant, water treatment plant dan demin plant, boiler,
        loading ramp, moving floor, composting dan sipil untuk biogas plant.
      </p>
      <p>
        Daftar lengkapnya, dengan klien dan tahun, ada di{" "}
        <Link to="/projects">daftar proyek</Link>.
      </p>
    </div>
  </div>
)

export default ServicesPage
