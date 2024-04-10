import Head from 'next/head'
import { useEffect, useState } from 'react'

interface PageHeadProps {
  pageTitle: string
}

export default function PageHead({ pageTitle }: PageHeadProps) {
  const [currentTitle, setCurrentTitle] = useState('')

  useEffect(() => {
    const desiredTitle = `Cipto Hartanto | ${pageTitle}`
    const updateCurrentTitle = () => {
      if (document.visibilityState === 'hidden') {
        setCurrentTitle('miss you (っ◕‿◕)っ')
      } else {
        setCurrentTitle(desiredTitle)
      }
    }

    updateCurrentTitle()

    document.addEventListener('visibilitychange', updateCurrentTitle)

    return () =>
      document.removeEventListener('visibilitychange', updateCurrentTitle)
  }, [pageTitle])
  return (
    <Head>
      <title>{currentTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content="description" />
      <meta name="keywords" content="keywords" />
    </Head>
  )
}

PageHead.defaultProps = {
  pageTitle: '',
}
