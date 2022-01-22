import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { genericOptions } from "../utils/renderSimpleRichText";

const Footer = ({ content }) => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-logo" />
      </div>
      <div className="footer-right">
        <h3 className="footer-title">Yayasan Flores Penuh Kasih</h3>
        <address className="footer-address">
          {renderRichText(content.kontenAlamat, genericOptions)}
        </address>
        <h3 className="footer-subtitle">Contact Us</h3>

        <ul className="footer-list">
          <li className="footer-item">
            <a href="tel:+6281268317567">
              <StaticImage
                src="./img/icon-call.svg"
                alt="hubungi Yayasan Flores Penuh Kasih"
              />
            </a>
          </li>
          <li className="footer-item">
            <a href="mailto:yayasan.fpk@hotmail.com">
              <StaticImage
                src="./img/icon-email.svg"
                alt="hubungi Yayasan Flores Penuh Kasih"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
