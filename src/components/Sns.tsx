import { ReactElement } from 'react'

type SnsProps = {
  svgLogo: ReactElement
  svgText: string
}

const CSS_CLASS_BASE = {
  self: 'sns',
  svg: 'sns-svg',
  typography: 'typography-footer-title-1em',
}

export default function Sns({ svgLogo, svgText }: SnsProps) {
  console.log(svgLogo)
  return (
    <div className={CSS_CLASS_BASE.self}>
      <span className={CSS_CLASS_BASE.svg}>{svgLogo}</span>
      <span className={CSS_CLASS_BASE.typography}>{svgText}</span>
    </div>
  )
}
