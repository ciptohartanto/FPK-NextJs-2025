// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import classNames from 'classnames'
import Image from 'next/image'
import { useState } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ItemAlbum } from '@/gql/graphql'

type AlbumProps = {
  type: 'default' | 'withNumbers'
  imagesOnAlbum: ItemAlbum[]
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

export default function Album({ type = 'default', imagesOnAlbum }: AlbumProps) {
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
      {imagesOnAlbum.map((item) => (
        <SwiperSlide tag="li" key={item.id}>
          <Image
            className={classNames(CSS_BASE_CLASS.albumImage, {
              [CSS_BASE_CLASS.albumImageWithNumbers]: type === 'withNumbers',
            })}
            src={item.fileGambar.url}
            width={300}
            height={300}
            alt={item.judul}
          />
        </SwiperSlide>
      ))}

      {type === 'withNumbers' && realIndex !== undefined && (
        <div className={CSS_BASE_CLASS.albumCounter}>
          <span className={CSS_BASE_CLASS.albumCounterText}>
            {realIndex + 1} / {imagesOnAlbum.length}
          </span>
        </div>
      )}
    </Swiper>
  )
}
