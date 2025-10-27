import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <motion.section
    id="about"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    style={{ padding: "4rem 2rem", textAlign: "center" }}
  >
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      style={{ fontSize: "2rem", marginBottom: "1rem" }}
    >
      About Me
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        fontSize: "1.1rem",
        lineHeight: "1.6",
        color: "#555",
      }}
    >
      I'm Ansu, a passionate MERN Stack web developer who loves building
      interactive and responsive websites. I specialize in JavaScript,
      Node.js, and creative UI design. Always learning, always coding.
    </motion.p>
  </motion.section>
);

export default About;