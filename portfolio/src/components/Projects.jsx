import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Projects.module.css";

const Projects = () => {
  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // stagger animation
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const projects = [
    {
      title: "Pomodoro Timer App",
      desc: "A simple and customizable Pomodoro Timer built with HTML, CSS, and JavaScript to help improve productivity and focus.",
      link: "https://thenameisanzu.github.io/Pomodoro-Timer/",
    },
    {
      title: "Calculator App",
      desc: "A simple calculator app built with HTML, CSS, and JavaScript. Supports basic arithmetic operations with a responsive numpad UI.",
      link: "https://thenameisanzu.github.io/Calculator-App/",
    },
    {
      title: "Todo App",
      desc: "A clean, interactive, and responsive To-Do List application built with HTML, CSS, and JavaScript. This app allows users to manage their daily tasks with ease — add, edit, complete, and delete tasks in a sleek and animated UI.",
      link: "https://thenameisanzu.github.io/ToDoList/",
    },
    {
      title: "Quote Generator",
      desc: "A simple, dynamic, and responsive web application built using HTML, CSS, and JavaScript that fetches and displays random quotes.",
      link: "https://thenameisanzu.github.io/Quote-Generator/",
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;