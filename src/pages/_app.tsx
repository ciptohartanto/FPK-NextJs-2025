import '../styles/index.scss'

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { AppProps } from 'next/app'

import { FpkProvider } from '@/context'
import Layout from '@/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FpkProvider>
      <Layout theFooter={pageProps.theFooter}>
        <Component {...pageProps} />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM as string} />
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_ID as string}
          debugMode={process.env.NODE_ENV === 'development'}
        />
      </Layout>
    </FpkProvider>
  )
}
