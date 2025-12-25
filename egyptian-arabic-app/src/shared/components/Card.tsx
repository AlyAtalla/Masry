import React, { useState } from "react";
import type { Card as CardType } from "../../data/cards";
import "./Card.css";

interface CardProps {
  card: CardType;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-inner">
        <div className="card-front">
          {card.front}
          {card.transliteration && <div className="transliteration">{card.transliteration}</div>}
        </div>
        <div className="card-back">
          {card.back}
          {card.notes && <div className="notes">{card.notes}</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
