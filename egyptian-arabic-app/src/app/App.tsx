import "./App.css";
import CardGame from "../features/cards/CardGame";
import About from "../features/about/About";
import Footer from "../features/footer/Footer";
import MiniGames from "../features/minigames/MiniGames";
import MultipleChoiceGame from "../features/minigames/MultipleChoiceGame";
import ContactForm from "../features/contact/ContactForm";

function App() {
  return (
    <div className="app">
      <div className="background-overlay"></div>

      <header className="app-header">
        <div className="container header-inner">
          <h1>🇪🇬 Egyptian Arabic</h1>
          <span className="subtitle">Learn real Egyptian Arabic</span>
        </div>
      </header>

      <main className="container">
        <section className="welcome">
          <h2>Welcome 👋</h2>
          <p>
            This is a <strong>minimal, fun environment</strong> to refresh your
            Egyptian Arabic. If you’re really excited to learn more, book your next class with me on{" "}
            <a
              href="https://preply.com/en/tutor/2970347"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preply
            </a>!
          </p>
        </section>

        <section className="cards-section">
          <h2>Flashcards</h2>
          <p>Flip the cards to see translations and transliterations.</p>
          <CardGame />
          <About />
        </section>

        <MiniGames />
        <MultipleChoiceGame />
        <ContactForm />
      </main>

      <Footer />

      <footer className="app-footer">
        <div className="container">© 2025 Egyptian Arabic Learning App</div>
      </footer>
    </div>
  );
}

export default App;
