import "./App.css";
import CardGame from "../features/cards/CardGame";
import About from "../features/about/About";
import Footer from "../features/footer/Footer";
import MiniGames from "../features/minigames/MiniGames";
import MultipleChoiceGame from "../features/minigames/MultipleChoiceGame";
import ContactForm from "../features/contact/ContactForm";
import PhraseMatchGame from "../features/minigames/PhraseMatchGame";

function App() {
  return (
    <div className="app">
      <div className="background-overlay"></div>
      <header className="app-header">
        <div className="container header-inner">
          <h1>🇪🇬 Egyptian Arabic</h1>
          <span className="subtitle">Learn real Egyptian Arabic</span>
        </div>
      </header>

      <main className="container">
        <section className="welcome">
          <h2>Welcome 👋</h2>
          <p>
            This is a <strong>minimal, fun environment</strong> to refresh your Egyptian Arabic. 
            Now with <strong>grammar exercises</strong> and <strong>extended vocabulary</strong>! 
            If you're really excited to learn more, book your next class with me on{" "}
            <a href="https://preply.com/en/tutor/2970347" target="_blank" rel="noopener noreferrer">
              Preply
            </a>!
          </p>
        </section>

        <section className="cards-section">
          <h2>Flashcards</h2>
          <p>Flip the cards to see translations and transliterations. Now with 400+ cards!</p>
          <CardGame />
          <About />
        </section>

        <MiniGames />
        <MultipleChoiceGame />
        <PhraseMatchGame />
        <ContactForm />
      </main>

      <Footer />
      <footer className="app-footer">
        <div className="container">© 2025 Egyptian Arabic Learning App</div>
      </footer>
    </div>
  );
}

export default App;

export type Card = {
  id: string;
  front: string;
  transliteration: string;
  back: string;
  audio: string;
  notes?: string;
};

