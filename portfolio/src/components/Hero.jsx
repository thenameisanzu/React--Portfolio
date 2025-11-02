import React, { useState } from "react";
import { motion } from "framer-motion";
import profilepic from "../assets/propic.jpeg";
import styles from "../styles/Hero.module.css";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={styles.heroText}
      onMouseMove={handleMouseMove}
      style={{
        "--x": `${position.x}px`,
        "--y": `${position.y}px`,
      }}
    >
      <motion.h2
        className={styles.subTitle}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hey There,
      </motion.h2>

      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        ANSU HERE
      </motion.h1>

      <motion.h3
        className={styles.role}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        MERN Stack Developer
      </motion.h3>

      <motion.div
        className={styles.heroImage}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        <motion.img
          src={profilepic}
          alt="A portrait of Ansu"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.a
        href="/resume.pdf"
        download="Ansu_VS_Resume.pdf"
        className={styles.resumeButton}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.05 }}
        whileHover={{
          scale: 1.05,
          backgroundColor: "#0077ff",
          color: "#fff",
          boxShadow: "0px 0px 12px rgba(0, 119, 255, 0.6)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <FaDownload style={{ marginRight: "8px" }} />
        Download Résumé
      </motion.a>
    </div>
  );
};

export default Hero;