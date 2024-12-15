import React from "react";

const Aktitivas = ({ content }) => {
  const { kontenVideoVideoAktivitas } = content;

  return (
    <div className="aktivitas">
      <h3 className="typography typography-title2">{content.judulAktivitas}</h3>
      <div className="aktivitas-grid">
        <div className="gridImage gridImage--4Cols">
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

          <div className="gridImage-item">
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/t0VAhO1Snmw?si=UBLP0bFv5mSgXDYQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {kontenVideoVideoAktivitas.map((item) => (
            <div className="gridImage-item" key={item}>
              <video className="rekomendasi-video" controls>
                <source src={item.file.url + "#t=0.5"} type="video/mp4" />
              </video>
              <h3 className="rekomendasi-title">{item.description}</h3>
            </div>
          ))}

          <div className="gridImage-item">
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/jm537BL_Giw?si=Hd8ss1AGitKlMP0s"
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
              src="https://www.youtube.com/embed/GYPGuMOnx2g?si=qGVf4lIfJJ00g0AD"
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
              src="https://www.youtube.com/embed/iZfN9zEJAcg"
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
              src="https://www.youtube.com/embed/kdQJxBRhhBE"
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
