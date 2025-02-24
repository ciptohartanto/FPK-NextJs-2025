import classNames from 'classnames'

import { ItemCta as ItemCtaGraphProps } from '@/gql/graphql'

type ButtonHollowProps = Pick<
  ItemCtaGraphProps,
  'buttonText' | 'buttonDescription' | 'style'
>

const CSS_BASE_CLASS = {
  self: 'buttonHollow',
  typographyTitle: 'typography-cta',
  typographyDescription: 'typography-description',
}

export default function ButtonHollow({
  buttonText,
  buttonDescription,
  style,
}: ButtonHollowProps) {
  return (
    <div
      className={classNames(
        CSS_BASE_CLASS.self,
        `${CSS_BASE_CLASS.self}--${style}`
      )}
    >
      <h3
        className={classNames(
          CSS_BASE_CLASS.typographyTitle,
          `${CSS_BASE_CLASS.self}-title`
        )}
      >
        {buttonText}
      </h3>

      <span
        className={classNames(
          CSS_BASE_CLASS.typographyDescription,
          `${CSS_BASE_CLASS.self}-description`
        )}
      >
        {buttonDescription}
      </span>
    </div>
  )
}
