import classNames from 'classnames'

type ButtonHollowProps = {
  style: 'one' | 'two' | 'three'
  buttonText: string
  buttonDescription: string
}

const CSS_CLASS_BASE = {
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
        CSS_CLASS_BASE.self,
        `${CSS_CLASS_BASE.self}--${style}`
      )}
    >
      <h3
        className={classNames(
          CSS_CLASS_BASE.typographyTitle,
          `${CSS_CLASS_BASE.self}-title`
        )}
      >
        {buttonText}
      </h3>

      <span
        className={classNames(
          CSS_CLASS_BASE.typographyDescription,
          `${CSS_CLASS_BASE.self}-description`
        )}
      >
        {buttonDescription}
      </span>
    </div>
  )
}
