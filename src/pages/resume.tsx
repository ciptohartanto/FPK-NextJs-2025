import { ApolloQueryResult } from '@apollo/client'
import { GetStaticPropsResult } from 'next'

import client from '@/apollo/client'
import PageHead from '@/components/PageHead'
import { Resume, ResumeQuery } from '@/gql/graphql'
import QUERY_RESUME from '@/queries/resume'
import ResumeBody from '@/sections/ResumeBody'

export default function ResumePage({ resume }: { resume: Resume }) {
  const { sectionResume } = resume

  return (
    <>
      <PageHead pageTitle="Résumé" />
      <ResumeBody content={sectionResume} />
    </>
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<ResumeQuery>
> {
  const { data }: ApolloQueryResult<ResumeQuery> = await client.query({
    query: QUERY_RESUME,
    variables: {
      id: process.env.ID_RESUME,
    },
  })

  const { resume } = data
  return {
    props: { resume },
  }
}
