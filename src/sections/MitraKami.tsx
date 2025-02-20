import classNames from 'classnames'

import TitleWithPipe from '@/components/TitleWithPipe'

type MitraKamiProps = {
  title: string
  mitras: { background?: string; namaMitra: string }[]
}

const CSS_BASE_CLASS = {
  self: 'mitraKami',
  wrapper: 'mitraKami-wrapper',
  wrapperLeft: 'mitraKami-wrapperLeft',
  wrapperRight: 'mitraKami-wrapperRight',
  list: 'mitraKami-list',
  item: 'mitraKami-item',
  mitraBg: 'mitraKami-mitraBg',
  mitraText: 'mitraKami-mitraText',
  typographyMitra: 'typography-caption',
}
export default function MitraKami({ title, mitras }: MitraKamiProps) {
  return (
    <div className={CSS_BASE_CLASS.self}>
      <div className={CSS_BASE_CLASS.wrapper}>
        <div className={CSS_BASE_CLASS.wrapperLeft}>
          <ul className={CSS_BASE_CLASS.list}>
            {mitras.map((mitra) => (
              <li key={mitra.namaMitra} className={CSS_BASE_CLASS.item}>
                {mitra.background ? (
                  <div
                    className={CSS_BASE_CLASS.mitraBg}
                    style={{ backgroundImage: `url(${mitra.background})` }}
                  />
                ) : (
                  <span
                    className={classNames(
                      CSS_BASE_CLASS.mitraText,
                      CSS_BASE_CLASS.typographyMitra
                    )}
                  >
                    {mitra.namaMitra}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={CSS_BASE_CLASS.wrapperRight}>
          <TitleWithPipe titleText={title} style="onLightBackground" />
        </div>
      </div>
    </div>
  )
}
