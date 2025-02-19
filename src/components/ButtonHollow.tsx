import classNames from 'classnames'

type ButtonHollowProps = {
  style: 'one' | 'two' | 'three'
  buttonText: string
  buttonDescription: string
}

const CSS_BASE_CLASS = {
  self: 'buttonHollow',
  typographyTitle: 'typography-cta',
  typographyDescription: 'typography-description',
}

export default function ButtonHollow({
  style = 'one',
  buttonText,
  buttonDescription,
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
