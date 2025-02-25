import classNames from 'classnames'
import Image from 'next/image'

import IconYoutube from '@/assets/icons/icon-youtube.svg'

type YouTubeVidProps = {
  videoUrl: string
  thumbnailUrl: string
  title: string
}

const CSS_BASE_CLASS = {
  self: 'youtubeVid',
  topWrapper: 'youtubeVid-topWrapper',
  image: 'youtubeVid-image',
  icon: 'youtubeVid-icon',
  typography: 'typography-caption',
  title: 'youtubeVid-title',
}

export default function YouTubeVid({
  videoUrl,
  title,
  thumbnailUrl,
}: YouTubeVidProps) {
  return (
    <a
      className={CSS_BASE_CLASS.self}
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={CSS_BASE_CLASS.topWrapper}>
        <Image
          className={CSS_BASE_CLASS.image}
          width={560}
          height={175}
          src={thumbnailUrl}
          alt={title}
        />

        <IconYoutube className={CSS_BASE_CLASS.icon} />
      </div>
      <h4
        className={classNames(CSS_BASE_CLASS.title, CSS_BASE_CLASS.typography)}
      >
        {title}
      </h4>
    </a>
  )
}
