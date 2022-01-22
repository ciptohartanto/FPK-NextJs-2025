import React from "react";

const ProgramStudi3Bulan = () => {
  return (
    <div className="programStudi programStudi--2 typography--centerText">
      <div className="programStudi-head">
        <h2 className="typography-title2">Program Mingguan (Triwulan)</h2>
        <p className="typography-subtitle">
          Program Mingguan ditujukan untuk semua kalangan termasuk para pekerja
          di Industri perhotelan untuk meningkatkan skil, pengetahuan, dan
          berlatih bersama didalam workshop yang diadakan rutin pada setiap
          pertemuan.
        </p>
      </div>
      <ul className="programStudi-list">
        <li className="programStudi-item">
          <div className="programStudi-bulet">
            <span className="programStudi-buletText">1</span>
          </div>
          <div className="programStudi-content">
            <h3 className="programStudi-subtitle">Bulan Pertama</h3>
            <p className="programStudi-deskripsi">
              Pengenalan tugas dari setiap posisi dalam sebuah departemen.
            </p>
          </div>
        </li>
        <li className="programStudi-item">
          <div className="programStudi-bulet">
            <span className="programStudi-buletText">2</span>
          </div>
          <div className="programStudi-content">
            <h3 className="programStudi-subtitle">Bulan Kedua</h3>
            <p className="programStudi-deskripsi">
              Latihan dan praktek di lapangan.
            </p>
          </div>
        </li>
        <li className="programStudi-item">
          <div className="programStudi-bulet">
            <span className="programStudi-buletText">3</span>
          </div>
          <div className="programStudi-content">
            <h3 className="programStudi-subtitle">Bulan Ketiga</h3>
            <p className="programStudi-deskripsi">Evaluasi dan coaching</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProgramStudi3Bulan;
