import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { genericOptions } from "../utils/renderSimpleRichText";
const VisiMisi = ({ content }) => {
  return (
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
        <h2 className="typography-title">{content.judulVisiMisi}</h2>
        <p className="typography-subtitle">
          {renderRichText(content.kontenVisiMisi, genericOptions)}
        </p>
      </div>
    </div>
  );
};

export default VisiMisi;
