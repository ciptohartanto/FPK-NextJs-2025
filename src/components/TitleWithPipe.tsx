import classNames from 'classnames'

type TitleWithPipeProps = {
  titleText: string
  style: 'onDarkBackground' | 'onLightBackground'
}

const CSS_BASE_CLASS = {
  self: 'titleWithPipe',
  typography: 'typography-title',
}

export default function TitleWithPipe({
  titleText,
  style,
}: TitleWithPipeProps) {
  return (
    <h1
      className={classNames(
        CSS_BASE_CLASS.self,
        CSS_BASE_CLASS.typography,
        style === 'onDarkBackground'
          ? `${CSS_BASE_CLASS.self}--onDarkBackground`
          : `${CSS_BASE_CLASS.self}--onLightBackground`
      )}
    >
      {titleText}
    </h1>
  )
}
