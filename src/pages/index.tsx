import { GetStaticPropsResult } from 'next'

import clientQuery from '@/api/clientQuery'
import { HomePage as HomePageQueryProps, HomeQuery } from '@/gql/graphql'
import QUERY_HOME from '@/queries/queryHome'
import Cta from '@/sections/Cta'
import Jumbotron from '@/sections/Jumbotron'
import MitraKami from '@/sections/MitraKami'
import Prestasi from '@/sections/Prestasi'
import Quote from '@/sections/Quote'
import SiapaKami from '@/sections/SiapaKami'

type HomePageProps = {
  homePage: HomePageQueryProps
}

export default function HomePage({ homePage }: HomePageProps) {
  const {
    sectionJumbotron,
    sectionSiapaKami,
    sectionQuote,
    sectionPrestasi,
    sectionMitraKami,
  } = homePage
  return (
    <>
      <Jumbotron data={sectionJumbotron} />
      <SiapaKami data={sectionSiapaKami} />
      <Quote data={sectionQuote} />
      <Prestasi data={sectionPrestasi} />
      <Cta
        title="Bergabung Bersama Kami"
        buttons={[
          {
            url: 'https://example.com',
            buttonText: 'Sebagai Murid',
            buttonDescription: 'content',

            style: 'one',
          },
          {
            url: 'https://example.com',
            buttonText: 'Sebagai Murid',
            buttonDescription: 'content',

            style: 'two',
          },
          {
            url: 'https://example.com',
            buttonText: 'Sebagai Murid',
            buttonDescription: 'content',

            style: 'three',
          },
        ]}
      />
      <MitraKami data={sectionMitraKami!} />
    </>
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<HomeQuery>
> {
  const data = await clientQuery<HomeQuery>({
    query: QUERY_HOME,
    variableObject: {
      id: process.env.HYGRAPH_HOME_ID,
    },
  })

  const { homePage } = data

  return {
    props: { homePage },
  }
}
