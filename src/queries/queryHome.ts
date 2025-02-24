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
      sectionSiapaKami {
        title
        description
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
          id
          judul
          fileGambar {
            url
            id
            stage
          }
        }
      }
      sectionPrestasi {
        title
        description
        albums {
          fileGambar {
            url
          }
        }
      }
    }
  }
`
export default QUERY_HOME
