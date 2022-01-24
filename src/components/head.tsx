import React from "react";
import { Helmet } from "react-helmet";

const Head = () => {
  return (
    <Helmet>
      <title>Yayasan Flores Penuh Kasih | Official</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
        type="text/css"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default Head;
