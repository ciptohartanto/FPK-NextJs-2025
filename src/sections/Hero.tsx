import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

import { FRAMER_SUB_SECTION_ANIMATION } from '@/constants'
import Trademark from '@/elements/Trademark'

export default function Hero() {
  const refHero = useRef<null | HTMLElement>(null)
  return (
    <section className="hero" ref={refHero}>
      <motion.div className="hero-row" {...FRAMER_SUB_SECTION_ANIMATION}>
        <div className="hero-colWrapper">
          <Trademark />
          <h2 className="hero-subtitle" {...FRAMER_SUB_SECTION_ANIMATION}>
            Senior Web Developer
          </h2>
          <h3 className="hero-caption">
            8+ years of problem solving, strong communication skills, and making
            websites
          </h3>
          <Link className="hero-link" href="/resume">
            <span>Read More</span>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
