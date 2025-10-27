import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      className={styles.contactSection}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className={styles.contactForm}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.input
          whileFocus={{ scale: 1.03, borderColor: "#0077ff" }}
          transition={{ type: "spring", stiffness: 200 }}
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className={styles.inputField}
        />

        <motion.input
          whileFocus={{ scale: 1.03, borderColor: "#0077ff" }}
          transition={{ type: "spring", stiffness: 200 }}
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className={styles.inputField}
        />

        <motion.textarea
          whileFocus={{ scale: 1.02, borderColor: "#0077ff" }}
          transition={{ type: "spring", stiffness: 200 }}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          required
          className={styles.textArea}
        />

        <motion.button
          type="submit"
          className={styles.submitButton}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#0077ff",
            color: "#fff",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      {sent && (
        <motion.div
          className={styles.successMessage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          ✅ Message Sent Successfully!
        </motion.div>
      )}
    </motion.section>
  );
};

export default Contact;