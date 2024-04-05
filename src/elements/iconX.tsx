import classNames from 'classnames'

export enum IconXTypes {
  LARGE = 'large',
  LIGHT = 'light',
  SMALL = 'small',
}

interface IconXProps {
  type: IconXTypes
}

export default function IconX({ type }: IconXProps) {
  return <span className={classNames('iconX', `iconX--${type}`)} />
}
