import { useState } from "react";
import { translateText } from "../utils/translate";

type CardProps = {
  front: string;
  back: string;
  isFlipped: boolean;
  onFlip: () => void;
  notes?: string;
};

export default function Card({ front, back, isFlipped, onFlip, notes }: CardProps) {
  const [translation, setTranslation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTranslate = async (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent flip
    setLoading(true);
    const result = await translateText(front);
    setTranslation(result);
    setLoading(false);
  };

  return (
    <div className={`flashcard ${isFlipped ? "flipped" : ""}`} onClick={onFlip}>
      <div className="card-inner">
        <div className="card-face front arabic">{front}</div>
        <div className="card-face back">
          <div>{back}</div>
          {notes && <small style={{ display: "block", marginTop: "0.5rem" }}>{notes}</small>}
          {translation && <p style={{ marginTop: "0.5rem", fontStyle: "italic" }}>{translation}</p>}
        </div>
      </div>
      
    </div>
  );
}
