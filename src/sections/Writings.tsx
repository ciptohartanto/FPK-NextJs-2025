import ArticleItem from '@/components/ArticleItem'
import SearchBox from '@/components/SearchBox'

export default function Writings() {
  return (
    <section className="writings">
      <h2 className="writings-title">Writings</h2>
      <div className="writings-row">
        <div className="writings-searchBoxWrapper">
          <SearchBox />
        </div>
        <ul className="writings-listWrapper">
          <li className="writings-listItem">
            <ArticleItem />
          </li>
          <li className="writings-listItem">
            <ArticleItem />
          </li>
          <li className="writings-listItem">
            <ArticleItem />
          </li>
        </ul>
      </div>
    </section>
  )
}
