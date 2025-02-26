import classNames from 'classnames'
import { useEffect, useState } from 'react'

import YouTubeVid from '@/components/YouTubeVid'

type YouTubesProps = {
  title: string
}

const CSS_BASE_CLASS = {
  self: 'youTubes',
  wrapper: 'youTubes-wrapper',

  title: 'youTubes-title',
  typographyTitle: 'typography-title',
  list: 'youTubes-list',
  item: 'youTubes-item',
}

export default function YouTubes({ title }: YouTubesProps) {
  const [youTubeVidData, setYouTubeVidData] = useState<undefined | any>(
    undefined
  )
  useEffect(() => {
    const getVideos = async () => {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_PROJECT_URL}/api/videoData`)
          .then((data) => data.json())
          .then((data) => {
            setYouTubeVidData(data.youtubeVideoList)
          })
      } catch (e) {
        throw Error('internal YouTube API error')
      }
    }
    getVideos()
  }, [])

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

        {!youTubeVidData ? (
          <div>loading</div>
        ) : (
          <ul className={CSS_BASE_CLASS.list}>
            {youTubeVidData.map((item: any) => (
              <li
                className={CSS_BASE_CLASS.item}
                key={`${item.contentDetails.videoId}`}
              >
                <YouTubeVid
                  videoUrl={`https://youtube.com/watch/${item.contentDetails.videoId}`}
                  thumbnailUrl={item.snippet.thumbnails.high.url}
                  title={item.snippet.title}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
