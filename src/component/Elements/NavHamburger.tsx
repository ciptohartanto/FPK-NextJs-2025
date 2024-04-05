import classNames from 'classnames'

export enum NavHamburgerTypes {
  LARGE = 'large',
  SMALL = 'small',
}

interface NavHamburgerProps {
  type: NavHamburgerTypes
}

export default function NavHamburger({ type }: NavHamburgerProps) {
  return (
    <div className={classNames('navHamburger', `navHamburger--${type}`)}>
      <span className="navHamburger-line" />
      <span className="navHamburger-line" />
      <span className="navHamburger-line" />
    </div>
  )
}
