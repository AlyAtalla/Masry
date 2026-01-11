import React from "react";
import "./About.css";

const About: React.FC = () => {
  const features = [
    {
      icon: "🎯",
      title: "Targeted Learning",
      description: "Focus on practical Egyptian Arabic used in daily conversations"
    },
    {
      icon: "🔄",
      title: "Interactive Exercises",
      description: "Flashcards, matching games, and multiple choice quizzes"
    },
    {
      icon: "📚",
      title: "Grammar Focus",
      description: "Dedicated grammar lessons covering conjugation, negation, and more"
    },
    {
      icon: "🎮",
      title: "Gamified Experience",
      description: "Learn through fun games with scoring and progress tracking"
    },
    {
      icon: "🔊",
      title: "Pronunciation Guide",
      description: "Transliterations help with correct pronunciation"
    },
    {
      icon: "📱",
      title: "Mobile-Friendly",
      description: "Works perfectly on all devices"
    }
  ];

  const stats = [
    { number: "400+", label: "Vocabulary Cards" },
    { number: "50+", label: "Grammar Exercises" },
    { number: "150+", label: "Common Phrases" },
    { number: "3", label: "Interactive Games" }
  ];

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
            <span className="title-icon">🇪🇬</span>
            About This Learning Platform
          </h2>
          <p className="about-subtitle">
            A <strong>fun, interactive environment</strong> to master real Egyptian Arabic
          </p>
        </div>

        <div className="about-content">
          <div className="about-description">
            <p className="main-description">
              This platform is designed to teach <strong>authentic Egyptian Arabic</strong> — 
              the language as it's actually spoken on the streets of Cairo. 
              We focus on practical phrases, common expressions, and correct 
              pronunciation that you'll use in real conversations.
            </p>
            
            <div className="mission-statement">
              <h3 className="mission-title">🎯 Our Mission</h3>
              <p>
                To make learning Egyptian Arabic accessible, engaging, and effective 
                through modern technology and proven language learning methods.
              </p>
            </div>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="stats-section">
            <h3 className="stats-title">📊 Learning Resources</h3>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="learning-path">
            <h3 className="path-title">🚀 Your Learning Journey</h3>
            <div className="path-steps">
              <div className="path-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Basic Vocabulary</h4>
                  <p>Start with essential greetings and common phrases</p>
                </div>
              </div>
              <div className="path-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Grammar Foundations</h4>
                  <p>Master verb conjugation, negation, and sentence structure</p>
                </div>
              </div>
              <div className="path-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Practice & Games</h4>
                  <p>Reinforce learning through interactive exercises</p>
                </div>
              </div>
              <div className="path-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Real Conversations</h4>
                  <p>Apply your knowledge in practical scenarios</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <div className="cta-content">
              <h3 className="cta-title">Ready to Speak Egyptian Arabic?</h3>
              <p className="cta-description">
                Book a lesson with me on Preply for personalized guidance and practice!
              </p>
              <a 
                href="https://preply.com/en/tutor/2970347" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button"
              >
                🎓 Start Learning on Preply
              </a>
            </div>
            <div className="teacher-info">
              <div className="teacher-avatar">👨‍🏫</div>
              <div className="teacher-details">
                <h4>Aly Atalla</h4>
                <p>Egyptian Arabic Tutor</p>
                <div className="teacher-badges">
                  <span className="badge">Native Speaker</span>
                  <span className="badge">5+ Years Experience</span>
                  <span className="badge">Interactive Teaching</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;