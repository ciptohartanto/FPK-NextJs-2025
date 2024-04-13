import { motion } from 'framer-motion'
import { useCallback, useEffect, useMemo, useState } from 'react'

import AnchorLink from '@/components/AnchorLink'
import ArticleItem from '@/components/ArticleItem'
import SearchBox from '@/components/SearchBox'
import { FRAMER } from '@/constants'
import { LOAD_MORE_MULTIPLIER } from '@/constants/project'
import { SectionWriting, Writing } from '@/gql/graphql'

type ArticleListProps = Pick<
  Writing,
  'title' | 'publishTime' | 'tags' | 'slug'
>[]

type SectionWritingsProps = {
  componentData: Pick<SectionWriting, 'title'>
  articleList: ArticleListProps
}

export default function Writings({
  componentData,
  articleList,
}: SectionWritingsProps) {
  const [currentArticleTotal, setCurrentArticleTotal] =
    useState(LOAD_MORE_MULTIPLIER)
  const [searchValue, setSearchValue] = useState<undefined | string>(undefined)
  const [articleData, setArticleData] = useState<[] | ArticleListProps>([])

  const { title } = componentData

  // 1. set articleData on first render
  useEffect(() => {
    const viewableData = articleList.slice(0, currentArticleTotal)
    setArticleData(viewableData)
  }, [articleList, currentArticleTotal])

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
    const totalArticles = articleList.length
    if (nextTotalArticle >= totalArticles) {
      setCurrentArticleTotal(articleList.length)
    } else {
      setCurrentArticleTotal(nextTotalArticle)
    }
  }, [currentArticleTotal, articleList])

  const computedSearchData = useMemo(() => {
    let setup = { shouldDisplayLoadMore: false, counterText: '' }
    if (!searchValue) {
      setup.shouldDisplayLoadMore = updatedData.length !== articleList.length
      setup.counterText = `${updatedData.length}/${articleList.length}`
    } else {
      setup.shouldDisplayLoadMore = articleList.length !== currentArticleTotal
      setup.counterText = `${updatedData.length} / ${updatedData.length}`
    }
    return setup
  }, [searchValue, updatedData, currentArticleTotal, articleList])

  return (
    <section className="writings" id="writings">
      <motion.h2
        className="writings-title"
        {...FRAMER.FRAMER_SUB_SECTION_ANIMATION}
      >
        {title}
      </motion.h2>
      <div className="writings-row">
        <motion.div
          className="writings-searchBoxWrapper"
          {...FRAMER.FRAMER_SUB_SECTION_ANIMATION}
        >
          <SearchBox handleUpdate={(e) => setSearchValue(e)} />
        </motion.div>
        <div className="writings-listWrapper">
          <ul className="writings-list">
            {updatedData.map((item) => (
              <motion.li
                key={item.title}
                className="writings-listItem"
                {...FRAMER.FRAMER_SUB_SECTION_ANIMATION}
                initial={{ x: 40, opacity: 0 }}
              >
                <AnchorLink href={`/writings/${item.slug}`}>
                  <ArticleItem
                    title={item.title}
                    date={item.publishTime}
                    tags={item.tags}
                  />
                </AnchorLink>
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
