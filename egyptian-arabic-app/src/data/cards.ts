import { lessons } from "./lessons";

export type Card = {
  id: string;
  front: string;
  back: string;
};

export const cards: Card[] = lessons.flatMap((lesson) =>
  lesson.items.map((item) => ({
    id: item.id,
    front: item.arabic,
    back: item.meaning
  }))
);
