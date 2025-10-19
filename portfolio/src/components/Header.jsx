import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerContent}>
      <nav className={styles.navbar}>
        <a href="#about" className={styles.navLink}>About</a>
        <a href="#projects" className={styles.navLink}>Projects</a>
        <a href="#contact" className={styles.navLink}>Contact</a>
      </nav>

      <h2 className={styles.subTitle}>Hey There,</h2>
      <h1 className={styles.title}>ANSU HERE</h1>
      <h3 className={styles.role}>MERN Stack Developer</h3>
    </div>
  </header>
);

export default Header;