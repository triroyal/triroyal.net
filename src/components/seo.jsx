import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router-dom"

export const siteMetadata = {
  title: "PT Triroyal Timurraya",
  siteUrl: "https://www.triroyal.net",
  description:
    "32 PKS baru 30–60 TPH dan 25 penambahan kapasitas, seperti 20 ke 60 TPH. Sipil, mekanikal dan elektrikal, sebagian besar di Sumatera dan Kalimantan.",
  image: "/og-image.png",
}

function SEO({ description, lang, meta, title, noindex }) {
  const { pathname } = useLocation()
  const metaDescription = description || siteMetadata.description
  const fullTitle = `${title} | ${siteMetadata.title}`
  const url = `${siteMetadata.siteUrl}${pathname}`
  const image = `${siteMetadata.siteUrl}${siteMetadata.image}`

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={fullTitle}
      link={noindex ? [] : [{ rel: "canonical", href: url }]}
      meta={[
        { name: "description", content: metaDescription },
        { property: "og:site_name", content: siteMetadata.title },
        { property: "og:title", content: fullTitle },
        { property: "og:description", content: metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { property: "og:locale", content: "id_ID" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: fullTitle },
        { name: "twitter:description", content: metaDescription },
        { name: "twitter:image", content: image },
      ]
        .concat(noindex ? [{ name: "robots", content: "noindex" }] : [])
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: "id",
  meta: [],
  description: "",
  noindex: false,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  noindex: PropTypes.bool,
}

export default SEO
