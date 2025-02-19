import '../styles/index.scss'

import classNames from 'classnames'
import type { AppProps } from 'next/app'
import { Niconne, Nokora } from 'next/font/google'

const nokora = Nokora({
  variable: '--font-nokora',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
})
const niconne = Niconne({
  variable: '--font-niconne',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={classNames(nokora.variable, niconne.variable)}>
      <Component {...pageProps} />
    </main>
  )
}
