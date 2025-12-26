
export type CardGameState = {
  currentIndex: number;
  isFlipped: boolean;
};

export function createInitialState(): CardGameState {
  return {
    currentIndex: 0,
    isFlipped: false,
  };
}

export function flipCard(state: CardGameState): CardGameState {
  return {
    ...state,
    isFlipped: !state.isFlipped,
  };
}

export function nextCard(
  state: CardGameState,
  cardsLength: number
): CardGameState {
  return {
    currentIndex: (state.currentIndex + 1) % cardsLength,
    isFlipped: false,
  };
}

export function previousCard(
  state: CardGameState,
  cardsLength: number
): CardGameState {
  return {
    currentIndex:
      (state.currentIndex - 1 + cardsLength) % cardsLength,
    isFlipped: false,
  };
}
