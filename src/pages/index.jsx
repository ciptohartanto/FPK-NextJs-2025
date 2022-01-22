import * as React from "react";
import { Helmet } from "react-helmet";
import "./../stylesheets/index.sass";
import { useStaticQuery, graphql } from "gatsby";
import Head from "../components/head";
import Navigation from "../components/navigation";
import VisiMisi from "../components/visiMisi";
import Aktitivas from "../components/aktivitas";
import KenalKami from "../components/kenalKami";
import Koncis from "../components/koncis";
import Founder from "../components/founder";
import Footer from "../components/footer";
import ProgramStudi3Tahun from "../components/programStudi3Tahun";
import ProgramStudi3Bulan from "../components/programStudi3Bulan";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { StaticImage } from "gatsby-plugin-image";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const Bold = ({ children }) => <strong>{children}</strong>;
const Text = ({ children }) => <>{children}</>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      );
    },
  },
};

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulKontenWebsite {
          judulAktivitas
          judulFounder
          judulMengenalKami
          judulProgramStudi3Tahun
          judulVisiMisi
          judul8KunciPenentu
          subtitleProgramStudi3Tahun {
            raw
          }
          konten8KunciPenentu {
            raw
          }
          kontenAlamat {
            raw
          }
          kontenFoto8KunciPenentu {
            file {
              url
            }
          }
          kontenFotoFounder {
            title
            file {
              url
            }
          }
          kontenFounder {
            raw
          }
          kontenKontak {
            raw
          }
          kontenMengenalKami {
            raw
          }
          kontenProgramStudi3Tahun {
            raw
          }
          kontenVisiMisi {
            raw
          }
          kontentFotoAktivitas {
            file {
              url
            }
          }
        }
      }
    `
  );
  const { contentfulKontenWebsite: isi } = data;

  return (
    <>
      <Head />
      <Navigation />
      <VisiMisi content={isi} />
      <Aktitivas content={isi} />
      <KenalKami content={isi} />
      <ProgramStudi3Tahun content={isi} />
      <ProgramStudi3Bulan />
      <Koncis content={isi} />
      <Founder content={isi} />
      <Footer content={isi} />
    </>
  );
};

export default IndexPage;
