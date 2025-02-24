import { gql } from '@apollo/client'

const QUERY_HOME = gql`
  query Home($id: ID!) {
    homePage(where: { id: $id }) {
      sectionQuote {
        title
        gambar {
          judul
          fileGambar {
            url
          }
        }
      }
    }
  }
`
export default QUERY_HOME
