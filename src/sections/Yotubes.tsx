import classNames from 'classnames'

import YouTubeVid, { YouTubeVidProps } from '@/components/YouTubeVid'

type YouTubesProps = {
  title: string
  youtubeVids: YouTubeVidProps[]
}

const CSS_BASE_CLASS = {
  self: 'youtubes',
  wrapper: 'youtubes-wrapper',

  title: 'youtubes-title',
  typographyTitle: 'typography-title',
  list: 'youtubes-list',
  item: 'youtubes-item',
}

export default function Youtubes({ title, youtubeVids }: YouTubesProps) {
  return (
    <div className={CSS_BASE_CLASS.self}>
      <div className={CSS_BASE_CLASS.wrapper}>
        <h1
          className={classNames(
            CSS_BASE_CLASS.title,
            CSS_BASE_CLASS.typographyTitle
          )}
        >
          {title}
        </h1>

        <ul className={CSS_BASE_CLASS.list}>
          {youtubeVids.map((item) => (
            <li className={CSS_BASE_CLASS.item} key={item.videoUrl}>
              <YouTubeVid
                videoUrl={item.videoUrl}
                thumbnailUrl={item.thumbnailUrl}
                title={item.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
