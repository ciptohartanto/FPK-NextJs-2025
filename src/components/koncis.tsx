import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { genericOptions } from "../utils/renderSimpleRichText";
const Koncis = ({ content }) => {
  return (
    <div className="koncis">
      <div className="koncis-left">
        <div
          className="koncis-bg"
          style={{
            backgroundImage: `url("https:${content.kontenFoto8KunciPenentu.file.url}")`,
          }}
        />
      </div>
      <div className="koncis-right">
        <h2 className="typography-title">{content.judul8KunciPenentu}</h2>
        <div className="typography-list">
          {renderRichText(content.konten8KunciPenentu, genericOptions)}
        </div>
      </div>
    </div>
  );
};

export default Koncis;
