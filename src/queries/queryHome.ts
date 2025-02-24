import { gql } from '@apollo/client'

const QUERY_HOME = gql`
  query Home($id: ID!) {
    homePage(where: { id: $id }) {
      sectionQuote {
        title
      }
    }
  }
`
export default QUERY_HOME
