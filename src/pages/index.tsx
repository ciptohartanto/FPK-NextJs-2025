import PageHead from '@/components/PageHead'
import AboutTheWebsite from '@/sections/AboutTheWebsite'
import Hero from '@/sections/Hero'
import Projects from '@/sections/Projects'
import Writings from '@/sections/Writings'

export default function HomePage() {
  return (
    <>
      <PageHead />
      <>
        <Hero />
        <Projects />
        <Writings />
        <AboutTheWebsite />
      </>
    </>
  )
}
