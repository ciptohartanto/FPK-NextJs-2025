import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { genericOptions } from "../utils/renderSimpleRichText";
const ProgramStudi3Tahun = ({ content }) => {
  return (
    <div className="programStudi programStudi--1 typography--centerText">
      <div className="programStudi-head">
        <h2 className="typography-title2">{content.judulProgramStudi3Tahun}</h2>
        <p className="typography-subtitle">
          {renderRichText(content.subtitleProgramStudi3Tahun, genericOptions)}
        </p>
      </div>
      <ul className="programStudi-list">
        <li className="programStudi-item">
          <div className="programStudi-bulet">
            <span className="programStudi-buletText">1</span>
          </div>
          <div className="programStudi-content">
            <h3 className="programStudi-subtitle">Tahun Pertama</h3>
            <p className="programStudi-deskripsi">
              Belajar dan training sebagai Rank dan File di semua departement
              hotel
            </p>
          </div>
        </li>
        <li className="programStudi-item">
          <div className="programStudi-bulet">
            <span className="programStudi-buletText">2</span>
          </div>
          <div className="programStudi-content">
            <h3 className="programStudi-subtitle">Tahun Kedua</h3>
            <p className="programStudi-deskripsi">
              Belajar dan training sebagai Supervisor di semua departement hotel
            </p>
          </div>
        </li>
        <li className="programStudi-item">
          <div className="programStudi-bulet">
            <span className="programStudi-buletText">3</span>
          </div>
          <div className="programStudi-content">
            <h3 className="programStudi-subtitle">Tahun Ketiga</h3>
            <p className="programStudi-deskripsi">
              Belajar dan training sebagai Manager di semua departement hotel
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProgramStudi3Tahun;
