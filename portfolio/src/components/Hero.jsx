import React from "react";
import { motion } from "framer-motion";
import profilepic from "../assets/propic.jpeg";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroText}>
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
    </div>
  );
};

export default Hero;