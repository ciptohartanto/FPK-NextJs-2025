import { GetStaticPropsResult } from 'next'

import clientQuery from '@/api/clientQuery'
import Album from '@/components/Album'
import PageHead from '@/components/PageHead'
import { AktivitasPage, AktivitasPageQuery, FooterQuery } from '@/gql/graphql'
import QUERY_AKTIVITAS from '@/queries/queryAktivitas'
import QUERY_FOOTER from '@/queries/queryFooter'
import YouTubes from '@/sections/YouTubes'

type AktivitasPageProps = {
  aktivitasPage: AktivitasPage
}

const PAGE_TITLE = 'Aktivitas | Yayasan Flores Penuh Kasih Official'
const PAGE_META_DESC = 'Kegiatan di Yayasan Flores Penuh Kasih'

export default function AktivitasHome({ aktivitasPage }: AktivitasPageProps) {
  const { albums } = aktivitasPage

  return (
    <>
      <PageHead pageTitle={PAGE_TITLE} metaDescription={PAGE_META_DESC} />
      <div style={{ width: '100%' }}>
        <Album type="withNumbers" imagesOnAlbum={albums} />
        <YouTubes title="Yayasan Flores Penuh Kasih on YouTube" />
      </div>
    </>
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<AktivitasPageQuery & FooterQuery>
> {
  const aktivitasData = await clientQuery<AktivitasPageQuery>({
    query: QUERY_AKTIVITAS,
    variableObject: {
      id: process.env.HYGRAPH_AKTIVITAS_PAGE_ID,
    },
  })

  const footerData = await clientQuery<FooterQuery>({
    query: QUERY_FOOTER,
    variableObject: {
      id: process.env.HYGRAPH_THE_FOOTER_ID,
    },
  })

  const { theFooter } = footerData
  const { aktivitasPage } = aktivitasData

  return {
    props: {
      aktivitasPage,
      theFooter,
    },
    revalidate: 10,
  }
}
