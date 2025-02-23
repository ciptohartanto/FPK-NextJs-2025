import classNames from 'classnames'
import Image from 'next/image'

import ButtonHollowRounded from '@/components/ButtonHollowRounded'

const CSS_BASE_CLASS = {
  self: 'jumbotron',
  image: 'jumbotron-image',
  contentWrapper: 'jumbotron-contentWrapper',
  typographyCaption: 'typography-caption',
  button: 'jumbotron-button',
  jumbo: 'jumbotron-jumbo',
  typographyJumbo: 'typography-jumbo',
}

export default function Jumbotron() {
  return (
    <div className={CSS_BASE_CLASS.self}>
      <Image
        className={CSS_BASE_CLASS.image}
        src="/dummy-wallpaper.jpg"
        width={300}
        height={300}
        alt="dummy"
      />
      <div className={CSS_BASE_CLASS.contentWrapper}>
        <h3 className={CSS_BASE_CLASS.typographyCaption}>context</h3>
        <h1
          className={classNames(
            CSS_BASE_CLASS.typographyJumbo,
            CSS_BASE_CLASS.jumbo
          )}
        >
          Yayasan Flores Penuh Kasih
        </h1>
        <h2 className={CSS_BASE_CLASS.typographyCaption}>context</h2>
        <div className={CSS_BASE_CLASS.button}>
          <ButtonHollowRounded buttonText="check it out" />
        </div>
      </div>
    </div>
  )
}
