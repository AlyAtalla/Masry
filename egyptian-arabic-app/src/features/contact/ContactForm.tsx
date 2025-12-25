import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkonwzqd", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("✅ Message sent!");
        form.reset();
      } else {
        setStatus("❌ Something went wrong.");
      }
    } catch (error) {
      setStatus("❌ Network error.");
    }
  };

  return (
    <section className="contact-form-section">
      <h2>Contact Me ✉️</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required rows={4}></textarea>
        <button type="submit">Send</button>
      </form>
      {status && <p className="status">{status}</p>}
    </section>
  );
};

export default ContactForm;
