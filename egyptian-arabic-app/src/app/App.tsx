import "./App.css";
import CardGame from "../features/cards/CardGame";
import About from "../features/about/About";
import Footer from "../features/footer/Footer";
function App() {
  return (
    <div className="app">
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
            This app helps you learn <strong>real Egyptian Arabic</strong> — the way
            people actually speak on the street.
          </p>
        </section>

        <section className="cards-section">
          <h2>Flashcards</h2>
          <p>Flip the cards to see translations and transliterations.</p>
          <CardGame />
           <About />
        </section>
      </main>
<Footer />
      <footer className="app-footer">
        <div className="container">
          © 2025 Egyptian Arabic Learning App
        </div>
      </footer>
    </div>
  );
}

export default App;
