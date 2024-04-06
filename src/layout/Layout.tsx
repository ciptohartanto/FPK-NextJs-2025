import classNames from 'classnames'
import { Urbanist } from 'next/font/google'
import { ReactNode } from 'react'

import Nav from '@/components/Nav'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-urbanist',
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={classNames('layout', urbanist.className)}>
      <Nav />
      {children}
    </div>
  )
}
