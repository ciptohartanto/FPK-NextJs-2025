import { motion } from 'framer-motion'
import { useCallback, useEffect, useMemo, useState } from 'react'

import ArticleItem from '@/components/ArticleItem'
import SearchBox from '@/components/SearchBox'
import { FRAMER } from '@/constants'

interface WritingDataType {
  title: string
  date: string
  tags: { text: string }[]
  url: string
}

const DATA: WritingDataType[] = [
  {
    title: 'i18n with Next.js on A Static Web Server',
    date: 'Jan 01, 2024',
    tags: [{ text: 'Next.js' }, { text: 'i18n' }],
    url: '/test',
  },
  {
    title: 'Hamburger Nav Menu with Framer Motion',
    date: 'Dec 12, 2023',
    tags: [{ text: 'React' }, { text: 'Framer Motion' }],
    url: '/test',
  },
  {
    title: 'Sweet Carousel effect with Swiper.js and Framer Motion',
    date: 'Nov 28, 2023',
    tags: [{ text: 'React' }, { text: 'Framer Motion' }, { text: 'Swiper.js' }],
    url: '/test',
  },
  {
    title: 'Vertical Snap Scroll Content with Swiper.js',
    date: 'Jul 03, 2023',
    tags: [{ text: 'React' }, { text: 'Swiper.js' }],
    url: '/test',
  },
  {
    title: 'Scroll to Play Video Background With Request Animation Frames',
    date: 'Feb 18, 2023',
    tags: [{ text: 'JavaScript' }],
    url: '/test',
  },
  {
    title: 'Simple Hamburger Menu animation with Framer Motion',
    date: 'Jan 31, 2023',
    tags: [{ text: 'React' }, { text: 'Framer Motion' }],
    url: '/test',
  },

  {
    title: 'Loading with React and Framer Motion',
    date: 'Jan 05, 2023',
    tags: [{ text: 'React' }, { text: 'Framer Motion' }],
    url: '/test',
  },
]

const LOAD_MORE_MULTIPLIER = 3

export default function Writings() {
  const [currentArticleTotal, setCurrentArticleTotal] =
    useState(LOAD_MORE_MULTIPLIER)
  const [searchValue, setSearchValue] = useState<undefined | string>(undefined)
  const [articleData, setArticleData] = useState<[] | WritingDataType[]>([]) // todo: proper type!

  // 1. set articleData on first render
  useEffect(() => {
    const viewableData = DATA.slice(0, currentArticleTotal)
    setArticleData(viewableData)
  }, [currentArticleTotal])

  // 2. when there's update from search bar, update searchable
  const updatedData = useMemo(() => {
    let newArticleData

    // when search value is empty -> keep the original viewable data
    if (!searchValue) newArticleData = articleData
    // otherwise filter the articleData
    else {
      newArticleData = articleData.filter((item) =>
        item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    }

    return newArticleData
  }, [searchValue, articleData])

  const handleClickLoadMore = useCallback(() => {
    const nextTotalArticle = currentArticleTotal + LOAD_MORE_MULTIPLIER
    const totalArticles = DATA.length
    if (nextTotalArticle >= totalArticles) {
      setCurrentArticleTotal(DATA.length)
    } else {
      setCurrentArticleTotal(nextTotalArticle)
    }
  }, [currentArticleTotal])

  const computedSearchData = useMemo(() => {
    let setup = { shouldDisplayLoadMore: false, counterText: '' }
    if (!searchValue) {
      setup.shouldDisplayLoadMore = updatedData.length !== DATA.length
      setup.counterText = `${updatedData.length}/${DATA.length}`
    } else {
      setup.shouldDisplayLoadMore = DATA.length !== currentArticleTotal
      setup.counterText = `${updatedData.length} / ${updatedData.length}`
    }
    return setup
  }, [searchValue, updatedData, currentArticleTotal])

  return (
    <section className="writings">
      <motion.h2
        className="writings-title"
        {...FRAMER.FRAMER_SUB_SECTION_ANIMATION}
      >
        Writings
      </motion.h2>
      <div className="writings-row">
        <motion.div
          className="writings-searchBoxWrapper"
          {...FRAMER.FRAMER_SUB_SECTION_ANIMATION}
        >
          <SearchBox handleUpdate={(e) => setSearchValue(e)} />
        </motion.div>
        <ul className="writings-listWrapper">
          {updatedData.map((item) => (
            <motion.li
              key={item.title}
              className="writings-listItem"
              {...FRAMER.FRAMER_SUB_SECTION_ANIMATION}
              initial={{ x: 40, opacity: 0 }}
            >
              <ArticleItem
                title={item.title}
                date={item.date}
                tags={item.tags}
              />
            </motion.li>
          ))}

          {computedSearchData.shouldDisplayLoadMore && (
            <motion.span
              className="writings-loadMore"
              onClick={handleClickLoadMore}
              {...FRAMER.FRAMER_SUB_SECTION_ANIMATION}
              initial={{ x: 40, opacity: 0 }}
            >
              Load More
            </motion.span>
          )}
        </ul>
      </div>
      <motion.div
        className="writings-counter"
        {...FRAMER.FRAMER_SUB_SECTION_ANIMATION}
        initial={{ x: 40, opacity: 0 }}
      >
        <span className="writings-counterText">
          {computedSearchData.counterText}
        </span>
      </motion.div>
    </section>
  )
}
