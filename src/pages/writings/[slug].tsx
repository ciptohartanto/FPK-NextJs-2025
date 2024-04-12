import { GetStaticPathsResult, GetStaticPropsResult } from 'next'

import clientQuery from '@/api/clientQuery'
import PageHead from '@/components/PageHead'
import {
  Writing as WritingArticleBodyProp,
  WritingArticleItemQuery,
  WritingOrderByInput,
  WritingsQuery,
} from '@/gql/graphql'
import QUERY_WRITING_ITEM from '@/queries/queryWritingItem'
import QUERY_WRITINGS from '@/queries/queryWritings'
import ArticleBody from '@/sections/ArticleBody'

type ArticleItemParams = {
  params: {
    slug: string
  }
  fallback: boolean
}

export default function WritingsPage({
  writing: articleBodyData,
}: {
  writing: WritingArticleBodyProp
}) {
  return (
    <>
      <PageHead pageTitle="Writings" />
      <ArticleBody componentData={articleBodyData} />
    </>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const data = await clientQuery<WritingsQuery>({
    query: QUERY_WRITINGS,
    variableObject: { orderBy: WritingOrderByInput.PublishTimeDesc },
  })

  const { writings } = data
  const paths = writings.map((item) => ({
    params: { slug: item.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(
  context: ArticleItemParams
): Promise<GetStaticPropsResult<WritingArticleItemQuery>> {
  const { slug } = context.params

  const data = await clientQuery<WritingArticleItemQuery>({
    query: QUERY_WRITING_ITEM,
    variableObject: { slug },
  })

  const { writing } = data
  return {
    props: { writing },
  }
}
