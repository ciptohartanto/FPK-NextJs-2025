import classNames from 'classnames'

export enum IconHamburgerTypes {
  LARGE = 'large',
  SMALL = 'small',
}

interface IconHamburgerProps {
  type: IconHamburgerTypes
}

export default function IconHamburger({ type }: IconHamburgerProps) {
  return (
    <div className={classNames('iconHamburger', `iconHamburger--${type}`)}>
      <span className="iconHamburger-line" />
      <span className="iconHamburger-line" />
      <span className="iconHamburger-line" />
    </div>
  )
}
