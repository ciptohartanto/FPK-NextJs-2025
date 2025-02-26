import classNames from 'classnames'
import { motion } from 'motion/react'

import ButtonHollow from '@/components/ButtonHollow'
import { useFpkContext } from '@/context'
import { Cta as CtaGraphProps } from '@/gql/graphql'

type CtaProps = {
  data: CtaGraphProps
}

const CSS_BASE_CLASS = {
  self: 'cta',
  title: 'cta-title',
  typography: 'typography-title',
  wrapper: 'cta-wrapper',
  buttonList: 'cta-buttonList',
  buttonItem: 'cta-buttonItem',
  link: 'cta-link',
}

const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
    },
  }),
}

export default function Cta({ data }: CtaProps) {
  const { title, ctaButtons } = data
  const { handlePopupContent } = useFpkContext()
  return (
    <div className={CSS_BASE_CLASS.self}>
      <div className={CSS_BASE_CLASS.wrapper}>
        <h3
          className={classNames(
            CSS_BASE_CLASS.typography,
            CSS_BASE_CLASS.title
          )}
        >
          {title}
        </h3>
        <ul className={CSS_BASE_CLASS.buttonList}>
          {ctaButtons.map((button, index) => (
            <motion.li
              key={button.id}
              className={CSS_BASE_CLASS.buttonItem}
              variants={fadeInVariants}
              whileInView="animate"
              initial="initial"
              custom={index}
              onClick={() => {
                handlePopupContent({
                  popupTitle: `Bergabung ${button.buttonText}`,
                  isWithButtons: button.isWithButtons,
                  contentBodyType: button.contentBodyType,
                  content: [
                    button.popupLeftContent.html,
                    button.popupRightContent.html,
                  ],
                })
              }}
            >
              <ButtonHollow
                buttonText={button.buttonText}
                buttonDescription={button.buttonDescription}
                style={button.style}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}
