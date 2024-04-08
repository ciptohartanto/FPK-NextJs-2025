import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

import { FRAMER_SUB_SECTION_ANIMATION } from '@/constants'
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
            {...FRAMER_SUB_SECTION_ANIMATION}
          >
            Senior Web Developer
          </motion.h2>
          <motion.h3 className="hero-caption" {...FRAMER_SUB_SECTION_ANIMATION}>
            8+ years of problem solving, strong communication skills, and making
            websites
          </motion.h3>
          <Link className="hero-link" href="/resume">
            <motion.span {...FRAMER_SUB_SECTION_ANIMATION}>
              Read More
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  )
}
