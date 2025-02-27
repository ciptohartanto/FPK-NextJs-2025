import { GetStaticPropsResult } from 'next'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'

import clientQuery from '@/api/clientQuery'
import PageHead from '@/components/PageHead'
import {
  FooterQuery,
  HomePage as HomePageQueryProps,
  HomeQuery,
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
}

const GA_MEASUREMENT_ID = 'G-D7NPB7J4XW'

const PAGE_TITLE = 'Home | Yayasan Flores Penuh Kasih Official'
const PAGE_META_DESC = 'Kenali kami dan kejar cita-cita setinggi langit!'

export default function HomePage({ homePage }: HomePageProps) {
  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID, {
      gaOptions: {
        debug_mode: true,
      },
    })

    ReactGA.send({ hitType: 'pageview', page: '/', title: 'Home Page' })
  }, [])

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
      <PageHead pageTitle={PAGE_TITLE} metaDescription={PAGE_META_DESC} />
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
      id: process.env.HYGRAPH_HOME_PAGE_ID,
    },
  })

  const footerData = await clientQuery<FooterQuery>({
    query: QUERY_FOOTER,
    variableObject: {
      id: process.env.HYGRAPH_THE_FOOTER_ID,
    },
  })

  const { homePage } = homeData
  const { theFooter } = footerData

  return {
    props: { homePage, theFooter },
    revalidate: 10,
  }
}
