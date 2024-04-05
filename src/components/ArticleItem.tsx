import Tag from '@/elements/Tag'

export default function ArticleItem() {
  return (
    <div className="articleItem">
      <h3 className="articleItem-title">title</h3>
      <span className="articleItem-date">Jan 01, 2024</span>
      <ul className="articleItem-tagList">
        <li className="articleItem-tagItem">
          <Tag text="Tag 1" />
        </li>
      </ul>
    </div>
  )
}
