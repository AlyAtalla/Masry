import  { useState } from "react";
import { cards } from "../../data/cards";
import Card from "../../shared/components/Card"; // your Card.tsx
import "./CardGame.css";

const CARDS_PER_PAGE = 12;

const CardGame = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
  const start = currentPage * CARDS_PER_PAGE;
  const currentCards = shuffledCards.slice(start, start + CARDS_PER_PAGE);

  const totalPages = Math.ceil(cards.length / CARDS_PER_PAGE);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="card-game">
      <div className="cards-container">
        {currentCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrev}>⬅ Prev</button>
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button onClick={handleNext}>Next ➡</button>
      </div>
    </section>
  );
};

export default CardGame;
