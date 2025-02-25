import classNames from 'classnames'

import IconClose from '@/assets/icons/icon-close.svg'
import { useFpkContext } from '@/context'
import { ItemCta } from '@/gql/graphql'

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

export default function Popup({ data }: PopupProps) {
  const { popupTitle, isWithButtons, contentBodyType, content } = data
  const { handlePopupContent } = useFpkContext()

  return (
    <div className={CSS_BASE_CLASS.self}>
      <div
        className={CSS_BASE_CLASS.background}
        onClick={() => handlePopupContent(undefined)}
      />
      <div className={CSS_BASE_CLASS.body}>
        <span
          className={CSS_BASE_CLASS.iconClose}
          onClick={() => handlePopupContent(undefined)}
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
