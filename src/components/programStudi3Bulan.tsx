import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { genericOptions } from "../utils/renderSimpleRichText";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const Bold = ({ children }) => <strong>{children}</strong>;
const Text = ({ children }) => <>{children}</>;
const ListItem = ({ children }) => <ul className="x">{children}</ul>;

export const specialOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <Text>{children}</Text>;
    },
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return (
        <>
          <li className="programStudi-item">
            <div className="programStudi-bulet">
              <span className="programStudi-buletText"></span>
            </div>
            <div className="programStudi-content">
              <p className="programStudi-deskripsi">{children}</p>
            </div>
          </li>
        </>
      );
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return <ul className="programStudi-list">{children}</ul>;
    },
  },
};
const ProgramStudi3Bulan = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulSeksiProgram3Bulan {
          konten {
            raw
          }
          title
          subtitle {
            raw
          }
        }
      }
    `
  );
  return (
    <div className="programStudi programStudi--2 typography--centerText">
      <div className="programStudi-head">
        <h2 className="typography typography-title2">
          Program Mingguan (Triwulan)
        </h2>
        <p className="typography typography-subtitle">
          {renderRichText(
            data.contentfulSeksiProgram3Bulan.subtitle,
            genericOptions
          )}
        </p>
      </div>
      {renderRichText(data.contentfulSeksiProgram3Bulan.konten, specialOptions)}
    </div>
  );
};

export default ProgramStudi3Bulan;
