import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Set initial theme based on state
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <nav className={styles.navbar}>
          <a href="#about" className={styles.navLink}>
            About
          </a>
          <a href="#projects" className={styles.navLink}>
            Projects
          </a>
          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
        </nav>

        <button onClick={handleToggle} className={styles.themeToggle}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        <div className={styles.heroText}>
          <h2 className={styles.subTitle}>Hey There,</h2>
          <h1 className={styles.title}>ANSU HERE</h1>
          <h3 className={styles.role}>MERN Stack Developer</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;