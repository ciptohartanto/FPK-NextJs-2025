import { gql } from '@apollo/client'

const QUERY_FOOTER = gql`
  query footer($id: ID!) {
    theFooter(where: { id: $id }) {
      copyrightText
      footerSection {
        id
        title
        content {
          html
        }
      }
    }
  }
`

export default QUERY_FOOTER
