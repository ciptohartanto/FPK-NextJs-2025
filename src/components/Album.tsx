// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Album() {
  return (
    <Swiper
      modules={[Pagination]}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 0 },
        850: { slidesPerView: 2, spaceBetween: 20 },
      }}
      slidesPerView={1}
      pagination={{ clickable: true }}
      tag="ul"
    >
      <SwiperSlide tag="li">
        <Image
          className="album-image"
          src="/dummy-wallpaper.jpg"
          width={300}
          height={300}
          alt="dummy"
        />
      </SwiperSlide>
      <SwiperSlide tag="li">
        <Image
          className="album-image"
          src="/dummy-wallpaper.jpg"
          width={300}
          height={300}
          alt="dummy"
        />
      </SwiperSlide>
      <SwiperSlide tag="li">
        <Image
          className="album-image"
          src="/dummy-wallpaper.jpg"
          width={300}
          height={300}
          alt="dummy"
        />
      </SwiperSlide>
    </Swiper>
  )
}
