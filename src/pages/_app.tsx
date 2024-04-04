import '../styles/index.scss'

import type { AppProps } from 'next/app'
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={urbanist.className}>
      <Component {...pageProps} />
    </main>
  )
}
