import React, { useState, useEffect } from "react";
import { cards } from "../../data/cards";
import "./MiniGames.css";

const OPTIONS_COUNT = 4;

// Define GrammarExercise type locally since it's not exported from cards.tsx
type GrammarExercise = {
  id: string;
  type: 'conjugation' | 'negation' | 'question' | 'translation';
  question: string;
  answer: string;
  options?: string[];
  hint?: string;
};

// Define grammarExercises locally
const grammarExercises: GrammarExercise[] = [
  {
    id: "gex-1",
    type: "conjugation",
    question: "Conjugate 'to write' for 'I':",
    answer: "بكتب",
    options: ["بكتب", "بتكتب", "بيكتب", "بنكتب"],
    hint: "Prefix بـ for first person"
  },
  {
    id: "gex-2",
    type: "conjugation",
    question: "Conjugate 'to read' for 'he':",
    answer: "بيقرا",
    options: ["بقري", "بتقري", "بيقرا", "بنقرا"],
    hint: "Prefix بيـ for third person masculine"
  },
  {
    id: "gex-3",
    type: "negation",
    question: "Make this negative: 'عارف' (I know)",
    answer: "مش عارف",
    options: ["عارف مش", "مش عارف", "ما عارفش", "عرفت"],
    hint: "Use 'مش' before the verb"
  },
  {
    id: "gex-4",
    type: "question",
    question: "How do you ask 'Where?'",
    answer: "فين؟",
    options: ["امتى؟", "ليه؟", "فين؟", "كام؟"],
    hint: "Location question word"
  },
  {
    id: "gex-5",
    type: "translation",
    question: "Translate: 'My house'",
    answer: "بيتي",
    options: ["بيتك", "بيته", "بيتي", "بيتنا"],
    hint: "Possessive suffix for first person"
  },
  {
    id: "gex-6",
    type: "conjugation",
    question: "Conjugate 'to eat' for 'we':",
    answer: "بناكل",
    options: ["باكل", "بتاكل", "بياكل", "بناكل"],
    hint: "Prefix بنـ for first person plural"
  },
  {
    id: "gex-7",
    type: "negation",
    question: "Make this negative: 'رايح' (I'm going)",
    answer: "مش رايح",
    options: ["رايح مش", "مش رايح", "ما رايحش", "روحت"],
    hint: "Use 'مش' before present participle"
  },
  {
    id: "gex-8",
    type: "question",
    question: "How do you ask 'How much/many?'",
    answer: "كام؟",
    options: ["امتى؟", "ليه؟", "فين؟", "كام؟"],
    hint: "Quantity question word"
  },
  {
    id: "gex-9",
    type: "translation",
    question: "Translate: 'His book'",
    answer: "كتابه",
    options: ["كتابي", "كتابك", "كتابه", "كتابها"],
    hint: "Possessive suffix for third person masculine"
  },
  {
    id: "gex-10",
    type: "conjugation",
    question: "Conjugate 'to drink' for 'she':",
    answer: "بتشرب",
    options: ["باشرب", "بتشرب", "بيشرب", "بنشرب"],
    hint: "Prefix بتـ for third person feminine"
  }
];

type ExerciseType = 'vocabulary' | 'grammar';

type MixedExercise = {
  type: ExerciseType;
  card?: typeof cards[0];
  grammarExercise?: GrammarExercise;
  question: string;
  correctAnswer: string;
  transliteration?: string;
};

const getRandomVocabularyExercise = (): MixedExercise => {
  const randomCard = cards[Math.floor(Math.random() * cards.length)];
  return {
    type: 'vocabulary',
    card: randomCard,
    question: `${randomCard.front} (${randomCard.transliteration})`,
    correctAnswer: randomCard.back,
    transliteration: randomCard.transliteration
  };
};

const getRandomGrammarExercise = (): MixedExercise => {
  const randomExercise = grammarExercises[Math.floor(Math.random() * grammarExercises.length)];
  return {
    type: 'grammar',
    grammarExercise: randomExercise,
    question: randomExercise.question,
    correctAnswer: randomExercise.answer
  };
};

const getRandomExercise = (): MixedExercise => {
  const isGrammar = Math.random() > 0.5 && grammarExercises.length > 0;
  return isGrammar ? getRandomGrammarExercise() : getRandomVocabularyExercise();
};

