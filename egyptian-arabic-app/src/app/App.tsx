import "./App.css";
import CardGame from "../features/cards/CardGame";

function App() {
  return (
    <>
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
            This app helps you learn <strong>real Egyptian Arabic</strong> —
            the way people actually speak on the street.
          </p>
        </section>
              <CardGame/>

      </main>
    </>
  );
}

export default App;
