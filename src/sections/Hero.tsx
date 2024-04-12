import { motion } from 'framer-motion'
import { useRef } from 'react'

import AnchorLink from '@/components/AnchorLink'
import { FRAMER } from '@/constants'
import Trademark from '@/elements/Trademark'
import { SectionHero } from '@/gql/graphql'

type HeroProps = Pick<SectionHero, 'subtitle' | 'caption'>

export default function Hero({ componentData }: { componentData: HeroProps }) {
  const refHero = useRef<null | HTMLElement>(null)

  const { subtitle, caption } = componentData

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
            {subtitle}
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
            {caption}
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
