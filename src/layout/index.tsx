import classNames from 'classnames'
import { Niconne, Nokora } from 'next/font/google'
import { ReactNode } from 'react'

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
type LayoutProps = {
  children: ReactNode
}

const CSS_BASE_CLASS = {
  self: 'layout',
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={classNames(
        nokora.variable,
        niconne.variable,
        CSS_BASE_CLASS.self
      )}
    >
      {children}
    </div>
  )
}
