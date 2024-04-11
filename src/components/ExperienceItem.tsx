import classNames from 'classnames'

import Tag from '@/elements/Tag'
import { ExperienceItem as CmsExperienceItem } from '@/gql/graphql'

export enum ExPerienceItemTypes {
  PREVIOUS = 'previous',
  CURRENT = 'current',
}

type ExperienceItemProps = {
  type: ExPerienceItemTypes
  isLastItem: boolean
  data: CmsExperienceItem
}

export default function ExperienceItem({
  type,
  isLastItem,
  data,
}: ExperienceItemProps) {
  const { title, date, tags, content, links, location } = data
  return (
    <div
      className={classNames(
        'experienceItem',
        {
          'experienceItem--previous': type === ExPerienceItemTypes.PREVIOUS,
        },
        { 'experienceItem--lastItem': isLastItem }
      )}
    >
      <div className="experienceItem-wrapperLeft">
        <span className="experienceItem-bullet" />
      </div>
      <div className="experienceItem-wrapperRight">
        <h3 className="experienceItem-title">{title}</h3>
        <span className="experienceItem-date">
          {location} | {date}
        </span>
        <ul className="experienceItem-tagList">
          {tags.split(',').map((text) => (
            <li className="experienceItem-tag" key={text}>
              <Tag text={text} />
            </li>
          ))}
        </ul>
        <div
          className="experienceItem-content"
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
        <div className="experienceItem-linksWrapper">
          {links && <div dangerouslySetInnerHTML={{ __html: links.html }} />}
        </div>
      </div>
    </div>
  )
}

ExperienceItem.defaultProps = {
  type: ExPerienceItemTypes,
  isLastItem: false,
  data: {
    title: 'missing data',
    date: 'missing data',
    tags: [{ text: 'missing data' }],
    content: 'missing data',
    links: [{ text: 'missing data' }],
  },
}
