import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_8m8l6io", // 👈 your EmailJS service ID
        "template_a1281yn", // 👈 your EmailJS template ID
        {
          from_name: form.from_name,
          from_email: form.from_email,
          message: form.message,
        },
        "CKyBHEp2Gsk9TYHiI" // 👈 your EmailJS public key
      )
      .then(() => {
        setSent("success");
        setForm({ from_name: "", from_email: "", message: "" });
        setTimeout(() => setSent(false), 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setSent("error");
        setTimeout(() => setSent(false), 3000);
      });
  };

  return (
    <motion.section
      id="contact"
      className={styles.contactSection}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className={styles.sectionTitle}>Contact Me</h2>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <input
          type="text"
          name="from_name"
          value={form.from_name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className={styles.inputField}
        />
        <input
          type="email"
          name="from_email"
          value={form.from_email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className={styles.inputField}
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          className={styles.textArea}
        />
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>

      {/* ✅ Animated Alert Messages */}
      {sent === "success" && (
        <motion.div
          className={styles.successMessage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          ✨ Your message has been sent successfully!
        </motion.div>
      )}

      {sent === "error" && (
        <motion.div
          className={styles.errorMessage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          ❌ Something went wrong. Please try again later.
        </motion.div>
      )}
    </motion.section>
  );
};

export default Contact;