import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
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

const BACKGROUND_IMAGE =
  'radial-gradient(rgba(14,210,230,0.4) 8.8%, transparent 8.8%), radial-gradient(rgba(121,39,255,0.3) 8.8%, transparent 8.8%)'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div
        initial="hide"
        animate="animate"
        exit="hide"
        transition={{ type: 'tween' }}
        variants={{
          hide: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
        className="layout-curtain"
      />
      <motion.div
        className="layout-background"
        initial="hide"
        animate="animate"
        exit="hide"
        transition={{ type: 'tween' }}
        variants={{
          hide: {
            opacity: 0,
            width: '100%',
            y: 0,
            backgroundImage: BACKGROUND_IMAGE,
            transition: { delay: 0.5, duration: 0.5 },
            backgroundPosition: '0 0, 11px 11px',
            backgroundSize: '18px 18px',
          },

          animate: {
            opacity: 1,
            width: 'calc(100% - 189px)',
            y: 72,
            backgroundImage: BACKGROUND_IMAGE,
            backgroundPosition: '0 0, 11px 11px',
            backgroundSize: '22px 22px',
            transition: { delay: 2, duration: 1 },
          },
        }}
      />
      <motion.div
        className={classNames('layout-wrapper', urbanist.className)}
        initial="hide"
        animate="animate"
        exit="hide"
        transition={{ type: 'tween' }}
        variants={{
          hide: {
            opacity: 0,
            y: 20,
            transition: { delay: 0.5, duration: 0.5 },
          },

          animate: {
            opacity: 1,
            y: 0,
            transition: { delay: 1, duration: 1 },
          },
        }}
      >
        <Nav />

        {children}
      </motion.div>
    </AnimatePresence>
  )
}
