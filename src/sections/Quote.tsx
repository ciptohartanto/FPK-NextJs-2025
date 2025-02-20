import classNames from 'classnames'

type QuoteProps = {
  title: string
  background: string
}

const CSS_BASE_CLASS = {
  self: 'quote',
  wrapper: 'quote-wrapper',
  title: 'quote-title',
  typography: 'typography-quote',
}

export default function Quote({ title, background }: QuoteProps) {
  return (
    <div
      className={CSS_BASE_CLASS.self}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={CSS_BASE_CLASS.wrapper}>
        <h2
          className={classNames(
            CSS_BASE_CLASS.typography,
            CSS_BASE_CLASS.title
          )}
        >
          {title}
        </h2>
      </div>
    </div>
  )
}
