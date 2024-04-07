import classNames from 'classnames'

import Tag from '@/elements/Tag'

export enum ExPerienceItemTypes {
  PREVIOUS = 'previous',
  CURRENT = 'current',
}

interface ExperienceItemData {
  title: string
  date: string
  tags: string[]
  content: string
  links: string[]
}

interface ExperienceItemProps {
  type: ExPerienceItemTypes
  isLastItem: boolean
  data: ExperienceItemData
}

export default function ExperienceItem({
  type,
  isLastItem,
  data,
}: ExperienceItemProps) {
  const { title, date, tags, content, links } = data
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
        <span className="experienceItem-date">{date}</span>
        <ul className="experienceItem-tagList">
          {tags.map((i) => (
            <li className="experienceItem-tag" key={i}>
              <Tag text={i} />
            </li>
          ))}
        </ul>
        <p className="experienceItem-content">{content}</p>
        <div className="experienceItem-linksWrapper">
          <span className="experienceItem-link">{links}</span>
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
