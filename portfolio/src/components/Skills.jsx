import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import styles from "../styles/Skills.module.css";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 color="#E44D26" />, name: "HTML" },
    { icon: <FaCss3Alt color="#1572B6" />, name: "CSS" },
    { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
    { icon: <FaReact color="#61DBFB" />, name: "React" },
    { icon: <FaNodeJs color="#3C873A" />, name: "Node.js" },
    { icon: <SiExpress color="#000000" />, name: "Express.js" },
    { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
  ];

  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.skillsTitle}>My Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div className={styles.skillCard} key={index}>
            <div className={styles.skillIcon}>{skill.icon}</div>
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;