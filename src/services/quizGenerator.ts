
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: string;
}

export interface GeneratedQuiz {
  id: string;
  title: string;
  subject: string;
  difficulty: string;
  totalQuestions: number;
  questions: QuizQuestion[];
}

const subjects = ["Mathematics", "Science", "History", "English", "Geography"];
const difficulties = ["Easy", "Medium", "Hard"];

const mathQuestions = [
  {
    question: "What is 15 + 27?",
    options: ["40", "42", "44", "46"],
    correct: "42"
  },
  {
    question: "Solve: 3x + 7 = 22",
    options: ["x = 5", "x = 6", "x = 7", "x = 8"],
    correct: "x = 5"
  },
  {
    question: "What is the area of a circle with radius 5?",
    options: ["25π", "10π", "50π", "15π"],
    correct: "25π"
  },
  {
    question: "Simplify: 2(x + 3) - 4",
    options: ["2x + 2", "2x + 6", "2x - 4", "2x + 10"],
    correct: "2x + 2"
  },
  {
    question: "What is 8² - 3²?",
    options: ["55", "64", "73", "81"],
    correct: "55"
  }
];

const scienceQuestions = [
  {
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correct: "Au"
  },
  {
    question: "How many bones are in the human body?",
    options: ["206", "208", "210", "212"],
    correct: "206"
  },
  {
    question: "What planet is closest to the Sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    correct: "Mercury"
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correct: "Carbon Dioxide"
  },
  {
    question: "What is the speed of light?",
    options: ["300,000 km/s", "299,792,458 m/s", "186,000 mph", "All of the above"],
    correct: "All of the above"
  }
];

const historyQuestions = [
  {
    question: "In which year did World War II end?",
    options: ["1944", "1945", "1946", "1947"],
    correct: "1945"
  },
  {
    question: "Who was the first President of the United States?",
    options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
    correct: "George Washington"
  },
  {
    question: "Which empire was ruled by Julius Caesar?",
    options: ["Greek Empire", "Roman Empire", "Persian Empire", "Egyptian Empire"],
    correct: "Roman Empire"
  },
  {
    question: "In which year did the Berlin Wall fall?",
    options: ["1987", "1988", "1989", "1990"],
    correct: "1989"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correct: "Leonardo da Vinci"
  }
];

const questionPools = {
  Mathematics: mathQuestions,
  Science: scienceQuestions,
  History: historyQuestions,
  English: mathQuestions, // Using math as placeholder
  Geography: scienceQuestions // Using science as placeholder
};

export const generateQuiz = (): GeneratedQuiz => {
  const subject = subjects[Math.floor(Math.random() * subjects.length)];
  const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
  const questionPool = questionPools[subject as keyof typeof questionPools];
  
  // Shuffle and select 5 questions
  const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
  const selectedQuestions = shuffled.slice(0, 5).map((q, index) => ({
    id: index + 1,
    ...q
  }));

  return {
    id: Math.random().toString(36).substr(2, 9),
    title: `${subject} Quiz`,
    subject,
    difficulty,
    totalQuestions: 5,
    questions: selectedQuestions
  };
};
