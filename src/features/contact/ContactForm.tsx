import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
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
        setStatus("✅ Thank you! Your message has been sent successfully.");
        form.reset();
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus("");
        }, 5000);
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            <span className="contact-icon">📧</span>
            Contact Me
          </h2>
          <p className="contact-subtitle">
            Have questions about Egyptian Arabic? Want personalized lessons? 
            Send me a message and I'll get back to you within 24 hours!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">👨‍🏫</div>
              <h3>Personalized Lessons</h3>
              <p>Get one-on-one tutoring tailored to your learning goals.</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">💬</div>
              <h3>Quick Response</h3>
              <p>I typically respond within 24 hours to all inquiries.</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🎯</div>
              <h3>Focus on Your Needs</h3>
              <p>We'll focus on conversation, grammar, or vocabulary based on your goals.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Your Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Your Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="What would you like to learn? Any questions about Egyptian Arabic?"
                className="form-textarea"
                rows={5}
                required
              />
            </div>

            <div className="form-footer">
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="button-icon">✉️</span>
                    Send Message
                  </>
                )}
              </button>
              
              <div className="alternative-contact">
                <p>Or book a lesson directly on Preply:</p>
                <a 
                  href="https://preply.com/en/tutor/2970347" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="preply-link"
                >
                  🎓 Book on Preply
                </a>
              </div>
            </div>

            {status && (
              <div className={`status-message ${status.includes("✅") ? "success" : "error"}`}>
                <span className="status-icon">
                  {status.includes("✅") ? "✅" : "❌"}
                </span>
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;