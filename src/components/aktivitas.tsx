import React from "react";

const Aktitivas = ({ content }) => {
  return (
    <div className="aktivitas">
      <h3 className="typography-title2">{content.judulAktivitas}</h3>
      <div className="aktivitas-grid">
        <div className="gridImage">
          {content.kontentFotoAktivitas.map((item) => (
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
  );
};

export default Aktitivas;
