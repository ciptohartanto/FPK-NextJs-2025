import classNames from 'classnames'
import Markdown from 'react-markdown'

import CodeSnippet from '@/components/CodeSnippet'
import TableOfContent from '@/components/TableOfContent'
import { HEADING3_CSS } from '@/constants/project'
import Tag from '@/elements/Tag'
import { Writing } from '@/gql/graphql'
import formatDate from '@/utils/formatDate'

export default function ArticleBody({
  componentData,
}: {
  componentData: Writing
}) {
  const { title, tags, publishTime, articleContent } = componentData
  return (
    <div className="articleBody">
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
        <div className="articleBody-toc">
          <TableOfContent />
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
  )
}
