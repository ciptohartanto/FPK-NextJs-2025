import SubSection from '@/components/SubSection'

export default function AboutTheWebsite() {
  return (
    <section className="aboutTheWebsite">
      <h2 className="aboutTheWebsite-title">About This Website</h2>
      <div className="aboutTheWebsite-listWrapper">
        <ul className="aboutTheWebsite-itemsWrapper">
          <li className="aboutTheWebsite-item">
            <SubSection title="FrontEnd">
              <h3 className="aboutTheWebsite-subsectionText">
                Next.js, Framer Motion, GraphQL
              </h3>
            </SubSection>
          </li>
          <li className="aboutTheWebsite-item">
            <SubSection title="Backend">
              <h3 className="aboutTheWebsite-subsectionText">GraphCMS</h3>
            </SubSection>
          </li>
          <li className="aboutTheWebsite-item">
            <SubSection title="Deployment">
              <h3 className="aboutTheWebsite-subsectionText">Netlify</h3>
            </SubSection>
          </li>
        </ul>
        <ul className="aboutTheWebsite-itemsWrapper">
          <li className="aboutTheWebsite-item">
            <SubSection title="User Interface">
              <h3 className="aboutTheWebsite-subsectionText">
                Figma Google Naturalist font
              </h3>
            </SubSection>
          </li>
          <li className="aboutTheWebsite-item">
            <SubSection title="Image Assets">
              <h3 className="aboutTheWebsite-subsectionText">Next.js</h3>
            </SubSection>
          </li>
          <li className="aboutTheWebsite-item">
            <SubSection title="Source Code">
              <h3 className="aboutTheWebsite-subsectionText">
                Next.js, Framer Motion
              </h3>
            </SubSection>
          </li>
        </ul>
        <ul className="aboutTheWebsite-itemsWrapper">
          <li className="aboutTheWebsite-item">
            <SubSection title="Source Code">
              <h3 className="aboutTheWebsite-subsectionText">Github, Figma</h3>
            </SubSection>
          </li>
        </ul>
      </div>
    </section>
  )
}
