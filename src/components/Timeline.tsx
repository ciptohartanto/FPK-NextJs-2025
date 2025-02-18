import classNames from 'classnames'

type TimelineProps = {
  title: string
  description: string
}

const CSS_BASE_CLASS = {
  self: 'timeline',
  title: 'timeline-title',
  description: 'timeline-description',
  typographyTitle: 'typography-title-small',
  typographyDescription: 'typography-description',
}

export default function Timeline({ title, description }: TimelineProps) {
  return (
    <li className={CSS_BASE_CLASS.self}>
      <h3
        className={classNames(
          CSS_BASE_CLASS.title,
          CSS_BASE_CLASS.typographyTitle
        )}
      >
        {title}
      </h3>
      <h4
        className={classNames(
          CSS_BASE_CLASS.description,
          CSS_BASE_CLASS.typographyDescription
        )}
      >
        {description}
      </h4>
    </li>
  )
}
