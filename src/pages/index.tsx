import { ApolloQueryResult } from '@apollo/client'
import { GetStaticPropsResult } from 'next'
import { useState } from 'react'

import client from '@/apollo/client'
import PageHead from '@/components/PageHead'
import Popup from '@/components/popup'
import { HomesQuery } from '@/gql/graphql'
import QUERY_HOME from '@/queries/home'
import AboutTheWebsite from '@/sections/AboutTheWebsite'
import Hero from '@/sections/Hero'
import Projects from '@/sections/Projects'
import Writings from '@/sections/Writings'

export default function HomePage({ home }: HomesQuery) {
  console.log(home)
  const [isPopupActive, setIsPopupActive] = useState(false)

  return (
    <>
      <PageHead pageTitle="Home" />
      <>
        <Hero />
        <Projects handleClick={(val) => setIsPopupActive(val)} />
        <Writings />
        <AboutTheWebsite />
        <Popup
          handleClick={(val) => setIsPopupActive(val)}
          shouldDisplayPopup={isPopupActive}
        />
      </>
    </>
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<HomesQuery>
> {
  const { data }: ApolloQueryResult<HomesQuery> = await client.query({
    query: QUERY_HOME,
    variables: {
      id: process.env.HOME_ID,
    },
  })

  const { home } = data
  return {
    props: { home },
  }
}
