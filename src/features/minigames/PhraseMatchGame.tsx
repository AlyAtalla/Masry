import { useState, useEffect } from "react";
import type { Phrase } from "../../data/cards";
import { masterPhrases } from "../../data/cards";
import "./PhraseMatchGame.css";

// Define local grammar phrases since they might not be in masterPhrases
const grammarPhrases: Phrase[] = [
  { english: "I write", arabic: "أنا بكتب", category: "verbs" },
  { english: "You write (m)", arabic: "أنت بتكتب", category: "verbs" },
  { english: "He writes", arabic: "هو بيكتب", category: "verbs" },
  { english: "She writes", arabic: "هي بتكتب", category: "verbs" },
  { english: "We write", arabic: "إحنا بنكتب", category: "verbs" },
  { english: "I don't know", arabic: "مش عارف", category: "negation" },
  { english: "I'm not going", arabic: "مش رايح", category: "negation" },
  { english: "Where?", arabic: "فين؟", category: "questions" },
  { english: "When?", arabic: "امتى؟", category: "questions" },
  { english: "Why?", arabic: "ليه؟", category: "questions" },
  { english: "My house", arabic: "بيتي", category: "possession" },
  { english: "Your book (m)", arabic: "كتابك", category: "possession" },
  { english: "His book", arabic: "كتابه", category: "possession" },
  { english: "In the house", arabic: "في البيت", category: "prepositions" },
  { english: "On the table", arabic: "على الترابيزة", category: "prepositions" },
  { english: "With me", arabic: "معايا", category: "prepositions" },
];

const PHRASES_PER_SLIDE = 8;

type GameMode = 'vocabulary' | 'grammar' | 'mixed';

