import React from "react"

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        Jln. Pulau Sangir Talaud I No. 8, Kawasan Industri Modern IV, Deli
        Serdang, Indonesia 20374
      </p>
      <p>
        <strong>Mobile: </strong> +62-852-7791-8325 | +62-852-9889-0246
      </p>
      <p>
        <strong>E-mail: </strong>{" "}
        <a href="mailto:mail@triroyal.net">mail@triroyal.net</a> |{" "}
        <a href="mailto:triroyal@yahoo.co.id">triroyal@yahoo.co.id</a>
      </p>
      <p>Copyright 1994-{new Date().getFullYear()} © PT. Triroyal Timurraya</p>
    </div>
  </footer>
)

export default Footer
