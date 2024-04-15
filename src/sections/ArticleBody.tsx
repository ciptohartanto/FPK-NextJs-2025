import classNames from 'classnames'
import Markdown from 'react-markdown'

import AnchorLink from '@/components/AnchorLink'
import CodeSnippet from '@/components/CodeSnippet'
import TableOfContent from '@/components/TableOfContent'
import { HEADING3_CSS } from '@/constants/project'
import Tag from '@/elements/Tag'
import { Writing } from '@/gql/graphql'
import formatDate from '@/utils/formatDate'

type ArticleNavObjectProps = {
  slug: string
  title: string
}

export type ArticleNavProps = {
  prevArticle: ArticleNavObjectProps | null
  nextArticle: ArticleNavObjectProps | null
}

export default function ArticleBody({
  componentData,
  articleNav,
}: {
  componentData: Writing
  articleNav: ArticleNavProps
}) {
  const { title, tags, publishTime, articleContent } = componentData
  const { prevArticle, nextArticle } = articleNav

  return (
    <div className="articleBody">
      <div className="articleBody-wrapper">
        <div className="articleBody-wrapperTop">
          <h2 className="articleBody-title">{title}</h2>
          <span>Published on {formatDate(publishTime)}</span>
          <ul className="articleBody-wrapperTags">
            {tags.split(',').map((text) => (
              <li key={text} className="articleBody-tag">
                <Tag text={text} />
              </li>
            ))}
          </ul>
        </div>

        <div className="articleBody-wrapperBottom">
          <div className="articleBody-wrapperBottomLeft">
            <TableOfContent />
            <ul className="articleBody-nav">
              <li className="articleBody-navItem  articleBody-navItem--main">
                <AnchorLink href="../#writings">
                  <span className="articleBody-navLink">Writings</span>
                </AnchorLink>
              </li>
              {prevArticle && (
                <li className="articleBody-navItem articleBody-navItem--prev">
                  <AnchorLink href={prevArticle?.slug}>
                    <span className="articleBody-navLink">
                      {prevArticle?.title}
                    </span>
                  </AnchorLink>
                </li>
              )}
              {nextArticle && (
                <li className="articleBody-navItem articleBody-navItem--next">
                  <AnchorLink href={nextArticle.slug}>
                    <span className="articleBody-navLink">
                      {nextArticle.title}
                    </span>
                  </AnchorLink>
                </li>
              )}
            </ul>
          </div>
          <div
            className={classNames(
              'articleBody-wrapperSection',
              'articleBody-section'
            )}
          >
            <Markdown
              components={{
                h3(props) {
                  const { children } = props
                  return <h3 className={HEADING3_CSS}>{children}</h3>
                },
                code(props) {
                  const { children, className, ...rest } = props
                  const lang = className?.split('language-')[1]
                  return (
                    <CodeSnippet
                      content={String(children)}
                      lang={lang}
                      {...rest}
                    />
                  )
                },
              }}
            >
              {articleContent}
            </Markdown>
          </div>
        </div>
      </div>
    </div>
  )
}
