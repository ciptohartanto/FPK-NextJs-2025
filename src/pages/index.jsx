import * as React from "react";
import { Helmet } from "react-helmet";
import "./../stylesheets/index.sass";
import { useStaticQuery, graphql } from "gatsby";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { StaticImage } from "gatsby-plugin-image";

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
  const { contentfulKontenWebsite: stuff } = data;

  return (
    <>
      <Helmet>
        <title>Yayasan Flores Penuh Kasih | Official</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
          type="text/css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <nav className="navigation">
        <h1 className="navigation-logo">Flores Penuh Kasih</h1>
      </nav>
      <div className="visiMisi">
        <div className="visiMisi-left">
          <div className="visiMisi-video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/ibee_Em4-TQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="visiMisi-right">
          <h2 className="typography-title">{stuff.judulVisiMisi}</h2>
          <p className="typography-subtitle">
            {renderRichText(stuff.kontenVisiMisi, options)}
          </p>
        </div>
      </div>
      <div className="aktivitas">
        <h3 className="typography-title2">{stuff.judulAktivitas}</h3>
        <div className="aktivitas-grid">
          <div className="gridImage">
            {stuff.kontentFotoAktivitas.map((item) => (
              <div
                className="gridImage-item"
                style={{
                  backgroundImage: `url("https:${item.file.url}")`,
                }}
              />
            ))}
            <div className="gridImage-item">
              <iframe
                width="100%"
                height="auto"
                src="https://www.youtube.com/embed/sF8RFxbco-w"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="gridImage-item">
              <iframe
                width="100%"
                height="auto"
                src="https://www.youtube.com/embed/sf0CWewHo4w"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="gridImage-item">
              <iframe
                width="100%"
                height="auto"
                src="https://www.youtube.com/embed/L0zGRNxDrYc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="kenalKami">
        <div className="kenalKami-left">
          <h2 className="typography-title">{stuff.judulMengenalKami}</h2>
          <p className="typography-subtitle">
            {renderRichText(stuff.kontenMengenalKami, options)}
          </p>
        </div>
        <div className="kenalKami-right">
          <div className="visiMisi-video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/4OivBqToaQQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="programStudi programStudi--1 typography--centerText">
        <div className="programStudi-head">
          <h2 className="typography-title2">{stuff.judulProgramStudi3Tahun}</h2>
          <p className="typography-subtitle">
            {renderRichText(stuff.subtitleProgramStudi3Tahun, options)}
          </p>
        </div>
        <ul className="programStudi-list">
          <li className="programStudi-item">
            <div className="programStudi-bulet">
              <span className="programStudi-buletText">1</span>
            </div>
            <div className="programStudi-content">
              <h3 className="programStudi-subtitle">Tahun Pertama</h3>
              <p className="programStudi-deskripsi">
                Belajar dan training sebagai Rank dan File di semua departement
                hotel
              </p>
            </div>
          </li>
          <li className="programStudi-item">
            <div className="programStudi-bulet">
              <span className="programStudi-buletText">2</span>
            </div>
            <div className="programStudi-content">
              <h3 className="programStudi-subtitle">Tahun Kedua</h3>
              <p className="programStudi-deskripsi">
                Belajar dan training sebagai Supervisor di semua departement
                hotel
              </p>
            </div>
          </li>
          <li className="programStudi-item">
            <div className="programStudi-bulet">
              <span className="programStudi-buletText">3</span>
            </div>
            <div className="programStudi-content">
              <h3 className="programStudi-subtitle">Tahun Ketiga</h3>
              <p className="programStudi-deskripsi">
                Belajar dan training sebagai Manager di semua departement hotel
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="programStudi programStudi--2 typography--centerText">
        <div className="programStudi-head">
          <h2 className="typography-title2">Program Mingguan (Triwulan)</h2>
          <p className="typography-subtitle">
            Program Mingguan ditujukan untuk semua kalangan termasuk para
            pekerja di Industri perhotelan untuk meningkatkan skil, pengetahuan,
            dan berlatih bersama didalam workshop yang diadakan rutin pada
            setiap pertemuan.
          </p>
        </div>
        <ul className="programStudi-list">
          <li className="programStudi-item">
            <div className="programStudi-bulet">
              <span className="programStudi-buletText">1</span>
            </div>
            <div className="programStudi-content">
              <h3 className="programStudi-subtitle">Bulan Pertama</h3>
              <p className="programStudi-deskripsi">
                Pengenalan tugas dari setiap posisi dalam sebuah departemen.
              </p>
            </div>
          </li>
          <li className="programStudi-item">
            <div className="programStudi-bulet">
              <span className="programStudi-buletText">2</span>
            </div>
            <div className="programStudi-content">
              <h3 className="programStudi-subtitle">Bulan Kedua</h3>
              <p className="programStudi-deskripsi">
                Latihan dan praktek di lapangan.
              </p>
            </div>
          </li>
          <li className="programStudi-item">
            <div className="programStudi-bulet">
              <span className="programStudi-buletText">3</span>
            </div>
            <div className="programStudi-content">
              <h3 className="programStudi-subtitle">Bulan Ketiga</h3>
              <p className="programStudi-deskripsi">Evaluasi dan coaching</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="koncis">
        <div className="koncis-left">
          <div
            className="koncis-bg"
            style={{
              backgroundImage: `url("https:${stuff.kontenFoto8KunciPenentu.file.url}")`,
            }}
          />
        </div>
        <div className="koncis-right">
          <h2 className="typography-title">{stuff.judul8KunciPenentu}</h2>
          <div className="typography-list">
            {renderRichText(stuff.konten8KunciPenentu, options)}
          </div>
        </div>
      </div>
      <div className="founder">
        <div className="founder-left">
          <img
            className="founder-img"
            src={stuff.kontenFotoFounder.file.url}
            alt={stuff.kontenFotoFounder.title}
          />
        </div>
        <div className="founder-right">
          <h2 className="typography-title">{stuff.judulFounder}</h2>
          <p className="typography-subtitle">
            {renderRichText(stuff.kontenFounder, options)}
          </p>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-left">
          <div className="footer-logo" />
        </div>
        <div className="footer-right">
          <h3 className="footer-title">Yayasan Flores Penuh Kasih</h3>
          <address className="footer-address">
            {renderRichText(stuff.kontenAlamat, options)}
          </address>
          <h3 className="footer-subtitle">Contact Us</h3>

          <ul className="footer-list">
            <li className="footer-item">
              <a href="tel:+6281268317567">
                <StaticImage
                  src="./img/icon-call.svg"
                  alt="hubungi Yayasan Flores Penuh Kasih"
                />
              </a>
            </li>
            <li className="footer-item">
              <a href="mailto:yayasan.fpk@hotmail.com">
                <StaticImage
                  src="./img/icon-email.svg"
                  alt="hubungi Yayasan Flores Penuh Kasih"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default IndexPage;
