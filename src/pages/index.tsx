import { GetStaticPropsResult } from 'next'
import { useState } from 'react'

import clientQuery from '@/api/clientQuery'
import PageHead from '@/components/PageHead'
import Popup from '@/components/popup'
import { Home, HomesQuery, ProjectItem } from '@/gql/graphql'
import QUERY_HOME from '@/queries/home'
import AboutTheWebsite from '@/sections/AboutTheWebsite'
import Hero from '@/sections/Hero'
import Projects from '@/sections/Projects'
import Writings from '@/sections/Writings'

export default function HomePage({ home }: { home: Home }) {
  const [isPopupActive, setIsPopupActive] = useState(false)
  const [popupData, setPopupData] = useState<null | ProjectItem>(null)

  const heroContent = { ...home.sectionHero }
  const projectContent = { ...home.sectionProject }
  const writingsContent = { ...home.sectionWritings }
  const aboutContent = { ...home.sectionAbout }

  return (
    <>
      <PageHead pageTitle="Home" />
      <Hero content={heroContent} />
      <Projects
        handleClick={(val) => {
          setIsPopupActive(val)
        }}
        handleUpdatePopupData={(id) => {
          const data = projectContent.listOfProjects[id]
          setPopupData(data)
        }}
        content={projectContent}
      />
      <Writings content={writingsContent} />
      <AboutTheWebsite content={aboutContent} />
      {popupData && (
        <Popup
          handleClick={(val) => setIsPopupActive(val)}
          shouldDisplayPopup={isPopupActive}
          projectData={popupData}
        />
      )}
    </>
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<HomesQuery>
> {
  const data = await clientQuery<HomesQuery>({
    query: QUERY_HOME,
    variableObject: { id: process.env.ID_HOME },
  })

  const { home } = data
  return {
    props: { home },
  }
}
