import { GetStaticPropsResult } from 'next'
import { useState } from 'react'

import clientQuery from '@/api/clientQuery'
import PageHead from '@/components/PageHead'
import Popup from '@/components/popup'
import {
  Home as HomePageProps,
  HomesQuery,
  ProjectItem as ProjectItemProps,
} from '@/gql/graphql'
import QUERY_HOME from '@/queries/queryHome'
import AboutTheWebsite from '@/sections/AboutTheWebsite'
import Hero from '@/sections/Hero'
import Projects from '@/sections/Projects'
import Writings from '@/sections/Writings'

export default function HomePage({ home }: { home: HomePageProps }) {
  const [isPopupActive, setIsPopupActive] = useState(false)
  const [popupData, setPopupData] = useState<null | ProjectItemProps>(null)

  const heroContent = { ...home.sectionHero }
  const projectContent = { ...home.sectionProject }
  const writingsContent = { ...home.sectionWritings }
  const aboutContent = { ...home.sectionAbout }

  return (
    <>
      <PageHead pageTitle="Home" />
      <Hero componentData={heroContent} />
      <Projects
        handleClick={(val) => {
          setIsPopupActive(val)
        }}
        handleUpdatePopupData={(id) => {
          const data = projectContent.listOfProjects[id]
          setPopupData(data)
        }}
        componentData={projectContent}
      />
      <Writings componentData={writingsContent} />
      <AboutTheWebsite componentData={aboutContent} />
      {popupData && (
        <Popup
          handleClick={(val) => setIsPopupActive(val)}
          shouldDisplayPopup={isPopupActive}
          componentData={popupData}
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
