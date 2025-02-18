import classNames from 'classnames'

type BulletProps = {
  isActive: boolean
}

const CSS_BASE_CLASS = {
  self: 'bullet',
  isActive: 'bullet--active',
}

export default function Bullet({ isActive = false }: BulletProps) {
  return (
    <div
      className={classNames(CSS_BASE_CLASS.self, {
        [CSS_BASE_CLASS.isActive]: isActive,
      })}
    />
  )
}
