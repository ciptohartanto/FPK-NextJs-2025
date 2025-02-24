import { gql } from '@apollo/client'

import clientQuery from '@/api/clientQuery'
import Cta from '@/sections/Cta'
import Jumbotron from '@/sections/Jumbotron'
import MitraKami from '@/sections/MitraKami'
import Prestasi from '@/sections/Prestasi'
import Quote from '@/sections/Quote'
import SiapaKami from '@/sections/SiapaKami'

export default function HomePage() {
  return (
    <>
      <Jumbotron />
      <SiapaKami
        title="Siapa Kami"
        content="content"
        background="/dummy-wallpaper.jpg"
      />
      <Quote title="content" background="/dummy-wallpaper.jpg" />
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

export async function getStaticProps() {
  const data = await clientQuery({
    query: gql`
      query Home($id: ID!) {
        homePage(where: { id: $id }) {
          sectionQuote {
            title
          }
        }
      }
    `,
    variableObject: {
      id: process.env.HYGRAPH_HOME_ID,
    },
  })

  console.log(data)
  return {
    props: { data: '' },
  }
}
