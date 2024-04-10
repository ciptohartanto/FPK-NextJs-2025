import { motion } from 'framer-motion'

import SubSection from '@/components/SubSection'
import { FRAMER } from '@/constants'

export default function AboutTheWebsite() {
  return (
    <section className="aboutTheWebsite">
      <motion.h2
        className="aboutTheWebsite-title"
        {...FRAMER.FRAMER_SUB_SECTION_ANIMATION_BOTTOM}
      >
        About This Website
      </motion.h2>
      <div className="aboutTheWebsite-listWrapper">
        <motion.ul
          className="aboutTheWebsite-itemsWrapper"
          {...FRAMER.FRAMER_SUB_SECTION_ANIMATION_BOTTOM}
        >
          <li className="aboutTheWebsite-item">
            <SubSection title="FrontEnd">
              <h3 className="aboutTheWebsite-subsectionText">
                Next.js, Framer Motion, GraphQL
              </h3>
            </SubSection>
          </li>
          <li className="aboutTheWebsite-item">
            <SubSection title="Backend">
              <h3 className="aboutTheWebsite-subsectionText">GraphCMS</h3>
            </SubSection>
          </li>
          <li className="aboutTheWebsite-item">
            <SubSection title="Deployment">
              <h3 className="aboutTheWebsite-subsectionText">Netlify</h3>
            </SubSection>
          </li>
        </motion.ul>
        <motion.ul
          className="aboutTheWebsite-itemsWrapper"
          {...FRAMER.FRAMER_SUB_SECTION_ANIMATION_BOTTOM}
        >
          <li className="aboutTheWebsite-item">
            <SubSection title="User Interface">
              <h3 className="aboutTheWebsite-subsectionText">
                Figma Google Naturalist font
              </h3>
            </SubSection>
          </li>
          <li className="aboutTheWebsite-item">
            <SubSection title="Image Assets">
              <h3 className="aboutTheWebsite-subsectionText">Next.js</h3>
            </SubSection>
          </li>
          <li className="aboutTheWebsite-item">
            <SubSection title="Source Code">
              <h3 className="aboutTheWebsite-subsectionText">
                Next.js, Framer Motion
              </h3>
            </SubSection>
          </li>
        </motion.ul>
        <motion.ul
          className="aboutTheWebsite-itemsWrapper"
          {...FRAMER.FRAMER_SUB_SECTION_ANIMATION_BOTTOM}
        >
          <li className="aboutTheWebsite-item">
            <SubSection title="Source Code">
              <h3 className="aboutTheWebsite-subsectionText">Github, Figma</h3>
            </SubSection>
          </li>
        </motion.ul>
      </div>
    </section>
  )
}