const getRandomOptions = (correctAnswer: string, type: ExerciseType = 'vocabulary'): string[] => {
  const options = new Set<string>();
  options.add(correctAnswer);

  let pool: string[] = [];
  
  if (type === 'vocabulary') {
    pool = cards.map((card: typeof cards[0]) => card.back).filter((answer: string) => answer !== correctAnswer);
  } else {
    pool = grammarExercises
      .map((ex: GrammarExercise) => ex.answer)
      .filter((answer: string) => answer !== correctAnswer && answer.length > 0);
    
    if (pool.length < OPTIONS_COUNT - 1) {
      const vocabPool = cards.map((card: typeof cards[0]) => card.back).filter((answer: string) => answer !== correctAnswer);
      pool = [...pool, ...vocabPool];
    }
  }

  while (options.size < OPTIONS_COUNT && pool.length > 0) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    options.add(pool[randomIndex]);
    pool.splice(randomIndex, 1);
  }

  return Array.from(options).sort(() => Math.random() - 0.5);
};

const MultipleChoiceGame: React.FC = () => {
  const [currentExercise, setCurrentExercise] = useState<MixedExercise>(() => getRandomExercise());
  const [options, setOptions] = useState<string[]>(
    () => getRandomOptions(currentExercise.correctAnswer, currentExercise.type)
  );
  const [feedback, setFeedback] = useState<string>("");
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [streak, setStreak] = useState(0);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    setOptions(getRandomOptions(currentExercise.correctAnswer, currentExercise.type));
    setFeedback("");
    setShowHint(false);
  }, [currentExercise]);

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === currentExercise.correctAnswer;
    
    if (isCorrect) {
      setFeedback("✅ Correct!");
      setScore(prev => ({ ...prev, correct: prev.correct + 1, total: prev.total + 1 }));
      setStreak(prev => prev + 1);
    } else {
      setFeedback(`❌ Incorrect! The correct answer is: ${currentExercise.correctAnswer}`);
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    setCurrentExercise(getRandomExercise());
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  const getExerciseTypeLabel = () => {
    if (currentExercise.type === 'grammar') {
      const grammarType = currentExercise.grammarExercise?.type || 'grammar';
      return `Grammar: ${grammarType.charAt(0).toUpperCase() + grammarType.slice(1)}`;
    }
    return "Vocabulary";
  };

  return (
    <section className="mini-games">
      <h2>Multiple Choice Quiz 🎯</h2>
      <p>Select the correct translation or answer for the given phrase or grammar question.</p>
      
      <div className="score-display">
        <div className="score-item">
          <span className="score-label">Score:</span>
          <span className="score-value">{score.correct}/{score.total}</span>
        </div>
        <div className="score-item">
          <span className="score-label">Accuracy:</span>
          <span className="score-value">
            {score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}%
          </span>
        </div>
        {streak > 1 && (
          <div className="score-item streak">
            <span className="score-label">Streak:</span>
            <span className="score-value">{streak} 🔥</span>
          </div>
        )}
      </div>

      <div className="exercise-type">
        <span className={`type-badge ${currentExercise.type}`}>
          {getExerciseTypeLabel()}
        </span>
      </div>

      <div className="question-card">
        <h3>
          {currentExercise.type === 'grammar' 
            ? currentExercise.question
            : `${currentExercise.card?.front} (${currentExercise.card?.transliteration})`
          }
        </h3>
        {currentExercise.transliteration && (
          <p className="transliteration-hint">Transliteration: {currentExercise.transliteration}</p>
        )}
      </div>

      {currentExercise.type === 'grammar' && currentExercise.grammarExercise?.hint && (
        <div className="hint-section">
          <button className="hint-button" onClick={toggleHint}>
            {showHint ? 'Hide Hint' : 'Show Hint'} 💡
          </button>
          {showHint && (
            <div className="hint-content">
              <p><strong>Hint:</strong> {currentExercise.grammarExercise.hint}</p>
            </div>
          )}
        </div>
      )}

      <div className="options">
        {options.map((option, index) => (
          <button 
            key={option} 
            onClick={() => handleAnswer(option)}
            className="option-button"
          >
            <span className="option-number">{index + 1}.</span>
            <span className="option-text">{option}</span>
          </button>
        ))}
      </div>

      {feedback && (
        <div className="feedback-section">
          <p className={`feedback ${feedback.includes('✅') ? 'correct' : 'incorrect'}`}>
            {feedback}
          </p>
          <div className="exercise-notes">
            {currentExercise.type === 'vocabulary' && currentExercise.card?.notes && (
              <p className="notes"><strong>Note:</strong> {currentExercise.card.notes}</p>
            )}
            {currentExercise.type === 'grammar' && currentExercise.grammarExercise?.type && (
              <p className="notes">
                <strong>Grammar Focus:</strong> {currentExercise.grammarExercise.type}
              </p>
            )}
          </div>
          <button onClick={nextQuestion} className="next-button">
            Next Question ➡
          </button>
        </div>
      )}

      {!feedback && (
        <div className="quick-actions">
          <button onClick={toggleHint} className="action-button">
            💡 Hint
          </button>
          <button onClick={nextQuestion} className="action-button">
            ⏭ Skip
          </button>
        </div>
      )}
    </section>
  );
};

export default MultipleChoiceGame;