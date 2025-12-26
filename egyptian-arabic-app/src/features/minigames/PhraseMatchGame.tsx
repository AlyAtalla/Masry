import { useState, useEffect } from "react";
import type { Phrase } from "../../data/phrases";
import { masterPhrases } from "../../data/phrases";
import "./PhraseMatchGame.css";

const PHRASES_PER_SLIDE = 8;

const PhraseMatchGame = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [englishColumn, setEnglishColumn] = useState<Phrase[]>([]);
  const [arabicColumn, setArabicColumn] = useState<Phrase[]>([]);
  const [selectedEnglish, setSelectedEnglish] = useState<number | null>(null);
  const [selectedArabic, setSelectedArabic] = useState<number | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<number[][]>([]);

  const totalSlides = Math.ceil(masterPhrases.length / PHRASES_PER_SLIDE);

  const loadSlide = (slideIndex: number) => {
    const start = slideIndex * PHRASES_PER_SLIDE;
    const slice = masterPhrases.slice(start, start + PHRASES_PER_SLIDE);
    setEnglishColumn(slice);
    setArabicColumn([...slice].sort(() => Math.random() - 0.5));
    setSelectedEnglish(null);
    setSelectedArabic(null);
    setMatchedPairs([]);
  };

  useEffect(() => {
    loadSlide(currentSlide);
  }, [currentSlide]);

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
    if (englishColumn[engIndex].english === arabicColumn[arIndex].english) {
      setMatchedPairs(prev => [...prev, [engIndex, arIndex]]);
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
  };

  return (
    <div className="phrase-match-game">
      <div className="controls">
        <button onClick={handlePrev}>⬅ Previous</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleNext}>Next ➡</button>
      </div>
      <div className="columns">
        <div className="column">
          {englishColumn.map((phrase, idx) => (
            <div
              key={idx}
              className={`phrase-card ${matchedPairs.some(p => p[0] === idx) ? "selected" : ""}`}
              onClick={() => handleSelectEnglish(idx)}
            >
              {phrase.english}
            </div>
          ))}
        </div>
        <div className="column">
          {arabicColumn.map((phrase, idx) => (
            <div
              key={idx}
              className={`phrase-card ${matchedPairs.some(p => p[1] === idx) ? "selected" : ""}`}
              onClick={() => handleSelectArabic(idx)}
            >
              {phrase.arabic}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhraseMatchGame;
