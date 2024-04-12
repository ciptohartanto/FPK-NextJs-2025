import { ApolloQueryResult } from '@apollo/client'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'

import client from '@/apollo/client'
import PageHead from '@/components/PageHead'
import {
  Writing,
  WritingArticleItemQuery,
  WritingOrderByInput,
  WritingsQuery,
} from '@/gql/graphql'
import QUERY_WRITING_ITEM from '@/queries/writingItem'
import QUERY_WRITINGS from '@/queries/writings'
import ArticleBody from '@/sections/ArticleBody'

type ArticleItemParams = {
  params: {
    slug: string
  }
  fallback: boolean
}

export default function WritingsPage({ writing }: { writing: Writing }) {
  console.log(writing)
  return (
    <>
      <PageHead pageTitle="Writings" />
      <ArticleBody content={writing} />
    </>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const { data }: ApolloQueryResult<WritingsQuery> = await client.query({
    query: QUERY_WRITINGS,
    variables: {
      orderBy: WritingOrderByInput.PublishTimeDesc,
    },
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

  const { data }: ApolloQueryResult<WritingArticleItemQuery> =
    await client.query({
      query: QUERY_WRITING_ITEM,
      variables: {
        slug,
      },
    })

  const { writing } = data
  return {
    props: { writing },
  }
}
