import { ReactElement } from 'react'

type SnsProps = {
  svgLogo: ReactElement
  svgText: string
}

const CSS_BASE_CLASS = {
  self: 'sns',
  svg: 'sns-svg',
  typography: 'typography-footer-title-1em',
}

export default function Sns({ svgLogo, svgText }: SnsProps) {
  return (
    <div className={CSS_BASE_CLASS.self}>
      <span className={CSS_BASE_CLASS.svg}>{svgLogo}</span>
      <span className={CSS_BASE_CLASS.typography}>{svgText}</span>
    </div>
  )
}
