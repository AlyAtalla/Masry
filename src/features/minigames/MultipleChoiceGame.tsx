import React, { useState, useEffect } from "react";
import { cards } from "../../data/cards";
import "./MiniGames.css"; // reuse styles

const OPTIONS_COUNT = 4;

const getRandomOptions = (correctCard: typeof cards[0]) => {
  const options = new Set<string>();
  options.add(correctCard.back);

  while (options.size < OPTIONS_COUNT) {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    options.add(randomCard.back);
  }

  return Array.from(options).sort(() => Math.random() - 0.5);
};

const MultipleChoiceGame: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(cards[Math.floor(Math.random() * cards.length)]);
  const [options, setOptions] = useState<string[]>(getRandomOptions(currentCard));
  const [feedback, setFeedback] = useState<string>("");

  useEffect(() => {
    setOptions(getRandomOptions(currentCard));
    setFeedback("");
  }, [currentCard]);

  const handleAnswer = (answer: string) => {
    if (answer === currentCard.back) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback(`❌ Wrong! Correct: ${currentCard.back}`);
    }
  };

  const nextQuestion = () => {
    setCurrentCard(cards[Math.floor(Math.random() * cards.length)]);
  };

  return (
    <section className="mini-games">
      <h2>Multiple Choice Quiz 🎯</h2>
      <p>Select the correct English translation for this phrase:</p>
      <div className="question-card">
        <h3>{currentCard.front} ({currentCard.transliteration})</h3>
      </div>

      <div className="options">
        {options.map((option) => (
          <button key={option} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>

      {feedback && (
        <>
          <p className="feedback">{feedback}</p>
          <button onClick={nextQuestion}>Next Question ➡</button>
        </>
      )}
    </section>
  );
};

export default MultipleChoiceGame;
