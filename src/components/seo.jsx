import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router-dom"

export const siteMetadata = {
  title: "PT Triroyal Timurraya",
  siteUrl: "https://www.triroyal.net",
  description:
    "Kontraktor sipil, mekanikal dan elektrikal Pabrik Kelapa Sawit (PKS) sejak 1994: pembangunan PKS, sterilizer, water treatment, tangki timbun dan bulking station.",
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
