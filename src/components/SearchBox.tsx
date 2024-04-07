import IconX, { IconXTypes } from '@/elements/IconX'

export default function SearchBox() {
  return (
    <div className="searchBox">
      <input className="searchBox-input" placeholder="Search an article" />
      <span className="searchBox-icon">
        <IconX type={IconXTypes.LIGHT} isActive />
      </span>
    </div>
  )
}
