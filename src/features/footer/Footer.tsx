import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "Preply",
      url: "https://preply.com/en/tutor/2970347",
      icon: "🎓",
      color: "#FF5A5F",
      description: "Book lessons"
    },
    {
      name: "GitHub",
      url: "https://github.com/AlyAtalla",
      icon: "🐱",
      color: "#333",
      description: "View code"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aly-atalla/",
      icon: "🔗",
      color: "#0077B5",
      description: "Connect"
    },
    {
      name: "Email",
      url: "mailto:aly.atalla@example.com",
      icon: "✉️",
      color: "#D44638",
      description: "Contact"
    }
  ];

  const resources = [
    { name: "Cards", count: "400+" },
    { name: "Grammar Exercises", count: "50+" },
    { name: "Phrases", count: "150+" },
    { name: "Mini Games", count: "3" }
  ];

  return (
    <footer className="app-footer">
      <div className="footer-wave"></div>
      
      <div className="container footer-inner">
        <div className="footer-grid">
          <div className="footer-section about-section">
            <h3 className="footer-title">
              🇪🇬 Egyptian Arabic Learning
            </h3>
            <p className="footer-description">
              A minimal, fun environment to refresh and learn Egyptian Arabic. 
              Interactive exercises, flashcards, and grammar lessons.
            </p>
            <div className="stats-grid">
              {resources.map((resource, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{resource.count}</span>
                  <span className="stat-label">{resource.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-section connect-section">
            <h3 className="footer-title">Connect</h3>
            <div className="socials-grid">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--social-color': link.color } as React.CSSProperties}
                >
                  <span className="social-icon">{link.icon}</span>
                  <div className="social-info">
                    <strong className="social-name">{link.name}</strong>
                    <span className="social-desc">{link.description}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section learning-section">
            <h3 className="footer-title">Learning Progress</h3>
            <div className="progress-section">
              <div className="progress-item">
                <span className="progress-label">Cards Mastered</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '65%' }}></div>
                </div>
                <span className="progress-percent">65%</span>
              </div>
              <div className="progress-item">
                <span className="progress-label">Grammar Complete</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '40%' }}></div>
                </div>
                <span className="progress-percent">40%</span>
              </div>
              <div className="progress-item">
                <span className="progress-label">Games Played</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '85%' }}></div>
                </div>
                <span className="progress-percent">85%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>© {currentYear} <strong>Aly Atalla</strong>. Learn Egyptian Arabic interactively.</p>
            <p className="tagline">Designed for fun, built for learning ❤️</p>
          </div>
          
          <div className="footer-actions">
            <button 
              className="back-to-top" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              ↑ Back to Top
            </button>
            <button className="theme-toggle">
              🌓 Toggle Theme
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;