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
  const { sectionQuote, sectionJumbotron } = homePage
  return (
    <>
      <Jumbotron data={sectionJumbotron} />
      <SiapaKami
        title="Siapa Kami"
        content="content"
        background="/dummy-wallpaper.jpg"
      />
      <Quote data={sectionQuote} />
      <Prestasi title="Prestasi" content="content" />
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
      <MitraKami
        title="Mitra Kami"
        mitras={[
          { namaMitra: 'Pavilliun Labuan Bajo' },
          { namaMitra: 'Katamaran', background: '/dummy-wallpaper.jpg' },
          { namaMitra: 'Loccal', background: '/dummy-wallpaper.jpg' },
        ]}
      />
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
