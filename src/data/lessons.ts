export type LessonItem = {
  id: string;
  arabic: string;
  transliteration: string;
  meaning: string;
  notes?: string;
};

export type Lesson = {
  id: string;
  title: string;
  description: string;
  items: LessonItem[];
};

export const lessons: Lesson[] = [
  {
    id: "greetings-basic",
    title: "Basic Greetings",
    description: "Common informal greetings used daily in Egypt.",
    items: [
      {
        id: "greet-1",
        arabic: "إزيك؟",
        transliteration: "ezzayyak?",
        meaning: "How are you?",
        notes: "Used with men; to women: إزيِّك؟ (ezzayyek)"
      },
      {
        id: "greet-2",
        arabic: "عامل إيه؟",
        transliteration: "aamel eh?",
        meaning: "How’s it going?",
        notes: "Very casual, common among friends"
      },
      {
        id: "greet-3",
        arabic: "صباح الخير",
        transliteration: "sabah el-kheir",
        meaning: "Good morning"
      },
      {
        id: "greet-4",
        arabic: "مساء الخير",
        transliteration: "masaʼ el-kheir",
        meaning: "Good evening"
      },
      {
        id: "greet-5",
        arabic: "الحمد لله",
        transliteration: "el-hamdu lillah",
        meaning: "Fine / Thanks God",
        notes: "Typical response to greetings"
      }
    ]
  }
];
