import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useState } from 'react'

import IconClose from '@/assets/icons/icon-close.svg'
import { useFpkContext } from '@/context'
import { ItemCta } from '@/gql/graphql'
import gtmClickButton from '@/utils/gtm-clickButton'

import ButtonHollowRounded from './ButtonHollowRounded'
import TitleWithPipe from './TitleWithPipe'

export type PopupDataProps = {
  popupTitle: string
  content: string[]
} & Pick<ItemCta, 'isWithButtons' | 'contentBodyType'>

type PopupProps = {
  data: PopupDataProps
}

const CSS_BASE_CLASS = {
  self: 'popup',
  background: 'popup-background',
  body: 'popup-body',
  wrapper: 'popup-wrapper',
  content: 'popup-content',
  iconClose: 'popup-iconClose',
  buttonList: 'popup-buttonList',
  buttonItem: 'popup-buttonItem',
}

const CONTACT_INFO = {
  tel: 'tel:+6281268317567',
  email: 'mailto:yayasanflorespenuhkasih@hotmail.com',
}

const ANIMATION_BODY = {
  exit: { transition: { delay: 0.2 }, x: 10, y: -20, opacity: 0 },
  animate: {
    transition: { delay: 0.2 },
    x: 0,
    y: 0,
    opacity: 1,
  },
}

const ANIMATION_BG = {
  exit: { opacity: 0, transition: { delay: 0.3 } },
  animate: { opacity: 1, transition: { delay: 0 } },
}

const DELAY = 450

export default function Popup({ data }: PopupProps) {
  const { popupTitle, isWithButtons, contentBodyType, content } = data
  const { handlePopupContent } = useFpkContext()
  const [animationBgValue, setAnimationBgValue] = useState(ANIMATION_BG.animate)
  const [animationBodyValue, setAnimationBodyValue] = useState(
    ANIMATION_BODY.animate
  )

  const handleClosingPopup = useCallback(() => {
    setAnimationBgValue(ANIMATION_BG.exit)
    setAnimationBodyValue(ANIMATION_BODY.exit)
    setTimeout(() => {
      handlePopupContent(undefined)
    }, DELAY)
  }, [handlePopupContent])

  return (
    <AnimatePresence>
      {data && (
        <div className={CSS_BASE_CLASS.self}>
          <motion.div
            key="innerPopup"
            className={CSS_BASE_CLASS.background}
            onClick={handleClosingPopup}
            animate={animationBgValue}
            initial={ANIMATION_BG.exit}
          />
          <motion.div
            className={CSS_BASE_CLASS.body}
            animate={animationBodyValue}
            initial={ANIMATION_BODY.exit}
          >
            <span
              className={CSS_BASE_CLASS.iconClose}
              onClick={handleClosingPopup}
            >
              <IconClose />
            </span>
            <TitleWithPipe titleText={popupTitle} style="onDarkBackground" />
            <div
              className={classNames(CSS_BASE_CLASS.wrapper, {
                [`${CSS_BASE_CLASS.wrapper}--isWithButtons`]: isWithButtons,
              })}
            >
              {content.map((item, index) => {
                return (
                  <div
                    className={classNames(
                      `${CSS_BASE_CLASS.content}--${contentBodyType}`
                    )}
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                )
              })}
            </div>
            {isWithButtons && (
              <ul className={CSS_BASE_CLASS.buttonList}>
                <li className={CSS_BASE_CLASS.buttonItem}>
                  <a
                    href={CONTACT_INFO.email}
                    onClick={() => gtmClickButton(`${popupTitle}-email`)}
                  >
                    <ButtonHollowRounded buttonText="Kontak via email" />
                  </a>
                </li>
                <li className={CSS_BASE_CLASS.buttonItem}>
                  <a
                    href={CONTACT_INFO.tel}
                    onClick={() => gtmClickButton(`${popupTitle}-telepon`)}
                  >
                    <ButtonHollowRounded buttonText="Kontak via telepon" />
                  </a>
                </li>
              </ul>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
