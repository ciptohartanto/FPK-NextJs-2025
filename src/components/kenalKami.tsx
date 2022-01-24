import React from "react";

import { renderRichText } from "gatsby-source-contentful/rich-text";
import { genericOptions } from "../utils/renderSimpleRichText";

const KenalKami = ({ content }) => {
  return (
    <div className="kenalKami">
      <div className="kenalKami-left">
        <h2 className="typography typography-title">
          {content.judulMengenalKami}
        </h2>
        <p className="typography typography-subtitle">
          {renderRichText(content.kontenMengenalKami, genericOptions)}
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
  );
};

export default KenalKami;
