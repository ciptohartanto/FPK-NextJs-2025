import { GetStaticPropsResult } from 'next'

import clientQuery from '@/api/clientQuery'
import {
  FooterQuery,
  HomePage as HomePageQueryProps,
  HomeQuery,
  TheFooter as FooterQueryProps,
} from '@/gql/graphql'
import QUERY_FOOTER from '@/queries/queryFooter'
import QUERY_HOME from '@/queries/queryHome'
import Cta from '@/sections/Cta'
import Jumbotron from '@/sections/Jumbotron'
import MitraKami from '@/sections/MitraKami'
import Prestasi from '@/sections/Prestasi'
import Quote from '@/sections/Quote'
import SiapaKami from '@/sections/SiapaKami'

type HomePageProps = {
  homePage: HomePageQueryProps
  footerData: FooterQueryProps
}

export default function HomePage({ homePage }: HomePageProps) {
  const {
    sectionJumbotron,
    sectionSiapaKami,
    sectionQuote,
    sectionPrestasi,
    sectionMitraKami,
    sectionCta,
  } = homePage
  return (
    <>
      <Jumbotron data={sectionJumbotron} />
      <SiapaKami data={sectionSiapaKami} />
      <Quote data={sectionQuote} />
      <Prestasi data={sectionPrestasi} />
      <Cta data={sectionCta!} />
      <MitraKami data={sectionMitraKami!} />
    </>
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<HomeQuery & FooterQuery>
> {
  const homeData = await clientQuery<HomeQuery>({
    query: QUERY_HOME,
    variableObject: {
      id: process.env.HYGRAPH_HOME_ID,
    },
  })

  const footerData = await clientQuery<FooterQuery>({
    query: QUERY_FOOTER,
    variableObject: {
      id: process.env.HYGRAPH_FOOTER_ID,
    },
  })

  const { homePage } = homeData
  const { theFooter } = footerData

  return {
    props: { homePage, theFooter },
  }
}
