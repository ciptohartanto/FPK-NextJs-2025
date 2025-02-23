// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import classNames from 'classnames'
import Image from 'next/image'
import { useState } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type AlbumImageProps = {
  url: string
  alt: string
}
type AlbumProps = {
  type: 'default' | 'withNumbers'
  images: AlbumImageProps[]
}

const CSS_BASE_CLASS = {
  self: 'album',
  swiper: 'swiper',
  swiperWithNumbers: 'swiper--withNumbers',
  albumImage: 'album-image',
  albumImageWithNumbers: 'album-image--withNumbers',
  albumCounter: 'album-counter',
  albumCounterText: 'album-counterText',
}

export default function Album({ type = 'default', images }: AlbumProps) {
  const [realIndex, setRealIndex] = useState<undefined | number>(undefined)
  return (
    <Swiper
      modules={type === 'default' ? [Pagination] : [Autoplay]}
      breakpoints={
        type === 'default'
          ? {
              320: { slidesPerView: 1, spaceBetween: 18 },
              850: { slidesPerView: 2, spaceBetween: 20 },
            }
          : {
              320: { slidesPerView: 1, spaceBetween: 18 },
              850: { slidesPerView: 1, spaceBetween: 20 },
            }
      }
      pagination={{ clickable: true }}
      tag="div"
      wrapperTag="ul"
      onInit={(swiper) => setRealIndex(swiper.realIndex)}
      onSlideChange={(swiper) => setRealIndex(swiper.realIndex)}
      autoplay={type === 'withNumbers'}
      loop={type === 'withNumbers'}
      className={classNames(
        CSS_BASE_CLASS.swiper,
        { [CSS_BASE_CLASS.swiperWithNumbers]: type === 'withNumbers' },
        CSS_BASE_CLASS.self
      )}
    >
      {images.map((item) => (
        <SwiperSlide tag="li" key={item.url}>
          <Image
            className={classNames(CSS_BASE_CLASS.albumImage, {
              [CSS_BASE_CLASS.albumImageWithNumbers]: type === 'withNumbers',
            })}
            src={item.url}
            width={300}
            height={300}
            alt={item.alt}
          />
        </SwiperSlide>
      ))}

      {type === 'withNumbers' && realIndex !== undefined && (
        <div className={CSS_BASE_CLASS.albumCounter}>
          <span className={CSS_BASE_CLASS.albumCounterText}>
            {realIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </Swiper>
  )
}
