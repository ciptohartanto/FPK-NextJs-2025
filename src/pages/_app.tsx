import '../styles/index.scss'

import { AppProps } from 'next/app'

import { FpkProvider } from '@/context'
import Layout from '@/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FpkProvider>
      <Layout theFooter={pageProps.theFooter}>
        <Component {...pageProps} />
      </Layout>
    </FpkProvider>
  )
}
