import classNames from 'classnames'
import { Niconne, Nokora } from 'next/font/google'
import { ReactNode, useEffect } from 'react'

import Footer from '@/components/Footer'
import Popup from '@/components/Popup'
import { useFpkContext } from '@/context'
import { FooterQuery } from '@/gql/graphql'

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
} & FooterQuery

const CSS_BASE_CLASS = {
  self: 'layout',
}

export default function Layout({ children, theFooter }: LayoutProps) {
  const { popupContent } = useFpkContext()

  useEffect(() => {
    if (popupContent !== undefined) {
      document.body.classList.add('bodyLock')
    } else {
      document.body.classList.remove('bodyLock')
    }
  }, [popupContent])

  return (
    <div
      className={classNames(
        nokora.variable,
        niconne.variable,
        CSS_BASE_CLASS.self
      )}
    >
      {children}
      {popupContent && <Popup data={popupContent} />}

      {theFooter && <Footer theFooter={theFooter} />}
    </div>
  )
}
