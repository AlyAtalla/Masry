import { useState } from "react";
import { cards } from "../../data/cards";
import Card from "../../shared/components/Card";
import Button from "../../shared/components/Button";
import {
  createInitialState,
  flipCard,
  nextCard,
  previousCard,
} from "./card.logic";

export default function CardGame() {
  const [state, setState] = useState(createInitialState());

  const currentCard = cards[state.currentIndex];

  return (
    <section className="card-game">
      <h2>Flashcards</h2>

      <Card
        front={currentCard.front}
        back={currentCard.back}
        isFlipped={state.isFlipped}
        onFlip={() => setState(flipCard(state))}
      />

      <div className="card-controls">
        <Button
          onClick={() =>
            setState(previousCard(state, cards.length))
          }
        >
          Previous
        </Button>

        <Button
          onClick={() =>
            setState(nextCard(state, cards.length))
          }
        >
          Next
        </Button>
      </div>

      <p className="card-counter">
        Card {state.currentIndex + 1} / {cards.length}
      </p>
    </section>
  );
}
