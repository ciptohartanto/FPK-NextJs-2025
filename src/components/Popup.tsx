import classNames from 'classnames'
import { ReactElement } from 'react'

import IconClose from '@/assets/icons/icon-close.svg'

import ButtonHollowRounded from './ButtonHollowRounded'
import TitleWithPipe from './TitleWithPipe'

type PopupProps = {
  popupTitle: string
  isWithButtons: boolean
  contentBodyType: '50-50' | '30-70' | '60-40' | '100-0'
  content: ReactElement[]
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

export default function Popup({
  popupTitle,
  isWithButtons,
  contentBodyType,
  content,
}: PopupProps) {
  return (
    <div className={CSS_BASE_CLASS.self}>
      <div className={CSS_BASE_CLASS.background} />
      <div className={CSS_BASE_CLASS.body}>
        <span className={CSS_BASE_CLASS.iconClose}>
          <IconClose />
        </span>
        <TitleWithPipe titleText={popupTitle} style="onDarkBackground" />
        <div className={CSS_BASE_CLASS.wrapper}>
          {content.map((item, index) => {
            return (
              <div
                className={classNames(
                  `${CSS_BASE_CLASS.content}--${contentBodyType}`
                )}
                key={index}
              >
                {item}
              </div>
            )
          })}
        </div>
        {isWithButtons && (
          <ul className={CSS_BASE_CLASS.buttonList}>
            <li className={CSS_BASE_CLASS.buttonItem}>
              <ButtonHollowRounded buttonText="Kontak via email" />
            </li>
            <li className={CSS_BASE_CLASS.buttonItem}>
              <ButtonHollowRounded buttonText="Kontak via telepon" />
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}
