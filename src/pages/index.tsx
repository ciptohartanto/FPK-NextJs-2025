import PageHead from '@/components/PageHead'
import AboutTheWebsite from '@/sections/AboutTheWebsite'
import Hero from '@/sections/Hero'
import Writings from '@/sections/Writings'

export default function HomePage() {
  return (
    <>
      <PageHead />
      <>
        <Hero />
        <Writings />
        <AboutTheWebsite />
      </>
    </>
  )
}
