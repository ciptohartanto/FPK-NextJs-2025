// Import Swiper styles
import 'swiper/css'

import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { FRAMER } from '@/constants'
import Tag from '@/elements/Tag'

const DATA = [
  {
    title: 'Finschia Network (v2)',
    date: 'Released on Jan 01, 2024',
    backgroundUrl:
      'https://cdn.dribbble.com/userupload/2773310/file/original-8805cbb2d31a4ffd237af14003091ad3.jpg',
    tags: [
      { text: 'Next.js' },
      { text: 'Framer Motion (React)' },
      { text: 'CMS' },
    ],
  },
  {
    title: 'LINE SPOT',
    date: '2020 - 2022',
    backgroundUrl:
      'https://cdn.dribbble.com/userupload/11909609/file/original-9a8a27073f1e775e9f948a5348b98ade.png',
    tags: [
      { text: 'Next.js' },
      { text: 'TypeScript' },
      { text: 'GraphQL' },
      { text: 'StyledComponent' },
    ],
  },
  {
    title: 'LINE Fact Checker',
    date: 'mid 2019 - late 2019',
    backgroundUrl:
      'https://cdn.dribbble.com/users/6627804/screenshots/17128773/media/8519df95636a1e5f6bcf157ba2fe544c.png',
    tags: [{ text: 'Vue.js (v2)' }, { text: 'Pug' }, { text: 'SCSS' }],
  },
  {
    title: 'LINE TODAY',
    date: '2017 - 2019',
    backgroundUrl:
      'https://cdn.dribbble.com/userupload/12097710/file/original-0002e31a1d04d0a9574ae7c517b9b821.png',
    tags: [{ text: 'HTML' }, { text: 'SCSS' }],
  },
]
interface ProjectsProps {
  handleClick: (val: boolean) => void
}

export default function Projects({ handleClick }: ProjectsProps) {
  const [currentSlideId, setCurrentSlideId] = useState(0)
  const totalSlides = DATA.length
  return (
    <section className="projects" id="projects">
      <div className="projects-wrapper">
        <motion.h3
          className="projects-title"
          {...FRAMER.FRAMER_SUB_SECTION_ANIMATION}
        >
          Projects
        </motion.h3>
        <motion.div
          className="projects-swiperWrapper"
          {...FRAMER.FRAMER_SUB_SECTION_ANIMATION}
          viewport={{ margin: '-300px 0px 0px 0px' }}
        >
          <Swiper
            wrapperTag="ul"
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{ 850: { slidesPerView: 1.7, spaceBetween: 32 } }}
            className="projects-swiperModule"
            autoplay
            loop
            modules={[Autoplay]}
            onSlideChange={(swiper) => {
              setCurrentSlideId(swiper.realIndex + 1)
            }}
          >
            {DATA.map((item) => (
              <SwiperSlide
                key={item.title}
                tag="li"
                className="projects-swiperSlide"
              >
                {({ isActive }) => (
                  <div
                    className={classNames('projects-swiperContentWrapper', {
                      'projects-swiperContentWrapper--active': isActive,
                    })}
                    onClick={() => {
                      if (isActive) handleClick(true)
                    }}
                  >
                    <div
                      className="projects-swiperThumbnail"
                      style={{ backgroundImage: `url(${item.backgroundUrl})` }}
                    />
                    <div className="projects-swiperTextWrapper">
                      <h3 className="projects-swiperTitle">{item.title}</h3>
                      <span className="projects-swiperDate">{item.date}</span>
                      <ul className="projects-swiperTags">
                        {item.tags.map((tag) => (
                          <li className="projects-swiperTag" key={tag.text}>
                            <Tag text={tag.text} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          className="projects-counter"
          {...FRAMER.FRAMER_SUB_SECTION_ANIMATION}
          initial={{ x: 40, opacity: 0 }}
        >
          <span className="projects-counterText">
            {currentSlideId}/{totalSlides}
          </span>
        </motion.div>
      </div>
    </section>
  )
}

Projects.defaultProps = {
  handleClick: () => false,
}
