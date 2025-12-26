import React, { useState } from "react";
import { cards } from "../../data/cards";
import "./MiniGames.css";


const getRandomCard = () => cards[Math.floor(Math.random() * cards.length)];

const MiniGames: React.FC = () => {
  const [question, setQuestion] = useState(getRandomCard());
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userAnswer.trim().toLowerCase() === question.back.toLowerCase()) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback(`❌ Wrong! Correct: ${question.back}`);
    }
  };

  const nextQuestion = () => {
    setQuestion(getRandomCard());
    setUserAnswer("");
    setFeedback("");
  };

  return (
    <section className="mini-games">
      <h2>Mini Game 🎯</h2>
      <p>Type the English translation of the Egyptian Arabic phrase:</p>
      <div className="question-card">
        <h3>{question.front} ({question.transliteration})</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Type your answer..."
        />
        <button type="submit">Check</button>
      </form>

      {feedback && (
        <>
          <p className="feedback">{feedback}</p>
          <button onClick={nextQuestion}>Next Question ➡</button>
        </>
      )}
    </section>
  );
};

export default MiniGames;
