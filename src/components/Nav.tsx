import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import IconHamburger, { IconHamburgerTypes } from '@/elements/IconHamburger'
import IconX, { IconXTypes } from '@/elements/IconX'

export default function Nav() {
  const [isFolded, setIsFolded] = useState(true)
  console.log(isFolded)
  return (
    <div className="nav">
      <button onClick={() => setIsFolded(!isFolded)} className="nav-icon">
        <IconHamburger type={IconHamburgerTypes.LARGE} />
        <IconX type={IconXTypes.LARGE} />
      </button>
      <AnimatePresence>
        {!isFolded && (
          <motion.div
            className="nav-wrapper"
            initial="hide"
            animate="animate"
            exit="hide"
            transition={{ type: 'tween' }}
            variants={{
              hide: {
                opacity: 0,
                x: '100%',
              },
              animate: {
                opacity: 1,
                x: 0,
              },
            }}
          >
            <motion.nav
              className="nav-navigation"
              initial="hide"
              animate="animate"
              transition={{ type: 'tween', delay: 0.7, duration: 0.6 }}
              variants={{
                hide: {
                  filter: 'drop-shadow(0px 0 40px rgba(0,0,0,0))',
                },
                animate: {
                  filter: 'drop-shadow(-35px 0 40px rgba(0,0,0,0.05))',
                },
              }}
            >
              <ul className="nav-list">
                <motion.li
                  className="nav-item"
                  initial="hide"
                  animate="animate"
                  transition={{ type: 'tween', delay: 0.2, duration: 0.2 }}
                  variants={{
                    hide: {
                      opacity: 0,
                      filter: 'blur(2px)',
                      y: -10,
                    },
                    animate: {
                      opacity: 1,
                      filter: 'blur(0px)',
                      y: 0,
                    },
                  }}
                >
                  <span className="nav-text">Projects</span>
                </motion.li>
                <motion.li
                  className="nav-item"
                  initial="hide"
                  animate="animate"
                  transition={{ type: 'tween', delay: 0.5, duration: 0.2 }}
                  variants={{
                    hide: {
                      opacity: 0,
                      filter: 'blur(2px)',
                      y: -10,
                    },
                    animate: {
                      opacity: 1,
                      filter: 'blur(0px)',
                      y: 0,
                    },
                  }}
                >
                  <span className="nav-text">Writings</span>
                </motion.li>
                <motion.li
                  className="nav-item"
                  initial="hide"
                  animate="animate"
                  transition={{ type: 'tween', delay: 0.8, duration: 0.2 }}
                  variants={{
                    hide: {
                      opacity: 0,
                      filter: 'blur(2px)',
                      y: -10,
                    },
                    animate: {
                      opacity: 1,
                      filter: 'blur(0px)',

                      y: 0,
                    },
                  }}
                >
                  <span className="nav-text">About This Website</span>
                </motion.li>
                <motion.li
                  className="nav-item"
                  initial="hide"
                  animate="animate"
                  transition={{ type: 'tween', delay: 1.1, duration: 0.2 }}
                  variants={{
                    hide: {
                      opacity: 0,
                      filter: 'blur(2px)',
                      y: -10,
                    },
                    animate: {
                      opacity: 1,
                      filter: 'blur(0px)',
                      y: 0,
                    },
                  }}
                >
                  <span className="nav-text">Resume</span>
                </motion.li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
