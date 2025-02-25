import classNames from 'classnames'

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
          {ctaButtons.map((button) => (
            <li
              key={button.id}
              className={CSS_BASE_CLASS.buttonItem}
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
