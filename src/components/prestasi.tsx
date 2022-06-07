import React from "react";

const Aktitivas = ({ content }) => {
  const { judulPrestasi, kontenPrestasi } = content;

  return (
    <div className="prestasi">
      <h3 className="typography typography-title2">{judulPrestasi}</h3>

      <>
        {kontenPrestasi.map((item) => {
          return (
            <>
              {item.file.contentType === "video/mp4" && (
                <div className="prestasi-video" key={item.file.url}>
                  <video className="rekomendasi-video" controls>
                    <source src={item.file.url + "#t=1"} type="video/mp4" />
                  </video>

                  <h3 className="rekomendasi-title">{item.description}</h3>
                </div>
              )}
            </>
          );
        })}
      </>
      <div className="prestasi-grid">
        <div className="gridImage gridImage--layout2">
          {kontenPrestasi.map((item) => {
            return (
              <>
                {item.file.contentType === "image/jpeg" && (
                  <div
                    key={item.file.url}
                    className="gridImage-item"
                    style={{
                      backgroundImage: `url("https:${item.file.url}")`,
                    }}
                  />
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Aktitivas;
