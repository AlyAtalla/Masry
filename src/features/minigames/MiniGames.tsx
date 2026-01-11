import React, { useState } from "react";
import { cards } from "../../data/cards";
import "./MiniGames.css";

// Define local grammar exercises since they're not exported from cards.tsx
type GrammarExercise = {
  id: string;
  type: 'conjugation' | 'negation' | 'question' | 'translation';
  question: string;
  answer: string;
  hint?: string;
};

const grammarExercises: GrammarExercise[] = [
  {
    id: "gex-1",
    type: "conjugation",
    question: "Write the conjugation for 'I write':",
    answer: "بكتب",
    hint: "Prefix بـ for first person"
  },
  {
    id: "gex-2",
    type: "conjugation",
    question: "Write the conjugation for 'He reads':",
    answer: "بيقرا",
    hint: "Prefix بيـ for third person masculine"
  },
  {
    id: "gex-3",
    type: "negation",
    question: "Make 'عارف' (I know) negative:",
    answer: "مش عارف",
    hint: "Use 'مش' before the verb"
  },
  {
    id: "gex-4",
    type: "negation",
    question: "Make 'رايح' (I'm going) negative:",
    answer: "مش رايح",
    hint: "Use 'مش' before present participle"
  },
  {
    id: "gex-5",
    type: "question",
    question: "How do you write 'Where?' in Egyptian Arabic:",
    answer: "فين",
    hint: "Location question word"
  },
  {
    id: "gex-6",
    type: "question",
    question: "How do you write 'Why?' in Egyptian Arabic:",
    answer: "ليه",
    hint: "Reason question word"
  },
  {
    id: "gex-7",
    type: "translation",
    question: "Translate 'My house' to Egyptian Arabic:",
    answer: "بيتي",
    hint: "Possessive suffix for first person"
  },
  {
    id: "gex-8",
    type: "translation",
    question: "Translate 'His book' to Egyptian Arabic:",
    answer: "كتابه",
    hint: "Possessive suffix for third person masculine"
  },
  {
    id: "gex-9",
    type: "conjugation",
    question: "Write the conjugation for 'We eat':",
    answer: "بناكل",
    hint: "Prefix بنـ for first person plural"
  },
  {
    id: "gex-10",
    type: "conjugation",
    question: "Write the conjugation for 'She drinks':",
    answer: "بتشرب",
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
  hint?: string;
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
    correctAnswer: randomExercise.answer,
    hint: randomExercise.hint
  };
};

const getRandomExercise = (): MixedExercise => {
  const isGrammar = Math.random() > 0.5 && grammarExercises.length > 0;
  return isGrammar ? getRandomGrammarExercise() : getRandomVocabularyExercise();
};

const MiniGames: React.FC = () => {
  const [currentExercise, setCurrentExercise] = useState<MixedExercise>(() => getRandomExercise());
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [streak, setStreak] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userAnswerTrimmed = userAnswer.trim().toLowerCase();
    const correctAnswerTrimmed = currentExercise.correctAnswer.toLowerCase();
    
    if (userAnswerTrimmed === correctAnswerTrimmed) {
      setFeedback("✅ Correct!");
      setScore(prev => ({ ...prev, correct: prev.correct + 1, total: prev.total + 1 }));
      setStreak(prev => prev + 1);
      setAttempts(0);
    } else {
      setAttempts(prev => prev + 1);
      if (attempts >= 1) {
        setFeedback(`❌ The correct answer is: ${currentExercise.correctAnswer}`);
        setScore(prev => ({ ...prev, total: prev.total + 1 }));
        setStreak(0);
      } else {
        setFeedback("❌ Try again! You have one more attempt.");
      }
    }
  };

  const nextQuestion = () => {
    setCurrentExercise(getRandomExercise());
    setUserAnswer("");
    setFeedback("");
    setAttempts(0);
    setShowHint(false);
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

  const handleSkip = () => {
    setFeedback(`⏭ Skipped! The answer was: ${currentExercise.correctAnswer}`);
    setScore(prev => ({ ...prev, total: prev.total + 1 }));
    setStreak(0);
  };

  return (
    <section className="mini-games">
      <h2>Translation Game 🎯</h2>
      <p>Type the correct translation or answer for the given phrase or grammar question.</p>
      
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
        <h3>{currentExercise.question}</h3>
        {currentExercise.transliteration && (
          <p className="transliteration-hint">Transliteration: {currentExercise.transliteration}</p>
        )}
        {currentExercise.type === 'grammar' && (
          <p className="exercise-instruction">
            Type your answer in Egyptian Arabic (Arabic script or transliteration)
          </p>
        )}
      </div>

      {(currentExercise.type === 'grammar' && currentExercise.hint) && (
        <div className="hint-section">
          <button 
            type="button" 
            className="hint-button" 
            onClick={toggleHint}
          >
            {showHint ? 'Hide Hint' : 'Show Hint'} 💡
          </button>
          {showHint && (
            <div className="hint-content">
              <p><strong>Hint:</strong> {currentExercise.hint}</p>
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder={
              currentExercise.type === 'grammar' 
                ? "Type your answer in Egyptian Arabic..."
                : "Type the English translation..."
            }
            autoFocus
          />
          <div className="form-buttons">
            <button type="submit" className="submit-btn">Check Answer</button>
            <button type="button" onClick={handleSkip} className="skip-btn">
              Skip Question
            </button>
          </div>
        </div>
      </form>

      {feedback && (
        <div className="feedback-section">
          <p className={`feedback ${feedback.includes('✅') ? 'correct' : feedback.includes('⏭') ? 'skipped' : 'incorrect'}`}>
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

          <div className="next-actions">
            <button onClick={nextQuestion} className="next-button">
              Next Question ➡
            </button>
            <p className="attempts-info">
              {attempts > 0 ? `Attempts: ${attempts}` : ''}
            </p>
          </div>
        </div>
      )}

      {!feedback && (
        <div className="quick-tips">
          <p><strong>Tip:</strong> {currentExercise.type === 'grammar' 
            ? 'You can use either Arabic script or transliteration for grammar answers.'
            : 'Check the transliteration if you need help with pronunciation.'
          }</p>
        </div>
      )}
    </section>
  );
};

export default MiniGames;