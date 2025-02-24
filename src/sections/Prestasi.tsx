import classNames from 'classnames'

import Album from '@/components/Album'
import TitleWithPipe from '@/components/TitleWithPipe'
import { Prestasi as PrestasiGraphProps } from '@/gql/graphql'

type PrestasiProps = {
  data: PrestasiGraphProps
}

const CSS_BASE_CLASS = {
  self: 'prestasi',
  wrapper: 'prestasi-wrapper',
  album: 'prestasi-album',
  paragraph: 'prestasi-paragraph',
  typography: 'typography-paragraph',
  wrapperLeft: 'prestasi-wrapperLeft',
  wrapperRight: 'prestasi-wrapperRight',
}
export default function Prestasi({ data }: PrestasiProps) {
  const { title, description, albums } = data
  return (
    <div className={CSS_BASE_CLASS.self}>
      <div className={CSS_BASE_CLASS.wrapper}>
        <div className={CSS_BASE_CLASS.wrapperLeft}>
          <TitleWithPipe titleText={title} style="onLightBackground" />
          <h3
            className={classNames(
              CSS_BASE_CLASS.typography,
              CSS_BASE_CLASS.paragraph
            )}
          >
            {description}
          </h3>
        </div>
        <div className={CSS_BASE_CLASS.wrapperRight}>
          <div className={CSS_BASE_CLASS.album}>
            <Album type="default" imagesOnAlbum={albums} />
          </div>
        </div>
      </div>
    </div>
  )
}
