import '../styles/index.scss'

import { AppProps } from 'next/app'

import Layout from '@/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}
