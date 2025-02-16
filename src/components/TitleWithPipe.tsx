import classNames from 'classnames'

type TitleWithPipeProps = {
  titleText: string
  style: 'onDarkBackground' | 'onLightBackground'
}

const CSS_CLASS_BASE = {
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
        CSS_CLASS_BASE.self,
        CSS_CLASS_BASE.typography,
        style === 'onDarkBackground'
          ? `${CSS_CLASS_BASE.self}--onDarkBackground`
          : `${CSS_CLASS_BASE.self}--onLightBackground`
      )}
    >
      {titleText}
    </h1>
  )
}