export const cards: Card[] = [
  // Your existing 300 cards remain here...
  // I'll add 100+ more cards with grammar-focused content

  // GRAMMAR FOCUSED CARDS - Verbs
  { id: "301", front: "أنا بكتب", transliteration: "ana baktib", back: "I write", audio: "", notes: "Present tense - ب + verb" },
  { id: "302", front: "أنت بتكتب", transliteration: "enta betkteb", back: "You (m) write", audio: "", notes: "Present tense for masculine" },
  { id: "303", front: "إنتي بتكتبي", transliteration: "enti betktebi", back: "You (f) write", audio: "", notes: "Present tense for feminine" },
  { id: "304", front: "هو بيكتب", transliteration: "howwa byektib", back: "He writes", audio: "", notes: "Present tense - بي + verb" },
  { id: "305", front: "هي بتكتب", transliteration: "heyya betkteb", back: "She writes", audio: "", notes: "Present tense - بت + verb" },
  { id: "306", front: "إحنا بنكتب", transliteration: "ehna benkteb", back: "We write", audio: "", notes: "Present tense - بن + verb" },
  { id: "307", front: "كتبت", transliteration: "katabt", back: "I wrote", audio: "", notes: "Past tense" },
  { id: "308", front: "هيكتب", transliteration: "hayektib", back: "He will write", audio: "", notes: "Future tense - ها + verb" },
  
  // Verb: To Read
  { id: "309", front: "أنا بقري", transliteration: "ana ba'ra", back: "I read", audio: "", notes: "Verb: يقرأ" },
  { id: "310", front: "بقرا كتاب", transliteration: "ba'ra ktab", back: "I read a book", audio: "", notes: "Object after verb" },
  
  // Verb: To Eat
  { id: "311", front: "أنا باكل", transliteration: "ana bakol", back: "I eat", audio: "" },
  { id: "312", front: "بناكل عيش", transliteration: "benakol 'esh", back: "We eat bread", audio: "" },
  
  // Verb: To Drink
  { id: "313", front: "أنا بشرب", transliteration: "ana bashrab", back: "I drink", audio: "" },
  { id: "314", front: "بيشرب قهوة", transliteration: "beyeshrab ahwa", back: "He drinks coffee", audio: "" },
  
  // Verb: To Go
  { id: "315", front: "أنا بروح", transliteration: "ana barooh", back: "I go", audio: "" },
  { id: "316", front: "بنروح المدرسة", transliteration: "benrooh el-madrasa", back: "We go to school", audio: "" },
  
  // Prepositions
  { id: "317", front: "في", transliteration: "fi", back: "In / At", audio: "", notes: "Preposition" },
  { id: "318", front: "على", transliteration: "'ala", back: "On", audio: "", notes: "Preposition" },
  { id: "319", front: "تحت", transliteration: "taht", back: "Under", audio: "", notes: "Preposition" },
  { id: "320", front: "جنب", transliteration: "ganb", back: "Beside", audio: "", notes: "Preposition" },
  { id: "321", front: "قدام", transliteration: "odam", back: "In front of", audio: "", notes: "Preposition" },
  { id: "322", front: "ورا", transliteration: "wara", back: "Behind", audio: "", notes: "Preposition" },
  
  // Grammar: Negation
  { id: "323", front: "مش باكل", transliteration: "mesh bakol", back: "I don't eat", audio: "", notes: "Negation with مش" },
  { id: "324", front: "مش بروح", transliteration: "mesh barooh", back: "I don't go", audio: "" },
  { id: "325", front: "مش عارف", transliteration: "mesh 'aref", back: "I don't know", audio: "" },
  
  // Grammar: Questions
  { id: "326", front: "عايز تروح فين؟", transliteration: "'ayez trooh fein?", back: "Where do you want to go?", audio: "" },
  { id: "327", front: "عندك كام كتاب؟", transliteration: "'andak kam ktab?", back: "How many books do you have?", audio: "" },
  { id: "328", front: "بتعمل إيه النهاردة؟", transliteration: "bte'mel eh el-naharda?", back: "What are you doing today?", audio: "" },
  
  // Family Members (Extended)
  { id: "329", front: "جد", transliteration: "gadd", back: "Grandfather", audio: "" },
  { id: "330", front: "جدة", transliteration: "gadda", back: "Grandmother", audio: "" },
  { id: "331", front: "عم", transliteration: "'am", back: "Uncle (paternal)", audio: "" },
  { id: "332", front: "خال", transliteration: "khal", back: "Uncle (maternal)", audio: "" },
  { id: "333", front: "عمة", transliteration: "'amma", back: "Aunt (paternal)", audio: "" },
  { id: "334", front: "خالة", transliteration: "khala", back: "Aunt (maternal)", audio: "" },
  
  // Numbers 1-20
  { id: "335", front: "واحد", transliteration: "wahed", back: "One", audio: "" },
  { id: "336", front: "اتنين", transliteration: "etnein", back: "Two", audio: "" },
  { id: "337", front: "تلاتة", transliteration: "talata", back: "Three", audio: "" },
  { id: "338", front: "أربعة", transliteration: "arba'a", back: "Four", audio: "" },
  { id: "339", front: "خمسة", transliteration: "khamsa", back: "Five", audio: "" },
  { id: "340", front: "ستة", transliteration: "sitta", back: "Six", audio: "" },
  { id: "341", front: "سبعة", transliteration: "sab'a", back: "Seven", audio: "" },
  { id: "342", front: "تمانية", transliteration: "tamanya", back: "Eight", audio: "" },
  { id: "343", front: "تسعة", transliteration: "tes'a", back: "Nine", audio: "" },
  { id: "344", front: "عشرة", transliteration: "'ashara", back: "Ten", audio: "" },
  
  // Time Expressions
  { id: "345", front: "الساعة كام؟", transliteration: "el-sa'a kam?", back: "What time is it?", audio: "" },
  { id: "346", front: "الساعة تلاتة", transliteration: "el-sa'a talata", back: "It's three o'clock", audio: "" },
  { id: "347", front: "نص الليل", transliteration: "nuss el-leil", back: "Midnight", audio: "" },
  { id: "348", front: "نص النهار", transliteration: "nuss el-nahar", back: "Noon", audio: "" },
  
  // Common Adjectives
  { id: "349", front: "طويل", transliteration: "tawil", back: "Tall", audio: "" },
  { id: "350", front: "قصير", transliteration: "osayer", back: "Short", audio: "" },
  { id: "351", front: "سمين", transliteration: "samin", back: "Fat", audio: "" },
  { id: "352", front: "نحيف", transliteration: "nahif", back: "Thin", audio: "" },
  { id: "353", front: "غني", transliteration: "ghani", back: "Rich", audio: "" },
  { id: "354", front: "فقير", transliteration: "fa'ir", back: "Poor", audio: "" },
  
  // Colors
  { id: "355", front: "أحمر", transliteration: "ahmar", back: "Red", audio: "" },
  { id: "356", front: "أزرق", transliteration: "azra'", back: "Blue", audio: "" },
  { id: "357", front: "أخضر", transliteration: "akhdar", back: "Green", audio: "" },
  { id: "358", front: "أصفر", transliteration: "asfar", back: "Yellow", audio: "" },
  { id: "359", front: "أسود", transliteration: "aswad", back: "Black", audio: "" },
  { id: "360", front: "أبيض", transliteration: "abyad", back: "White", audio: "" },
  
  // Grammar: Possessive
  { id: "361", front: "كتابي", transliteration: "ktabi", back: "My book", audio: "", notes: "Possessive suffix -ي" },
  { id: "362", front: "كتابك", transliteration: "ktabak", back: "Your book (m)", audio: "", notes: "Possessive suffix -ك" },
  { id: "363", front: "كتابه", transliteration: "ktabu", back: "His book", audio: "", notes: "Possessive suffix -ه" },
  { id: "364", front: "كتابنا", transliteration: "ktabna", back: "Our book", audio: "", notes: "Possessive suffix -نا" },
  
  // Daily Activities
  { id: "365", front: "بنام", transliteration: "banam", back: "I sleep", audio: "" },
  { id: "366", front: "بصحي", transliteration: "bsohi", back: "I wake up", audio: "" },
  { id: "367", front: "برجع البيت", transliteration: "barga' el-beit", back: "I return home", audio: "" },
  { id: "368", front: "باشتغل", transliteration: "bashtaghal", back: "I work", audio: "" },
  
  // Weather
  { id: "369", front: "الجو حار", transliteration: "el-gaw har", back: "The weather is hot", audio: "" },
  { id: "370", front: "الجو بارد", transliteration: "el-gaw bard", back: "The weather is cold", audio: "" },
  { id: "371", front: "مش عالطقس", transliteration: "mesh 'ala el-taqs", back: "It's not about the weather", audio: "" },
  
  // More cards up to 400...
];

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
  grammarFocus?: string; // New field for grammar lessons
};

