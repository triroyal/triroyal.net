import { useStaticQuery, graphql } from "gatsby"

export const useAllImages = () => {
  const { allCloudinaryMedia } = useStaticQuery(graphql`
    query {
      allCloudinaryMedia {
        edges {
          node {
            public_id
            secure_url
          }
        }
      }
    }
  `)

  return allCloudinaryMedia.edges.map((e) => e.node)
}
