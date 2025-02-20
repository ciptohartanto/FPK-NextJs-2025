import classNames from 'classnames'
import Link from 'next/link'

import ButtonHollow, { ButtonHollowStyle } from '@/components/ButtonHollow'

type CtaProps = {
  title: string
  buttons: {
    url: string
    buttonText: string
    buttonDescription: string
    style: ButtonHollowStyle
  }[]
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

export default function Cta({ title, buttons }: CtaProps) {
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
          {buttons.map((button) => (
            <li key={button.url} className={CSS_BASE_CLASS.buttonItem}>
              <Link className={CSS_BASE_CLASS.link} href={button.url}>
                <ButtonHollow
                  buttonText={button.buttonText}
                  buttonDescription={button.buttonDescription}
                  style={button.style}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
