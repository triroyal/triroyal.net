import { useStaticQuery, graphql } from "gatsby"

export const useUploadFolder = () => {
  const { sitePlugin } = useStaticQuery(
    graphql`
      query {
        sitePlugin(name: { eq: "gatsby-transformer-cloudinary" }) {
          pluginOptions {
            uploadFolder
          }
        }
      }
    `
  )
  return sitePlugin.pluginOptions.uploadFolder
}
