require("dotenv").config()

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `PT. TRIROYAL TIMURRAYA`,
    description: `Palm Oil Mill Contractor | Water Treatment`,
    author: `@zegheim`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        maxResults: 100,
        prefix: `triroyal-net/`,
      },
    },
    {
      resolve: "gatsby-transformer-cloudinary",
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        uploadFolder: "triroyal-net",
        overwriteExisting: false,
      },
    },
    {
      resolve: `gatsby-transformer-csv`,
      options: {
        nodePerFile: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@pages": "src/pages",
          "@images": "src/images",
          "@data": "src/data",
          "@hooks": "src/hooks",
        },
        extensions: ["js"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
