import { gql } from '@apollo/client'

const QUERY_WRITING_ITEM = gql`
  query WritingArticleItem($slug: String!) {
    writing(where: { slug: $slug }) {
      tags
      articleContent
      publishTime
      title
    }
  }
`

export default QUERY_WRITING_ITEM
