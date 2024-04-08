import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

import IconX, { IconXTypes } from '@/elements/IconX'
import Tag from '@/elements/Tag'

import SubSection from './SubSection'

interface PopupProps {
  handleClick: (val: boolean) => void
  shouldDisplayPopup: boolean
}

export default function Popup({ handleClick, shouldDisplayPopup }: PopupProps) {
  return (
    <AnimatePresence>
      {shouldDisplayPopup && (
        <motion.div
          className="popup"
          initial="hide"
          animate="animate"
          exit="hide"
          variants={{
            hide: { opacity: 0, scale: 0.96 },
            animate: { opacity: 1, scale: 1 },
          }}
        >
          <div className="popup-wrapper">
            <div className="popup-iconClose" onClick={() => handleClick(false)}>
              <IconX type={IconXTypes.SMALL} />
            </div>
            <motion.div
              className="popup-body"
              initial="hide"
              animate="animate"
              exit="hide"
              variants={{
                hide: { boxShadow: '0 3px 0px 0px rgba(0,0,0,0.0)' },
                animate: {
                  boxShadow: '0 3px 17.8px 3px rgba(0,0,0,0.07)',
                  transition: { delay: 0.5, duration: 0.5 },
                },
              }}
            >
              <div
                className="popup-background"
                style={{
                  backgroundImage:
                    'url("https://asset.kompas.com/crops/m8q0O4LsGzHI6gYgczcVqWpJ7cw=/199x44:1583x966/750x500/data/photo/2022/06/02/629850dd5e5ad.png")',
                }}
              />
              <div className="popup-content">
                <h3 className="popup-title">UI Project</h3>
                <ul className="popup-wrapperTags">
                  <li className="popup-tag">
                    <Tag text="Tag 1" />
                  </li>
                  <li className="popup-tag">
                    <Tag text="Tag 1" />
                  </li>
                </ul>
                <div className="popup-wrapperDescription">
                  <span className="popup-description">
                    Late 2017 - Early 2019
                  </span>
                  <Link
                    href="https://example.com"
                    className="popup-externalLink"
                  >
                    https://today.line.me
                  </Link>
                </div>
                <div className="popup-section">
                  <SubSection title="Role">
                    <p className="popup-paragraph">
                      Markup Engineer, Fixing issues
                    </p>
                  </SubSection>
                </div>
                <div className="popup-section">
                  <SubSection title="Role">
                    <p className="popup-paragraph">
                      Markup Engineer, Fixing issues
                      <br />
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sit nesciunt error ad illo, iusto pariatur maxime.
                      Voluptates quo quas provident obcaecati perferendis, velit
                      praesentium, consequuntur excepturi expedita harum quos
                      officia?
                      <br />
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nobis quis dolor architecto magni commodi, delectus
                      consequatur nemo minima nisi blanditiis pariatur dolorem
                      ad fuga voluptatem eveniet quidem illo, at ea?
                      <br />
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nobis quis dolor architecto magni commodi, delectus
                      consequatur nemo minima nisi blanditiis pariatur dolorem
                      ad fuga voluptatem eveniet quidem illo, at ea?
                      <br />
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nobis quis dolor architecto magni commodi, delectus
                      consequatur nemo minima nisi blanditiis pariatur dolorem
                      ad fuga voluptatem eveniet quidem illo, at ea?
                      <br />
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nobis quis dolor architecto magni commodi, delectus
                      consequatur nemo minima nisi blanditiis pariatur dolorem
                      ad fuga voluptatem eveniet quidem illo, at ea?
                    </p>
                  </SubSection>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

Popup.defaultProps = {
  shouldDisplayPopup: false,
  handleClick: () => false,
}
