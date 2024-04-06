import Link from 'next/link'

import Trademark from '@/elements/Trademark'

export default function Hero() {
  return (
    <section className="hero">
      <Trademark />
      <h2 className="hero-subtitle">Senior Web Developer</h2>
      <h3 className="hero-caption">
        8+ years of problem solving, strong communication skills, and making
        websites
      </h3>
      <Link className="hero-link" href="/resume">
        Read More
      </Link>
    </section>
  )
}
