import Head from 'next/head'

interface PageHeadProps {
  pageTitle: string
  metaDescription: string
}
export default function PageHead({
  pageTitle,
  metaDescription,
}: PageHeadProps) {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={metaDescription} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      <link rel="manifest" href="/favicon/site.webmanifest" />
    </Head>
  )
}
