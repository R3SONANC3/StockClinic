import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-banner">
        <h1 className="banner-title">ระบบจัดการสต็อกคลินิก</h1>
        <p className="banner-description">
          จัดการสิ่งของในคลินิกอย่างมีประสิทธิภาพ
        </p>
      </div>
      <div className="search-section">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="ค้นหาโดยชื่อ รหัส หรือประเภท"
            className="search-input"
          />
        </div>
        <button className="search-button">🔍 ค้นหา</button>
      </div>
      <div className="notification-section">
        <h2 className="notification-title">การแจ้งเตือน</h2>
      </div>
      <div className="stock-section">
        <h2 className="stock-title">สต็อกปัจจุบัน</h2>
      </div>
    </div>
  );
};

export default HomePage;
