import { motion } from 'framer-motion'
import { useRef } from 'react'

import AnchorLink from '@/components/AnchorLink'
import { FRAMER } from '@/constants'
import Trademark from '@/elements/Trademark'

export default function Hero() {
  const refHero = useRef<null | HTMLElement>(null)

  return (
    <section className="hero" ref={refHero}>
      <div className="hero-row">
        <div className="hero-colWrapper">
          <Trademark />
          <motion.h2
            className="hero-subtitle"
            {...FRAMER.FRAMER_SUB_SECTION_ANIMATION}
            whileInView={{
              ...FRAMER.FRAMER_SUB_SECTION_ANIMATION.whileInView,
              transition: {
                delay: 0.2,
              },
            }}
          >
            Senior Web Developer
          </motion.h2>
          <motion.h3
            className="hero-caption"
            {...FRAMER.FRAMER_SUB_SECTION_ANIMATION}
            whileInView={{
              ...FRAMER.FRAMER_SUB_SECTION_ANIMATION.whileInView,
              transition: {
                delay: 0.5,
              },
            }}
          >
            8+ years of problem solving, strong communication skills, and making
            websites
          </motion.h3>
          <AnchorLink href="/resume">
            <motion.span
              className="hero-link"
              {...FRAMER.FRAMER_SUB_SECTION_ANIMATION}
              whileInView={{
                ...FRAMER.FRAMER_SUB_SECTION_ANIMATION.whileInView,
                transition: {
                  delay: 0.7,
                },
              }}
            >
              Read More
            </motion.span>
          </AnchorLink>
        </div>
      </div>
    </section>
  )
}
