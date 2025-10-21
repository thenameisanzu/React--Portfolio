import React from "react";
import styles from "../styles/Hero.module.css";

const Hero =  () => {
    return (
    <div className={styles.heroText}>
          <h2 className={styles.subTitle}>Hey There,</h2>
          <h1 className={styles.title}>ANSU HERE</h1>
          <h3 className={styles.role}>MERN Stack Developer</h3>
    </div>
        );
    
        


};

export default Hero;