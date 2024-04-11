import ExperienceItem, {
  ExPerienceItemTypes,
} from '@/components/ExperienceItem'
import SubSection from '@/components/SubSection'
import Trademark from '@/elements/Trademark'
import { EntityTypeName, SectionResume } from '@/gql/graphql'

type ResumeBodyProps = {
  content: SectionResume
}

export default function ResumeBody({ content }: ResumeBodyProps) {
  const resumeData = content.content

  return (
    <div className="resumeBody">
      <div className="resumeBody-wrapperTop">
        <Trademark />
        <div className="resumeBody-iconPdf">
          <span className="resumeBody-iconPdfText">PDF</span>
        </div>
      </div>
      <section className="resumeBody-wrapperSection">
        {resumeData.map((subsection) => {
          if (subsection.__typename === EntityTypeName.SubSection) {
            return (
              <SubSection
                key={subsection.title}
                title={subsection.title}
                cssClassName="resumeBody-subsection"
              >
                <div
                  className="resumeBody-paragraph"
                  dangerouslySetInnerHTML={{ __html: subsection.content.html }}
                />
              </SubSection>
            )
          } else {
            if ('experienceItem' in subsection) {
              return (
                <SubSection
                  key={subsection.title}
                  title={subsection.title}
                  cssClassName="resumeBody-subsection"
                >
                  {subsection.experienceItem.map((experienceItemData, idx) => (
                    <ExperienceItem
                      key={idx}
                      isLastItem={subsection.experienceItem.length === idx + 1}
                      type={
                        idx === 0
                          ? ExPerienceItemTypes.CURRENT
                          : ExPerienceItemTypes.PREVIOUS
                      }
                      data={experienceItemData}
                    />
                  ))}
                </SubSection>
              )
            }
          }
        })}
      </section>
    </div>
  )
}
