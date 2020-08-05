import { useStaticQuery, graphql } from "gatsby"

export const useProjectsData = () => {
  const { projectsCsv } = useStaticQuery(
    graphql`
      query {
        projectsCsv {
          items {
            client
            description
            location
            year
          }
        }
      }
    `
  )

  return projectsCsv.items
}
