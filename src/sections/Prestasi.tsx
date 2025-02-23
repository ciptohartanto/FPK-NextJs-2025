import classNames from 'classnames'

import Album from '@/components/Album'
import TitleWithPipe from '@/components/TitleWithPipe'

type PrestasiProps = {
  title: string
  content: string
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
export default function Prestasi({ title, content }: PrestasiProps) {
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
            {content}
          </h3>
        </div>
        <div className={CSS_BASE_CLASS.wrapperRight}>
          <div className={CSS_BASE_CLASS.album}>
            <Album
              type="default"
              images={[
                { url: '/dummy-wallpaper.jpg', alt: 'dummy' },
                { url: '/dummy-wallpaper.jpg', alt: 'dummy' },
                { url: '/dummy-wallpaper.jpg', alt: 'dummy' },
                { url: '/dummy-wallpaper.jpg', alt: 'dummy' },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
