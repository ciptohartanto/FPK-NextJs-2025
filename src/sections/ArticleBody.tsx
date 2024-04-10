import classNames from 'classnames'

import TableOfContentText from '@/elements/TableOfContentText'
import Tag from '@/elements/Tag'

export default function ArticleBody() {
  return (
    <div className="articleBody">
      <div className="articleBody-wrapperTop">
        <h2 className="articleBody-title">Title</h2>
        <ul className="articleBody-wrapperTags">
          <li className="articleBody-tag">
            <Tag text="Tag1" />
          </li>
          <li className="articleBody-tag">
            <Tag text="Tag2" />
          </li>
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

        <section
          className={classNames(
            'articleBody-wrapperSection',
            'articleBody-section'
          )}
        >
          <h3>What are Heading Anchors</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            sed quo voluptatum omnis perferendis optio eaque praesentium
            possimus nostrum doloremque facere, consequatur vero illum incidunt
            illo blanditiis! Iste, voluptates cupiditate.
          </p>

          <h3>What are Heading Anchors</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            sed quo voluptatum omnis perferendis optio eaque praesentium
            possimus nostrum doloremque facere, consequatur vero illum incidunt
            illo blanditiis! Iste, voluptates cupiditate.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            sed quo voluptatum omnis perferendis optio eaque praesentium
            possimus nostrum doloremque facere, consequatur vero illum incidunt
            illo blanditiis! Iste, voluptates cupiditate.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            sed quo voluptatum omnis perferendis optio eaque praesentium
            possimus nostrum doloremque facere, consequatur vero illum incidunt
            illo blanditiis! Iste, voluptates cupiditate.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            sed quo voluptatum omnis perferendis optio eaque praesentium
            possimus nostrum doloremque facere, consequatur vero illum incidunt
            illo blanditiis! Iste, voluptates cupiditate.
          </p>

          <h3>What are Heading Anchors</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            sed quo voluptatum omnis perferendis optio eaque praesentium
            possimus nostrum doloremque facere, consequatur vero illum incidunt
            illo blanditiis! Iste, voluptates cupiditate.
          </p>
        </section>
      </div>
    </div>
  )
}
