import classNames from 'classnames'

import TitleWithPipe from '@/components/TitleWithPipe'
import { SiapaKami as SiapaKamiGraphProps } from '@/gql/graphql'

type SiapaKamiProps = {
  data: SiapaKamiGraphProps
}

const CSS_BASE_CLASS = {
  self: 'siapaKami',
  wrapper: 'siapaKami-wrapper',
  thumbnail: 'siapaKami-thumbnail',
  paragraph: 'siapaKami-paragraph',
  typography: 'typography-paragraph',
  wrapperLeft: 'siapaKami-wrapperLeft',
  wrapperRight: 'siapaKami-wrapperRight',
}

export default function SiapaKami({ data }: SiapaKamiProps) {
  const { title, description, gambar } = data
  return (
    <div className={CSS_BASE_CLASS.self}>
      <div className={CSS_BASE_CLASS.wrapper}>
        <div className={CSS_BASE_CLASS.wrapperLeft}>
          <div
            className={CSS_BASE_CLASS.thumbnail}
            style={{ backgroundImage: `url(${gambar.fileGambar.url})` }}
            aria-label={gambar.judul}
          />
        </div>
        <div className={CSS_BASE_CLASS.wrapperRight}>
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
      </div>
    </div>
  )
}
