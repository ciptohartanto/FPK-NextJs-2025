import React from "react";

const Rekomendasi = ({ content }) => {
  return (
    <div className="rekomendasi">
      <h3 className="typography typography-title2">
        {content.judulRekomendasi}
      </h3>
      <div className="rekomendasi-grid">
        {content.kontenVideoVideoRekomendasi.map((item) => (
          <div className="rekomendasi-gridItem">
            <video className="rekomendasi-video" controls>
              <source src={item.file.url + "#t=0.5"} type="video/mp4" />
            </video>
            <h3 className="rekomendasi-title">{item.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rekomendasi;
