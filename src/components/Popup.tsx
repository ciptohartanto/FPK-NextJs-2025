import classNames from 'classnames'

import IconClose from '@/assets/icons/icon-close.svg'

import ButtonHollowRounded from './ButtonHollowRounded'
import TitleWithPipe from './TitleWithPipe'

export type PopupDataProps = {
  popupTitle: string
  isWithButtons: boolean
  contentBodyType: '50-50' | '30-70' | '60-40' | '100-0'
  content: string[]
}

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

export default function Popup({ data }: PopupProps) {
  const { popupTitle, isWithButtons, contentBodyType, content } = data
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
                dangerouslySetInnerHTML={{ __html: item }}
              />
            )
          })}
        </div>
        {isWithButtons && (
          <ul className={CSS_BASE_CLASS.buttonList}>
            <li className={CSS_BASE_CLASS.buttonItem}>
              <a href={CONTACT_INFO.email}>
                <ButtonHollowRounded buttonText="Kontak via email" />
              </a>
            </li>
            <li className={CSS_BASE_CLASS.buttonItem}>
              <a href={CONTACT_INFO.tel}>
                <ButtonHollowRounded buttonText="Kontak via telepon" />
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}
