import { gql } from '@apollo/client'

const QUERY_HOME = gql`
  query Home($id: ID!) {
    homePage(where: { id: $id }) {
      sectionJumbotron {
        title
        firstCaption
        secondCaption
        buttonText
        gambar {
          judul
          fileGambar {
            url
          }
        }
      }
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
