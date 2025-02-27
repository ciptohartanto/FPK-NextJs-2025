import '../styles/index.scss'

import { AppProps } from 'next/app'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'

import { FpkProvider } from '@/context'
import Layout from '@/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID as string, {
      gaOptions: {
        // debug_mode: true,
        cookie_flags: 'Secure;SameSite=None',
        cookieDomain: 'none',
      },
    })
  }, [])

  return (
    <FpkProvider>
      <Layout theFooter={pageProps.theFooter}>
        <Component {...pageProps} />
      </Layout>
    </FpkProvider>
  )
}
