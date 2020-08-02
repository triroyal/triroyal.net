import React from "react"
import services from "@images/services.png"

const ServicesPage = () => (
  <div className="container px-5 pb-5">
    <div className="has-text-centered pb-4">
      <img
        src={services}
        className="responsive"
        alt="Triroyal engineering team."
      />
    </div>
    <div className="centered vertical">
      <p className="align-image justify pb-4">
        Di PT. Triroyal Timurraya, kami melayani berbagai jenis permintaan
        konstruksi mulai dari fabrikasi dan instalasi rebusan/sterilizer, sistem
        water treatment, pembangunan tangki timbun, bulking station sampai
        pembangunan Pabrik Kelapa Sawit (PKS) sepenuhnya. Kami juga menawarkan
        jasa desain-bangun dengan melibatkan klien dalam prosesnya yang selain
        diharapkan dapat menyingkat durasi pengerjaan dan penghematan biaya,
        juga dapat mencapai hasil yang lebih optimal.
      </p>
      <p className="align-image justify">
        Untuk mengimbangi perkembangan industri kelapa sawit di Indonesia yang
        kian pesat, PT. Triroyal Timurraya juga terus memperbarui sistem dan
        metode pelaksanaan pekerjaan dan selalu terbuka untuk mempelajari
        tehnik-tehnik baru yang dinilai dapat memberikan hasil yang lebih
        efektif dengan tetap mempertahankan kualitas terbaik untuk klien. Salah
        satunya adalah sistem perebusan baru dengan Oblique Sterilizer untuk
        menggantikan rebusan berbentuk horizontal yang selama ini banyak
        digunakan di pabrik-pabrik kelapa sawit di Indonesia. Kami bertekad
        untuk terus mengembangkan layanan kami dengan tujuan agar klien
        mendapatkan hasil terbaik sesuai dengan yang diinginkan.
      </p>
    </div>
  </div>
)

export default ServicesPage