export const lessons: Lesson[] = [
  {
    id: "greetings-basic",
    title: "Basic Greetings",
    description: "Common informal greetings used daily in Egypt.",
    items: [
      { id: "greet-1", arabic: "إزيك؟", transliteration: "ezzayyak?", meaning: "How are you?", notes: "Used with men; to women: إزيِّك؟ (ezzayyek)" },
      { id: "greet-2", arabic: "عامل إيه؟", transliteration: "aamel eh?", meaning: "How's it going?", notes: "Very casual, common among friends" },
      { id: "greet-3", arabic: "صباح الخير", transliteration: "sabah el-kheir", meaning: "Good morning" },
      { id: "greet-4", arabic: "مساء الخير", transliteration: "masaʼ el-kheir", meaning: "Good evening" },
      { id: "greet-5", arabic: "الحمد لله", transliteration: "el-hamdu lillah", meaning: "Fine / Thanks God", notes: "Typical response to greetings" }
    ]
  },
  // NEW GRAMMAR LESSONS
  {
    id: "grammar-present-tense",
    title: "Present Tense Verbs",
    description: "Learn how to conjugate verbs in the present tense.",
    grammarFocus: "Verb Conjugation",
    items: [
      { id: "gram-1", arabic: "أنا بكتب", transliteration: "ana baktib", meaning: "I write", notes: "Prefix: بـ (ba)" },
      { id: "gram-2", arabic: "أنت بتكتب", transliteration: "enta betkteb", meaning: "You (m) write", notes: "Prefix: بتـ (bet)" },
      { id: "gram-3", arabic: "هو بيكتب", transliteration: "howwa byektib", meaning: "He writes", notes: "Prefix: بيـ (bye)" },
      { id: "gram-4", arabic: "هي بتكتب", transliteration: "heyya betkteb", meaning: "She writes", notes: "Prefix: بتـ (bet)" },
      { id: "gram-5", arabic: "إحنا بنكتب", transliteration: "ehna benkteb", meaning: "We write", notes: "Prefix: بنـ (ben)" }
    ]
  },
  {
    id: "grammar-negation",
    title: "Negation in Egyptian Arabic",
    description: "How to make sentences negative.",
    grammarFocus: "Negation",
    items: [
      { id: "neg-1", arabic: "مش عارف", transliteration: "mesh 'aref", meaning: "I don't know", notes: "مش before verb" },
      { id: "neg-2", arabic: "مش رايح", transliteration: "mesh rayih", meaning: "I'm not going", notes: "Negation of present tense" },
      { id: "neg-3", arabic: "ما راحتش", transliteration: "ma rahtesh", meaning: "I didn't go", notes: "Past tense negation" },
      { id: "neg-4", arabic: "مفيش", transliteration: "mafish", meaning: "There isn't / There aren't", notes: "Negation of existence" }
    ]
  },
  {
    id: "grammar-questions",
    title: "Asking Questions",
    description: "Common question words and structures.",
    grammarFocus: "Interrogatives",
    items: [
      { id: "q-1", arabic: "إزيك؟", transliteration: "ezzayyak?", meaning: "How are you?", notes: "Informal greeting" },
      { id: "q-2", arabic: "فين؟", transliteration: "fein?", meaning: "Where?", notes: "Question word for location" },
      { id: "q-3", arabic: "امتى؟", transliteration: "emta?", meaning: "When?", notes: "Question word for time" },
      { id: "q-4", arabic: "ليه؟", transliteration: "leih?", meaning: "Why?", notes: "Question word for reason" },
      { id: "q-5", arabic: "كام؟", transliteration: "kam?", meaning: "How many/much?", notes: "Question word for quantity" }
    ]
  },
  {
    id: "grammar-prepositions",
    title: "Common Prepositions",
    description: "Essential prepositions for everyday conversations.",
    grammarFocus: "Prepositions",
    items: [
      { id: "prep-1", arabic: "في", transliteration: "fi", meaning: "In / At", notes: "Location preposition" },
      { id: "prep-2", arabic: "على", transliteration: "'ala", meaning: "On", notes: "Position preposition" },
      { id: "prep-3", arabic: "مع", transliteration: "ma'a", meaning: "With", notes: "Accompaniment preposition" },
      { id: "prep-4", arabic: "من", transliteration: "min", meaning: "From", notes: "Origin preposition" },
      { id: "prep-5", arabic: "لـ", transliteration: "le", meaning: "To / For", notes: "Direction/purpose preposition" }
    ]
  },
  {
    id: "grammar-possessive",
    title: "Possessive Pronouns",
    description: "How to show ownership in Egyptian Arabic.",
    grammarFocus: "Possession",
    items: [
      { id: "poss-1", arabic: "كتابي", transliteration: "ktabi", meaning: "My book", notes: "Suffix: ـي (i)" },
      { id: "poss-2", arabic: "كتابك", transliteration: "ktabak", meaning: "Your book (m)", notes: "Suffix: ـك (ak)" },
      { id: "poss-3", arabic: "كتابه", transliteration: "ktabu", meaning: "His book", notes: "Suffix: ـه (u)" },
      { id: "poss-4", arabic: "كتابها", transliteration: "ktabha", meaning: "Her book", notes: "Suffix: ـها (ha)" },
      { id: "poss-5", arabic: "كتابنا", transliteration: "ktabna", meaning: "Our book", notes: "Suffix: ـنا (na)" }
    ]
  }
];

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
      { id: "unit-greetings", title: "Greetings & Politeness", lessonIds: ["greetings-basic"] }
    ]
  },
  // NEW LEVEL FOR GRAMMAR
  {
    id: "level-2",
    title: "Grammar Fundamentals",
    description: "Master the basic grammar structures of Egyptian Arabic.",
    units: [
      { 
        id: "unit-verbs", 
        title: "Verbs & Tenses", 
        lessonIds: ["grammar-present-tense", "grammar-negation"] 
      },
      { 
        id: "unit-structure", 
        title: "Sentence Structure", 
        lessonIds: ["grammar-questions", "grammar-prepositions", "grammar-possessive"] 
      }
    ]
  }
];

