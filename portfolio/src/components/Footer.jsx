import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Ansu V S. All rights reserved.</p>

      <div className={styles.socials}>
        <a
          href="https://github.com/thenameisanzu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className={styles.icon} />
        </a>

        <a
          href="https://www.linkedin.com/in/ansu-v-s-03913b34a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className={styles.icon} />
        </a>

        <a
          href="mailto:ansuvs047@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FaEnvelope className={styles.icon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;