import React from "react"

const address =
  "Jln. Pulau Sangir Talaud I No. 8, Kawasan Industri Modern IV, Deli Serdang, Indonesia 20374"
const mobileNums = ["+62-852-7791-8325", "+62-852-9889-0246"]
const emailAddrs = ["mail@triroyal.net", "triroyal@yahoo.co.id"]

const Footer = () => (
  <footer className="footer has-background-primary px-5 py-6">
    <div className="content has-text-centered has-text-white">
      <p className="mb-2">{address}</p>
      <p className="mb-2">
        <strong className="has-text-white">Mobile:</strong>{" "}
        {mobileNums.join(" | ")}{" "}
      </p>
      <p className="mb-2">
        <strong className="has-text-white">Email:</strong>{" "}
        {emailAddrs
          .map((e) => (
            <a className="has-text-info" href={`mailto:${e}`}>
              {e}
            </a>
          ))
          .reduce((acc, e) => (
            <>
              {acc} | {e}
            </>
          ))}
      </p>
      <p>Copyright 1994-{new Date().getFullYear()} © PT. Triroyal Timurraya</p>
    </div>
  </footer>
)

export default Footer
