import { motion } from 'framer-motion'

import Tag from '@/elements/Tag'
import { Writing } from '@/gql/graphql'

interface ArticleItemProps {
  componentData: Pick<Writing, 'title' | 'publishTime' | 'tags'>
}

export default function ArticleItem({ componentData }: ArticleItemProps) {
  const { title, tags, publishTime } = componentData
  return (
    <motion.div className="articleItem" whileHover={{ x: 10, opacity: 1 }}>
      <h3 className="articleItem-title">
        <span className="articleItem-titleText">{title}</span>
        <div className="articleItem-iconArrow" />
      </h3>
      <span className="articleItem-date">{publishTime}</span>
      <ul className="articleItem-tagList">
        {tags.split(',').map((text) => (
          <li key={text} className="articleItem-tagItem">
            <Tag text={text} />
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
