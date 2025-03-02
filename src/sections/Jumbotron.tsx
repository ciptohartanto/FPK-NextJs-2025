import { sendGAEvent, sendGTMEvent } from '@next/third-parties/google'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import ButtonHollowRounded from '@/components/ButtonHollowRounded'
import { Jumbotron as SectionJumbotronProps } from '@/gql/graphql'

const CSS_BASE_CLASS = {
  self: 'jumbotron',
  image: 'jumbotron-image',
  contentWrapper: 'jumbotron-contentWrapper',
  typographyCaption: 'typography-caption',
  button: 'jumbotron-button',
  jumbo: 'jumbotron-jumbo',
  typographyJumbo: 'typography-jumbo',
}

type JumbotronProps = {
  data: SectionJumbotronProps
}

const ID_FOR_TRACKING = {
  button: 'cta-aktivitas',
}

export default function Jumbotron({ data }: JumbotronProps) {
  const { title, firstCaption, secondCaption, buttonText, gambar } = data

  return (
    <div className={CSS_BASE_CLASS.self}>
      <Image
        className={CSS_BASE_CLASS.image}
        src={gambar.fileGambar.url}
        width={800}
        height={500}
        alt={gambar.judul}
        priority
        quality={60}
      />
      <div className={CSS_BASE_CLASS.contentWrapper}>
        <h3 className={CSS_BASE_CLASS.typographyCaption}>{firstCaption}</h3>
        <h1
          className={classNames(
            CSS_BASE_CLASS.typographyJumbo,
            CSS_BASE_CLASS.jumbo
          )}
        >
          {title}
        </h1>
        <h2 className={CSS_BASE_CLASS.typographyCaption}>{secondCaption}</h2>
        <Link
          href="/aktivitas"
          className={CSS_BASE_CLASS.button}
          id={ID_FOR_TRACKING.button}
          onClick={() => {
            sendGAEvent('event', 'event_button_click', {
              content_type: 'event-button-value xyz',
            })
            sendGTMEvent({
              event: 'event_button_click',
              content_type: 'event-button-value ccc',
            })
          }}
        >
          <ButtonHollowRounded buttonText={buttonText} />
        </Link>
      </div>
    </div>
  )
}
