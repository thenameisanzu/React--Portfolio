import React from "react";
import styles from "../styles/Projects.module.css";

const Projects = () => (
  <section id="projects" className={styles.projectsSection}>
    <h2 className={styles.sectionTitle}>Projects</h2>

    <div className={styles.projectGrid}>
      <div className={styles.projectCard}>
        <h3>Pomodoro Timer App</h3>
        <p>
          A simple and customizable Pomodoro Timer built with HTML, CSS, and
          JavaScript to help improve productivity and focus.
        </p>
      </div>

      <div className={styles.projectCard}>
        <h3>Calculator App</h3>
        <p>
          A simple calculator app built with HTML, CSS, and JavaScript.
          Supports basic arithmetic operations with a responsive numpad UI.
        </p>
      </div>

      <div className={styles.projectCard}>
        <h3>Todo App</h3>
        <p>
          A clean, interactive, and responsive To-Do List application built
          with HTML, CSS, and JavaScript. This app allows users to manage their
          daily tasks with ease — add, edit, complete, and delete tasks in a
          sleek and animated UI.
        </p>
      </div>
    </div>
  </section>
);

export default Projects;