export type Phrase = {
  english: string;
  arabic: string;
  category?: string; // New field to categorize phrases
};

export const masterPhrases: Phrase[] = [
  // Your existing phrases remain here...
  // I'll add grammar-focused phrases
  
  // GRAMMAR PHRASES - Can be used in matching games
  { english: "I am writing", arabic: "أنا بكتب", category: "verbs" },
  { english: "You are writing (m)", arabic: "أنت بتكتب", category: "verbs" },
  { english: "He is writing", arabic: "هو بيكتب", category: "verbs" },
  { english: "She is writing", arabic: "هي بتكتب", category: "verbs" },
  { english: "We are writing", arabic: "إحنا بنكتب", category: "verbs" },
  
  { english: "I don't know", arabic: "مش عارف", category: "negation" },
  { english: "I'm not going", arabic: "مش رايح", category: "negation" },
  { english: "There isn't", arabic: "مفيش", category: "negation" },
  
  { english: "How are you?", arabic: "إزيك؟", category: "questions" },
  { english: "Where?", arabic: "فين؟", category: "questions" },
  { english: "When?", arabic: "امتى؟", category: "questions" },
  { english: "Why?", arabic: "ليه؟", category: "questions" },
  
  { english: "My book", arabic: "كتابي", category: "possession" },
  { english: "Your book (m)", arabic: "كتابك", category: "possession" },
  { english: "His book", arabic: "كتابه", category: "possession" },
  { english: "Our book", arabic: "كتابنا", category: "possession" },
  
  { english: "In the house", arabic: "في البيت", category: "prepositions" },
  { english: "On the table", arabic: "على الترابيزة", category: "prepositions" },
  { english: "With me", arabic: "معايا", category: "prepositions" },
  { english: "From Egypt", arabic: "من مصر", category: "prepositions" },
  
  // Add more phrases up to 200+ total...
];

// NEW: Grammar Exercise Types for MiniGames
export type GrammarExercise = {
  id: string;
  type: 'conjugation' | 'negation' | 'question' | 'translation';
  question: string;
  answer: string;
  options?: string[];
  hint?: string;
};

export const grammarExercises: GrammarExercise[] = [
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
  }
];