const PhraseMatchGame = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gameMode, setGameMode] = useState<GameMode>('mixed');
  const [englishColumn, setEnglishColumn] = useState<Phrase[]>([]);
  const [arabicColumn, setArabicColumn] = useState<Phrase[]>([]);
  const [selectedEnglish, setSelectedEnglish] = useState<number | null>(null);
  const [selectedArabic, setSelectedArabic] = useState<number | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<number[][]>([]);
  const [score, setScore] = useState({ correct: 0, attempts: 0 });
  const [streak, setStreak] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showCategories, setShowCategories] = useState(false);
  const [timer, setTimer] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  // Get phrases based on selected game mode
  const getPhrasesForMode = (): Phrase[] => {
    const allPhrases = [...masterPhrases];
    
    switch (gameMode) {
      case 'grammar':
        return grammarPhrases;
      case 'mixed':
        return [...grammarPhrases, ...masterPhrases.slice(0, 20)];
      case 'vocabulary':
      default:
        return allPhrases;
    }
  };

  const phrasesForMode = getPhrasesForMode();
  const totalSlides = Math.ceil(phrasesForMode.length / PHRASES_PER_SLIDE);

  const loadSlide = (slideIndex: number) => {
    const start = slideIndex * PHRASES_PER_SLIDE;
    const slice = phrasesForMode.slice(start, start + PHRASES_PER_SLIDE);
    setEnglishColumn([...slice].sort(() => Math.random() - 0.5));
    setArabicColumn([...slice].sort(() => Math.random() - 0.5));
    setSelectedEnglish(null);
    setSelectedArabic(null);
    setMatchedPairs([]);
    setGameComplete(false);
    setTimer(0);
  };

  useEffect(() => {
    loadSlide(currentSlide);
  }, [currentSlide, gameMode]);

  // Timer effect
  useEffect(() => {
    if (matchedPairs.length < englishColumn.length && englishColumn.length > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (englishColumn.length > 0) {
      setGameComplete(true);
    }
  }, [matchedPairs.length, englishColumn.length]);

  const handleSelectEnglish = (index: number) => {
    if (matchedPairs.some(pair => pair[0] === index)) return;
    setSelectedEnglish(index);
    if (selectedArabic !== null) checkMatch(index, selectedArabic);
  };

  const handleSelectArabic = (index: number) => {
    if (matchedPairs.some(pair => pair[1] === index)) return;
    setSelectedArabic(index);
    if (selectedEnglish !== null) checkMatch(selectedEnglish, index);
  };

  const checkMatch = (engIndex: number, arIndex: number) => {
    const isMatch = englishColumn[engIndex].english === arabicColumn[arIndex].english;
    
    if (isMatch) {
      setMatchedPairs(prev => [...prev, [engIndex, arIndex]]);
      setScore(prev => ({ correct: prev.correct + 1, attempts: prev.attempts + 1 }));
      setStreak(prev => prev + 1);
    } else {
      setScore(prev => ({ ...prev, attempts: prev.attempts + 1 }));
      setStreak(0);
    }
    
    setSelectedEnglish(null);
    setSelectedArabic(null);
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleReset = () => {
    loadSlide(currentSlide);
    setScore({ correct: 0, attempts: 0 });
    setStreak(0);
    setHintsUsed(0);
  };

  const useHint = () => {
    if (hintsUsed >= 3) return;
    
    const unmatchedIndices = englishColumn
      .map((_, index) => index)
      .filter(index => !matchedPairs.some(pair => pair[0] === index));
    
    if (unmatchedIndices.length > 0) {
      const randomIndex = unmatchedIndices[Math.floor(Math.random() * unmatchedIndices.length)];
      const matchingArabicIndex = arabicColumn.findIndex(
        phrase => phrase.english === englishColumn[randomIndex].english
      );
      
      // Temporarily highlight the match
      setSelectedEnglish(randomIndex);
      setSelectedArabic(matchingArabicIndex);
      setTimeout(() => {
        setSelectedEnglish(null);
        setSelectedArabic(null);
      }, 1000);
      
      setHintsUsed(prev => prev + 1);
    }
  };

  const getAccuracy = () => {
    return score.attempts > 0 ? Math.round((score.correct / score.attempts) * 100) : 0;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="phrase-match-game">
      <div className="game-header">
        <h2>Phrase Matching Game 🧩</h2>
        <p>Match English phrases with their Egyptian Arabic translations.</p>
      </div>

      <div className="game-stats">
        <div className="stat-item">
          <span className="stat-label">Score</span>
          <span className="stat-value">{score.correct}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Accuracy</span>
          <span className="stat-value">{getAccuracy()}%</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Time</span>
          <span className="stat-value">{formatTime(timer)}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Hints</span>
          <span className="stat-value">{3 - hintsUsed} left</span>
        </div>
        {streak > 2 && (
          <div className="stat-item streak">
            <span className="stat-label">Streak</span>
            <span className="stat-value">{streak} 🔥</span>
          </div>
        )}
      </div>

      <div className="mode-selector">
        <button 
          className={`mode-btn ${gameMode === 'vocabulary' ? 'active' : ''}`}
          onClick={() => setGameMode('vocabulary')}
        >
          Vocabulary
        </button>
        <button 
          className={`mode-btn ${gameMode === 'grammar' ? 'active' : ''}`}
          onClick={() => setGameMode('grammar')}
        >
          Grammar
        </button>
        <button 
          className={`mode-btn ${gameMode === 'mixed' ? 'active' : ''}`}
          onClick={() => setGameMode('mixed')}
        >
          Mixed
        </button>
        <button 
          className="hint-btn"
          onClick={useHint}
          disabled={hintsUsed >= 3}
        >
          💡 Hint ({3 - hintsUsed})
        </button>
        <button 
          className="category-btn"
          onClick={() => setShowCategories(!showCategories)}
        >
          {showCategories ? 'Hide Categories' : 'Show Categories'}
        </button>
      </div>

      {showCategories && (
        <div className="categories-info">
          <p><strong>Categories:</strong> 
            {[...new Set(englishColumn.map(p => p.category))].filter(Boolean).map(cat => (
              <span key={cat} className="category-tag">{cat}</span>
            ))}
          </p>
        </div>
      )}

      <div className="game-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(matchedPairs.length / englishColumn.length) * 100}%` }}
          ></div>
        </div>
        <p className="progress-text">
          Matched: {matchedPairs.length} of {englishColumn.length}
        </p>
      </div>

      <div className="columns-container">
        <div className="column">
          <h3 className="column-title">English</h3>
          {englishColumn.map((phrase, idx) => {
            const isMatched = matchedPairs.some(p => p[0] === idx);
            const isSelected = selectedEnglish === idx;
            const categoryClass = phrase.category ? `category-${phrase.category}` : '';
            
            return (
              <div
                key={idx}
                className={`phrase-card ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''} ${categoryClass}`}
                onClick={() => handleSelectEnglish(idx)}
              >
                <div className="phrase-content">
                  <div className="phrase-text">{phrase.english}</div>
                  {phrase.category && showCategories && (
                    <span className="category-badge">{phrase.category}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="column">
          <h3 className="column-title">Egyptian Arabic</h3>
          {arabicColumn.map((phrase, idx) => {
            const isMatched = matchedPairs.some(p => p[1] === idx);
            const isSelected = selectedArabic === idx;
            const categoryClass = phrase.category ? `category-${phrase.category}` : '';
            
            return (
              <div
                key={idx}
                className={`phrase-card ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''} ${categoryClass}`}
                onClick={() => handleSelectArabic(idx)}
              >
                <div className="phrase-content">
                  <div className="phrase-text arabic-text">{phrase.arabic}</div>
                  {phrase.category && showCategories && (
                    <span className="category-badge">{phrase.category}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {gameComplete && (
        <div className="completion-message">
          <h3>🎉 Level Complete!</h3>
          <p>Time: {formatTime(timer)} | Accuracy: {getAccuracy()}% | Score: {score.correct}</p>
          <div className="completion-stats">
            <div>Perfect matches: {matchedPairs.length}</div>
            <div>Hints used: {hintsUsed}</div>
            <div>Best streak: {streak}</div>
          </div>
        </div>
      )}

      <div className="controls">
        <button className="control-btn prev-btn" onClick={handlePrev}>
          ⬅ Previous Set
        </button>
        <button className="control-btn reset-btn" onClick={handleReset}>
          🔄 Reset Game
        </button>
        <button className="control-btn next-btn" onClick={handleNext}>
          Next Set ➡
        </button>
      </div>

      <div className="instructions">
        <p><strong>How to play:</strong> Click an English phrase, then click its Arabic translation to make a match. Try to complete all matches!</p>
        <p><strong>Game Modes:</strong> 
          <span className="mode-indicator vocabulary">Vocabulary</span> - Regular phrases |
          <span className="mode-indicator grammar">Grammar</span> - Grammar-focused phrases |
          <span className="mode-indicator mixed">Mixed</span> - Both types
        </p>
      </div>
    </div>
  );
};

export default PhraseMatchGame;