import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { genericOptions } from "../utils/renderSimpleRichText";

const Founder = ({ content }) => {
  return (
    <div className="founder">
      <div className="founder-left">
        <img
          className="founder-img"
          src={content.kontenFotoFounder.file.url}
          alt={content.kontenFotoFounder.title}
        />
      </div>
      <div className="founder-right">
        <h2 className="typography typography-title">{content.judulFounder}</h2>
        <p className="typography typography-subtitle">
          {renderRichText(content.kontenFounder, genericOptions)}
        </p>
      </div>
    </div>
  );
};

export default Founder;
