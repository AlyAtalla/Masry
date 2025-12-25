type CardProps = {
  front: string;
  back: string;
  isFlipped: boolean;
  onFlip: () => void;
};

export default function Card({
  front,
  back,
  isFlipped,
  onFlip,
}: CardProps) {
  return (
    <div className="flashcard" onClick={onFlip}>
      {!isFlipped ? (
        <div className="card-face arabic">{front}</div>
      ) : (
        <div className="card-face">{back}</div>
      )}
    </div>
  );
}
