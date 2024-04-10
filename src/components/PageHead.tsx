import Head from 'next/head'

interface PageHeadProps {
  pageTitle: string
}

export default function PageHead({ pageTitle }: PageHeadProps) {
  return (
    <Head>
      <title>{'Cipto Hartanto | ' + pageTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content="description" />
      <meta name="keywords" content="keywords" />
    </Head>
  )
}

PageHead.defaultProps = {
  pageTitle: '',
}
