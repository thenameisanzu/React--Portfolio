import React from "react";
import profilepic from "../assets/propic.jpeg";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroText}>
      <h2 className={styles.subTitle}>Hey There,</h2>
      <h1 className={styles.title}>ANSU HERE</h1>
      <h3 className={styles.role}>MERN Stack Developer</h3>

      <div className={styles.heroImage}>
        <img src={profilepic} alt="A portrait of Ansu" />
      </div>
    </div>
  );
};

export default Hero;