import classNames from 'classnames'

import TableOfContentText from '@/elements/TableOfContentText'
import Tag from '@/elements/Tag'
import { Writing } from '@/gql/graphql'

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
        <span>{publishTime}</span>
        <ul className="articleBody-wrapperTags">
          {tags.split(',').map((text) => (
            <li key={text} className="articleBody-tag">
              <Tag text={text} />
            </li>
          ))}
        </ul>
      </div>

      <div className="articleBody-wrapperBottom">
        <ol className="articleBody-tableOfContent">
          <li className="articleBody-tableOfContentItem">
            <TableOfContentText text="Heading 1" isActive />
            <TableOfContentText text="Heading 2" isActive={false} />
            <TableOfContentText text="Heading 3" isActive={false} />
            <TableOfContentText text="Heading 4" isActive={false} />
          </li>
        </ol>

        <div
          className={classNames(
            'articleBody-wrapperSection',
            'articleBody-section'
          )}
        >
          {articleContent}
        </div>
      </div>
    </div>
  )
}
