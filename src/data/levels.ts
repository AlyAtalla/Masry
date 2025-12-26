export type Unit = {
  id: string;
  title: string;
  lessonIds: string[];
};

export type Level = {
  id: string;
  title: string;
  description: string;
  units: Unit[];
};

export const levels: Level[] = [
  {
    id: "level-1",
    title: "Survival Egyptian Arabic",
    description: "Essential phrases for everyday communication in Egypt.",
    units: [
      {
        id: "unit-greetings",
        title: "Greetings & Politeness",
        lessonIds: ["greetings-basic"]
      }
    ]
  }
];
