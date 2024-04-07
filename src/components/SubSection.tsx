import { ReactNode } from 'react'

interface SubSectionProps {
  title: string
  children: ReactNode
}

export default function SubSection({ title, children }: SubSectionProps) {
  return (
    <div className="subSection">
      <h3 className="subSection-title">{title}</h3>
      <div className="subSection-row">{children}</div>
    </div>
  )
}

SubSection.defaultProps = {
  title: 'missing data',
  children: <span>missing data</span>,
}
