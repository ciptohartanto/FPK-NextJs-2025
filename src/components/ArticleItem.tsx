import { motion } from 'framer-motion'

import Tag from '@/elements/Tag'

interface ArticleItemProps {
  title: string
  date: string
  tags: { text: string }[]
}

export default function ArticleItem({ title, date, tags }: ArticleItemProps) {
  return (
    <motion.div className="articleItem" whileHover={{ x: 10, opacity: 1 }}>
      <h3 className="articleItem-title">
        <span className="articleItem-titleText">{title}</span>
        <div className="articleItem-iconArrow" />
      </h3>
      <span className="articleItem-date">{date}</span>
      <ul className="articleItem-tagList">
        {tags.map((item) => (
          <li key={item.text} className="articleItem-tagItem">
            <Tag text={item.text} />
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

ArticleItem.defaultProps = {
  title: 'missing data',
  date: 'missing data',
  tags: [{ text: 'missing data' }],
}
