import classNames from 'classnames'

import TitleWithPipe from '@/components/TitleWithPipe'
import { MitraKami as MitraKamiGraphProps } from '@/gql/graphql'

type MitraKamiProps = {
  data: MitraKamiGraphProps
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
export default function MitraKami({ data }: MitraKamiProps) {
  const { title, mitras } = data
  return (
    <div className={CSS_BASE_CLASS.self}>
      <div className={CSS_BASE_CLASS.wrapper}>
        <div className={CSS_BASE_CLASS.wrapperLeft}>
          <ul className={CSS_BASE_CLASS.list}>
            {mitras.map((mitra) => (
              <li key={mitra.namaMitra} className={CSS_BASE_CLASS.item}>
                {mitra.logoFile ? (
                  <div
                    className={CSS_BASE_CLASS.mitraBg}
                    style={{ backgroundImage: `url(${mitra.logoFile.url})` }}
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
