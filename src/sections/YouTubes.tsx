import classNames from 'classnames'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

import IconLoading from '@/assets/icons/icon-loading.svg'
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
  loadingWrapper: 'youTubes-loadingWrapper',
  loadingText: 'youTubes-loadingText',
  loadingIcon: 'youTubes-loadingIcon',
}

const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
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
          <div className={CSS_BASE_CLASS.loadingWrapper}>
            <IconLoading className={CSS_BASE_CLASS.loadingIcon} />
            <span className={CSS_BASE_CLASS.loadingText}>loading</span>
          </div>
        ) : (
          <ul className={CSS_BASE_CLASS.list} key="youtubeVideoWrapper">
            {youTubeVidData.map((item: any, index: number) => (
              <motion.li
                className={CSS_BASE_CLASS.item}
                key={`${item.contentDetails.videoId}${index}`}
                variants={fadeInVariants}
                whileInView="animate"
                initial="initial"
                custom={index}
                viewport={{ once: true, amount: 0.1 }}
              >
                <YouTubeVid
                  videoUrl={`https://youtube.com/watch/${item.contentDetails.videoId}`}
                  thumbnailUrl={item.snippet.thumbnails.high.url}
                  title={item.snippet.title}
                />
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
