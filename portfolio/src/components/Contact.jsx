import React, { useState } from "react";


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
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
