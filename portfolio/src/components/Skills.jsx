import React from "react";
import { motion } from "framer-motion";
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
    { icon: <SiExpress color="#ffffff" />, name: "Express.js" },
    { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
  ];

  return (
    <section className={styles.skillsSection}>
      <motion.h2
        className={styles.skillsTitle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className={styles.skillsGrid}
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.skillCard}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <div className={styles.skillIcon}>{skill.icon}</div>
            <p className={styles.skillName}>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;