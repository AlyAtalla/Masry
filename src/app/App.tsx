import "./App.css";
import CardGame from "../features/cards/CardGame";
import About from "../features/about/About";
import Footer from "../features/footer/Footer";
import MiniGames from "../features/minigames/MiniGames";
import MultipleChoiceGame from "../features/minigames/MultipleChoiceGame";
import ContactForm from "../features/contact/ContactForm";
import PhraseMatchGame from "../features/minigames/PhraseMatchGame";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app">
      <div className="background-overlay"></div>
      <div className="background-pattern"></div>
      
      <header className="app-header">
        <div className="container header-inner">
          <div className="header-content">
            <h1 className="app-title">
              <span className="flag">🇪🇬</span>
              Egyptian Arabic Mastery
            </h1>
            <span className="subtitle">Learn real Egyptian Arabic through interactive games and exercises</span>
          </div>
          
          <nav className="main-nav">
            <a href="#flashcards" className="nav-link">Flashcards</a>
            <a href="#games" className="nav-link">Games</a>
            <a href="#grammar" className="nav-link">Grammar</a>
            <a href="#about" className="nav-link">About</a>
            <a 
              href="https://preply.com/en/tutor/2970347" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link cta-button"
            >
              🎓 Book a Lesson
            </a>
          </nav>
        </div>
      </header>

      <main className="container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h2 className="hero-title">Welcome to Your Egyptian Arabic Journey! 👋</h2>
            <p className="hero-description">
              This is a <strong>fun, interactive environment</strong> to master real Egyptian Arabic. 
              Now with <strong>400+ vocabulary cards</strong>, <strong>grammar exercises</strong>, and <strong>extended learning games</strong>!
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">400+</span>
                <span className="stat-label">Vocabulary Cards</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Grammar Exercises</span>
              </div>
              <div className="stat">
                <span className="stat-number">3</span>
                <span className="stat-label">Interactive Games</span>
              </div>
              <div className="stat">
                <span className="stat-number">150+</span>
                <span className="stat-label">Common Phrases</span>
              </div>
            </div>
          </div>
        </section>

        {/* Flashcards Section */}
        <section id="flashcards" className="section-card">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">🃏</span>
              Interactive Flashcards
            </h2>
            <p className="section-description">
              Flip through 400+ cards with Egyptian Arabic phrases, transliterations, and English translations. 
              Perfect for vocabulary building and pronunciation practice.
            </p>
          </div>
          <CardGame />
        </section>

        {/* About Section */}
        <section id="about" className="section-card">
          <About />
        </section>

        {/* Games Section */}
        <section id="games" className="games-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">🎮</span>
              Learning Games
            </h2>
            <p className="section-description">
              Practice what you've learned through fun, interactive games. Each game focuses on different skills 
              to reinforce your Egyptian Arabic knowledge.
            </p>
          </div>
          
          <div className="games-grid">
            <div className="game-card">
              <h3>Translation Game</h3>
              <p>Test your translation skills with mixed vocabulary and grammar exercises.</p>
              <MiniGames />
            </div>
            
            <div className="game-card">
              <h3>Multiple Choice Quiz</h3>
              <p>Choose the correct translation from options. Mix of vocabulary and grammar questions.</p>
              <MultipleChoiceGame />
            </div>
            
            <div className="game-card full-width">
              <h3>Phrase Matching</h3>
              <p>Match English phrases with their Egyptian Arabic translations in this engaging game.</p>
              <PhraseMatchGame />
            </div>
          </div>
        </section>

        {/* Grammar Section */}
        <section id="grammar" className="section-card grammar-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">📚</span>
              Grammar Fundamentals
            </h2>
            <p className="section-description">
              Master Egyptian Arabic grammar with focused lessons on verb conjugation, negation, questions, 
              prepositions, and possessive pronouns.
            </p>
          </div>
          
          <div className="grammar-highlights">
            <div className="grammar-topic">
              <h4>Present Tense Verbs</h4>
              <p>Learn how to conjugate verbs with prefixes: بـ, بيـ, بتـ, بنـ</p>
            </div>
            <div className="grammar-topic">
              <h4>Negation</h4>
              <p>Master how to make sentences negative using مش and other negation words</p>
            </div>
            <div className="grammar-topic">
              <h4>Question Words</h4>
              <p>Learn essential question words: فين؟, امتى؟, ليه؟, كام؟</p>
            </div>
            <div className="grammar-topic">
              <h4>Possessive Pronouns</h4>
              <p>Understand how to show ownership with suffixes: ـي, ـك, ـه, ـنا</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-card">
          <ContactForm />
        </section>
      </main>

      <Footer toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
}

export default App;