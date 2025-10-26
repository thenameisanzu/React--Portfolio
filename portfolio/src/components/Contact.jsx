import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!"); // Replace with EmailJS or mailto later
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.sectionTitle}>Contact Me</h2>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className={styles.inputField}
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className={styles.inputField}
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          required
          className={styles.textArea}
        />

        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;