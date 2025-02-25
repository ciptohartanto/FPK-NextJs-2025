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
      linksWithPopup {
        id
        buttonText
        isWithButtons
        contentBodyType
        popupLeftContent {
          html
        }
        popupRightContent {
          html
        }
      }
    }
  }
`

export default QUERY_FOOTER
