import { gql } from '@apollo/client'

const QUERY_AKTIVITAS = gql`
  query aktivitasPage($id: ID!) {
    aktivitasPage(where: { id: $id }) {
      albums {
        judul
        fileGambar {
          url
        }
      }
    }
  }
`
export default QUERY_AKTIVITAS
