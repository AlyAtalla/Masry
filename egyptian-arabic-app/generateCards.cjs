const fs = require("fs");

const basePhrases = [
  { arabic: "إزيك؟", english: "How are you?", notes: "Informal greeting" },
  { arabic: "صباح الخير", english: "Good morning" },
  { arabic: "مساء الخير", english: "Good evening" },
  { arabic: "شكراً", english: "Thank you" },
  { arabic: "من فضلك", english: "Please" },
  { arabic: "آسف", english: "Sorry" },
  { arabic: "نعم", english: "Yes" },
  { arabic: "لا", english: "No" },
  { arabic: "إزي حضرتك؟", english: "How are you? (formal)", notes: "Formal greeting" },
  { arabic: "تمام", english: "Fine" },
  { arabic: "كويس", english: "Good" },
  { arabic: "حاضر", english: "Okay / Sure" },
  { arabic: "بكره", english: "Tomorrow" },
  { arabic: "امبارح", english: "Yesterday" },
  { arabic: "النهاردة", english: "Today" },
  { arabic: "فين؟", english: "Where?" },
  { arabic: "امتى؟", english: "When?" },
  { arabic: "ازاي؟", english: "How?" },
  { arabic: "ليه؟", english: "Why?" }
];

function generateCards(basePhrases, startId = 1, total = 100) {
  const cards = [];
  for (let i = 0; i < total; i++) {
    const phrase = basePhrases[i % basePhrases.length];
    cards.push({
      id: String(startId + i),
      front: phrase.arabic,
      back: phrase.english,
      notes: phrase.notes || ""
    });
  }
  return cards;
}

const cards = generateCards(basePhrases, 1, 100);

const tsContent = `export type Card = {
  id: string;
  front: string;
  back: string;
  notes?: string;
};

export const cards: Card[] = ${JSON.stringify(cards, null, 2)};
`;

fs.writeFileSync("src/data/cards.ts", tsContent);
console.log("✅ cards.ts generated with", cards.length, "cards");
