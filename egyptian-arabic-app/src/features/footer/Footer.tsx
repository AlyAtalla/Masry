import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="app-footer">
      <div className="container footer-inner">
        <div className="socials">
          <a href="https://preply.com/en/tutor/2970347" target="_blank" rel="noopener noreferrer">
            <strong>🎓 Preply</strong>
          </a>
          <a href="https://github.com/AlyAtalla" target="_blank" rel="noopener noreferrer">
            <strong>🐱 GitHub</strong>
          </a>
          <a href="https://www.linkedin.com/in/alyatalla/" target="_blank" rel="noopener noreferrer">
            <strong>🔗 LinkedIn</strong>
          </a>
          
        </div>
        <p>© {new Date().getFullYear()} Aly Atalla. Learn Egyptian Arabic interactively.</p>
      </div>
    </footer>
  );
};

export default Footer;
