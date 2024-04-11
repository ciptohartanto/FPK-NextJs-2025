import { gql } from '@apollo/client'

const QUERY_HOME = gql`
  query Homes($id: ID!) {
    home(where: { id: $id }) {
      sectionAbout {
        title
        listOfIngredients {
          title
          content {
            html
          }
        }
      }
      sectionHero {
        subtitle
        caption
      }
      sectionProject {
        title
        listOfProjects {
          content {
            title
            content {
              html
            }
          }
          projectUrl
          date
          tags
        }
      }
      sectionWritings {
        title
      }
    }
  }
`

export default QUERY_HOME
