import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <nav className="navbar-container">
            <div className="navbar-logo">
                <span className="logo">📦 คลินิกสต็อก</span>
            </div>
            <div className="navbar-links">
                <button className="nav-item">🏠 หน้าหลัก</button>
                <button className="nav-item">➕ เพิ่มสิ่งของ</button>
                <button className="nav-item">📄 ฟอร์มเบิกของ</button>
                <button className="nav-item">🕒 ประวัติการเบิก</button>
                <button className="nav-item">⚙️ ตั้งค่า</button>
            </div>
            <div className="navbar-notifications">
                <span className="icon-bell">🔔</span>
                <button
                    className="theme-toggle-btn"
                    onClick={() => setDarkMode((prev) => !prev)}
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? '🌙' : '☀️'}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
