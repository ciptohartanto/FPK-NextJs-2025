import { GetStaticPropsResult } from 'next'

import clientQuery from '@/api/clientQuery'
import PageHead from '@/components/PageHead'
import { Resume as ResumePageProps, ResumeQuery } from '@/gql/graphql'
import QUERY_RESUME from '@/queries/queryResume'
import ResumeBody from '@/sections/ResumeBody'

export default function ResumePage({ resume }: { resume: ResumePageProps }) {
  const { sectionResume: resumeBodyData } = resume

  return (
    <>
      <PageHead pageTitle="Résumé" />
      <ResumeBody componentData={resumeBodyData} />
    </>
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<ResumeQuery>
> {
  const data = await clientQuery<ResumeQuery>({
    query: QUERY_RESUME,
    variableObject: { id: process.env.ID_RESUME },
  })

  const { resume } = data
  return {
    props: { resume },
  }
}
