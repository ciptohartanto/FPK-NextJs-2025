import { ApolloQueryResult } from '@apollo/client'
import { GetStaticPropsResult } from 'next'
import { useState } from 'react'

import client from '@/apollo/client'
import PageHead from '@/components/PageHead'
import Popup from '@/components/popup'
import { Home, HomesQuery } from '@/gql/graphql'
import QUERY_HOME from '@/queries/home'
import AboutTheWebsite from '@/sections/AboutTheWebsite'
import Hero from '@/sections/Hero'
import Projects from '@/sections/Projects'
import Writings from '@/sections/Writings'

export default function HomePage({ home }: { home: Home }) {
  const [isPopupActive, setIsPopupActive] = useState(false)

  const heroContent = { ...home.sectionHero }
  const projectContent = { ...home.sectionProject }
  const writingsContent = { ...home.sectionWritings }
  const aboutContent = { ...home.sectionAbout }

  return (
    <>
      <PageHead pageTitle="Home" />
      <>
        <Hero content={heroContent} />
        <Projects
          handleClick={(val) => setIsPopupActive(val)}
          content={projectContent}
        />
        <Writings content={writingsContent} />
        <AboutTheWebsite content={aboutContent} />
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
      id: process.env.ID_HOME,
    },
  })

  const { home } = data
  return {
    props: { home },
  }
}
