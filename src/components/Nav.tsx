import IconHamburger, { IconHamburgerTypes } from '@/elements/IconHamburger'
import IconX, { IconXTypes } from '@/elements/IconX'

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-icon">
        <IconHamburger type={IconHamburgerTypes.LARGE} />
        <IconX type={IconXTypes.LARGE} />
      </div>
      <nav className="nav-navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <span className="nav-text">Projects</span>
          </li>
          <li className="nav-item">
            <span className="nav-text">Writings</span>
          </li>
          <li className="nav-item">
            <span className="nav-text">About This Website</span>
          </li>
          <li className="nav-item">
            <span className="nav-text">Resume</span>
          </li>
        </ul>
      </nav>
    </div>
  )
}
