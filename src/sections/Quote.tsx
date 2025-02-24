import classNames from 'classnames'

import { Quote as QuoteQueryProps } from '@/gql/graphql'

export type QuoteProps = {
  data: QuoteQueryProps
}

const CSS_BASE_CLASS = {
  self: 'quote',
  wrapper: 'quote-wrapper',
  title: 'quote-title',
  typography: 'typography-quote',
}

export default function Quote({ data }: QuoteProps) {
  const { title, gambar } = data
  return (
    <div
      className={CSS_BASE_CLASS.self}
      style={{ backgroundImage: `url(${gambar.fileGambar.url})` }}
    >
      <div className={CSS_BASE_CLASS.wrapper}>
        <h2
          className={classNames(
            CSS_BASE_CLASS.typography,
            CSS_BASE_CLASS.title
          )}
          aria-label={gambar.judul}
        >
          {title}
        </h2>
      </div>
    </div>
  )
}
