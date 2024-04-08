import { useState } from 'react'

import PageHead from '@/components/PageHead'
import Popup from '@/components/popup'
import AboutTheWebsite from '@/sections/AboutTheWebsite'
import Hero from '@/sections/Hero'
import Projects from '@/sections/Projects'
import Writings from '@/sections/Writings'

export default function HomePage() {
  const [isPopupActive, setIsPopupActive] = useState(false)

  return (
    <>
      <PageHead />
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
