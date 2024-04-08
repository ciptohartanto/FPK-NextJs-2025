import Link from 'next/link'

import IconX, { IconXTypes } from '@/elements/IconX'
import Tag from '@/elements/Tag'

import SubSection from './SubSection'

export default function Popup() {
  return (
    <div className="popup">
      <div className="popup-wrapper">
        <div className="popup-iconClose">
          <IconX type={IconXTypes.SMALL} />
        </div>
        <div className="popup-body">
          <div
            className="popup-background"
            style={{
              backgroundImage:
                'url("https://asset.kompas.com/crops/m8q0O4LsGzHI6gYgczcVqWpJ7cw=/199x44:1583x966/750x500/data/photo/2022/06/02/629850dd5e5ad.png")',
            }}
          />
          <div className="popup-content">
            <h3 className="popup-title">UI Project</h3>
            <ul className="popup-wrapperTags">
              <li className="popup-tag">
                <Tag text="Tag 1" />
              </li>
              <div className="popup-wrapperDescription">
                <span className="popup-description">
                  Late 2017 - Early 2019
                </span>
                <Link href="https://example.com" className="popup-externalLink">
                  https://today.line.me
                </Link>
              </div>
              <div className="popup-section">
                <SubSection title="Role">
                  <p className="popup-paragraph">
                    Markup Engineer, Fixing issues
                  </p>
                </SubSection>
              </div>
              <div className="popup-section">
                <SubSection title="Role">
                  <p className="popup-paragraph">
                    Markup Engineer, Fixing issues
                    <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sit nesciunt error ad illo, iusto pariatur maxime.
                    Voluptates quo quas provident obcaecati perferendis, velit
                    praesentium, consequuntur excepturi expedita harum quos
                    officia?
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nobis quis dolor architecto magni commodi, delectus
                    consequatur nemo minima nisi blanditiis pariatur dolorem ad
                    fuga voluptatem eveniet quidem illo, at ea?
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nobis quis dolor architecto magni commodi, delectus
                    consequatur nemo minima nisi blanditiis pariatur dolorem ad
                    fuga voluptatem eveniet quidem illo, at ea?
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nobis quis dolor architecto magni commodi, delectus
                    consequatur nemo minima nisi blanditiis pariatur dolorem ad
                    fuga voluptatem eveniet quidem illo, at ea?
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nobis quis dolor architecto magni commodi, delectus
                    consequatur nemo minima nisi blanditiis pariatur dolorem ad
                    fuga voluptatem eveniet quidem illo, at ea?
                  </p>
                </SubSection>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
