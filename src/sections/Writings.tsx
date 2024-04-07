import { useCallback, useMemo, useState } from 'react'

import ArticleItem from '@/components/ArticleItem'
import SearchBox from '@/components/SearchBox'

const DATA = [
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
  const [currentArticleTotal, setCurrentArticleTotal] = useState(3)

  const totalArticles = useMemo(() => DATA.length, [])

  const handleClickLoadMore = useCallback(() => {
    const nextTotalArticle = currentArticleTotal + LOAD_MORE_MULTIPLIER
    if (nextTotalArticle >= totalArticles) {
      setCurrentArticleTotal(totalArticles)
    } else {
      setCurrentArticleTotal(nextTotalArticle)
    }
  }, [currentArticleTotal, totalArticles])

  return (
    <section className="writings">
      <h2 className="writings-title">Writings</h2>
      <div className="writings-row">
        <div className="writings-searchBoxWrapper">
          <SearchBox />
        </div>
        <ul className="writings-listWrapper">
          {DATA.slice(0, currentArticleTotal).map((item) => (
            <li key={item.title} className="writings-listItem">
              <ArticleItem
                title={item.title}
                date={item.date}
                tags={item.tags}
              />
            </li>
          ))}
          {currentArticleTotal !== totalArticles && (
            <span className="writings-loadMore" onClick={handleClickLoadMore}>
              Load More
            </span>
          )}
        </ul>
      </div>
      <div className="writings-counter">
        <span className="writings-counterText">
          {currentArticleTotal}/{totalArticles}
        </span>
      </div>
    </section>
  )
}
