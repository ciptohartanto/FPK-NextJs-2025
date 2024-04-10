import ExperienceItem, {
  ExPerienceItemTypes,
} from '@/components/ExperienceItem'
import SubSection from '@/components/SubSection'
import Trademark from '@/elements/Trademark'

const DATA_EXPERIENCE_ITEMS = [
  {
    data: {
      id: 0,
      title: 'LINE Corp. (LY Corp.)',
      date: 'November 2017 - now',
      tags: [{ text: 'Next.js' }, { text: 'Next.js' }, { text: 'Next.js' }],
      links: ['stuff', 'stuff'],
      content:
        'Cipto has been in the web design and development industry for 7+ years. Starting off as graphic designer in 2014, he visualized design with Illustrator and Photoshop at work. Sometimes, he took professional photos as one of his duties.',
    },
  },
  {
    data: {
      id: 1,
      title: 'Cooler Master',
      date: 'April 2017 - November 2017',
      tags: [{ text: 'Pug' }, { text: 'Sass' }],
      links: ['stuff', 'stuff'],
      content:
        'Cipto has been in the web design and development industry for 7+ years. Starting off as graphic designer in 2014, he visualized design with Illustrator and Photoshop at work. Sometimes, he took professional photos as one of his duties.',
    },
  },
  {
    data: {
      id: 2,
      title: 'TechDesign (Winbond Electronics)',
      date: 'April 2017 - November 2017',
      tags: [{ text: 'Pug' }, { text: 'Sass' }, { text: 'Adobe XD' }],
      links: ['stuff', 'stuff'],
      content:
        'Cipto has been in the web design and development industry for 7+ years. Starting off as graphic designer in 2014, he visualized design with Illustrator and Photoshop at work. Sometimes, he took professional photos as one of his duties.',
    },
  },
  {
    data: {
      id: 3,
      title: 'Everfriend',
      date: 'April 2017 - November 2017',
      tags: [
        { text: 'HTML' },
        { text: 'CSS' },
        { text: 'Adobe Muse' },
        { text: 'Adobe Photoshop' },
        { text: 'Adobe Illustrator' },
      ],
      links: ['stuff', 'stuff'],
      content:
        'Cipto has been in the web design and development industry for 7+ years. Starting off as graphic designer in 2014, he visualized design with Illustrator and Photoshop at work. Sometimes, he took professional photos as one of his duties.',
    },
  },
]

export default function ResumeBody() {
  return (
    <div className="resumeBody">
      <div className="resumeBody-wrapperTop">
        <Trademark />
        <div className="resumeBody-iconPdf">
          <span className="resumeBody-iconPdfText">PDF</span>
        </div>
      </div>
      <section className="resumeBody-wrapperSection">
        <SubSection title="About" cssClassName="resumeBody-subsection">
          <p className="resumeBody-paragraph">
            Cipto has been in the web design and development industry for 7+
            years. Starting off as graphic designer in 2014, he visualized
            design with Illustrator and Photoshop at work. Sometimes, he took
            professional photos as one of his duties.
          </p>
          <p className="resumeBody-paragraph">
            In 2016, he was able to teach himself HTML (Pug), CSS (Sass), and
            jQuery. During this year he was able to complete 20 web development
            requests from international clients coming from Fiverr within 4
            months.
          </p>
        </SubSection>
        <SubSection title="Experiences" cssClassName="resumeBody-subsection">
          {DATA_EXPERIENCE_ITEMS.map((item, idx) => (
            <ExperienceItem
              key={item.data.id}
              isLastItem={DATA_EXPERIENCE_ITEMS.length === idx + 1}
              type={
                idx === 0
                  ? ExPerienceItemTypes.CURRENT
                  : ExPerienceItemTypes.PREVIOUS
              }
              data={item.data}
            />
          ))}
        </SubSection>

        <SubSection title="Awards" cssClassName="resumeBody-subsection">
          <ul>
            <li>- LINE AWARDS 2018</li>
            <li>- LINE AWARDS 2023</li>
          </ul>
        </SubSection>
      </section>
    </div>
  )
}
