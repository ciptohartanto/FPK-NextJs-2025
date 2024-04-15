import '../styles/index.scss'

import { ReactLenis } from '@studio-freight/react-lenis'
import type { AppProps } from 'next/app'

import Layout from '@/layout/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  const lenisOptions = {
    lerp: 0.1,
    duration: 0.5,
    smoothTouch: false, //smooth scroll for touch devices
    smooth: true,
  }
  return (
    <ReactLenis root options={lenisOptions}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReactLenis>
  )
}
