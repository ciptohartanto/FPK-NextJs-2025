import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import { graphql, useStaticQuery } from "gatsby";

import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

const Bold = ({ children }) => <strong>{children}</strong>;
const Paragraph = ({ children }) => <p>{children}</p>;
const ListItem = ({ children }) => <li>{children}</li>;

export const genericOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <Paragraph>{children}</Paragraph>;
    },
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return <ListItem>{children}</ListItem>;
    },
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

const TurutMisi = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulSeksiTurutMisi {
          deskripsi {
            raw
          }
          judul
          foto {
            file {
              url
            }
          }
        }
      }
    `
  );

  return (
    <div className="turutMisi">
      <div className="turutMisi-left">
        <h2 className="typography typography-title">
          {data.contentfulSeksiTurutMisi.judul}
        </h2>
        <p className="typography typography-subtitle">
          {renderRichText(
            data.contentfulSeksiTurutMisi.deskripsi,
            genericOptions
          )}
        </p>
      </div>
      <div className="turutMisi-right">
        <div
          className="turutMisi-bg"
          style={{
            backgroundImage: `url("https:${data.contentfulSeksiTurutMisi.foto.file.url}")`,
          }}
        />
      </div>
    </div>
  );
};

export default TurutMisi;
