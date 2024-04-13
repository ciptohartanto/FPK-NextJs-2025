import { motion } from 'framer-motion'

import Tag from '@/elements/Tag'

interface ArticleItemProps {
  title: string
  date: string
  tags: string
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
        {tags.split(',').map((text) => (
          <li key={text} className="articleItem-tagItem">
            <Tag text={text} />
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
