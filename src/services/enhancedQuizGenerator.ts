
export interface EnhancedQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
}

export interface EnhancedQuiz {
  id: string;
  title: string;
  subject: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  totalQuestions: number;
  questions: EnhancedQuizQuestion[];
  estimatedTime: number;
  learningObjectives: string[];
}

const subjectData: Record<string, any> = {
  python: {
    title: "Python Programming",
    subject: "Computer Science",
    description: "Python is a high-level, interpreted programming language with dynamic semantics.",
    topics: ["Variables", "Functions", "Classes", "Modules", "Data Structures", "Error Handling"],
    questions: [
      {
        question: "What is the correct way to create a function in Python?",
        options: ["function myFunc():", "def myFunc():", "create myFunc():", "func myFunc():"],
        correct: "def myFunc():",
        explanation: "In Python, functions are defined using the 'def' keyword."
      },
      {
        question: "Which data type is ordered and changeable in Python?",
        options: ["Tuple", "Set", "List", "Dictionary"],
        correct: "List",
        explanation: "Lists in Python are ordered and changeable (mutable)."
      }
    ]
  },
  javascript: {
    title: "JavaScript Programming",
    subject: "Computer Science",
    description: "JavaScript is a programming language that conforms to the ECMAScript specification.",
    topics: ["Variables", "Functions", "Objects", "Arrays", "DOM Manipulation", "Async Programming"],
    questions: [
      {
        question: "How do you declare a variable in JavaScript?",
        options: ["var x;", "variable x;", "v x;", "declare x;"],
        correct: "var x;",
        explanation: "Variables in JavaScript can be declared using var, let, or const keywords."
      }
    ]
  },
  calculus: {
    title: "Calculus",
    subject: "Mathematics",
    description: "Calculus is the mathematical study of continuous change.",
    topics: ["Limits", "Derivatives", "Integrals", "Series", "Applications"],
    questions: [
      {
        question: "What is the derivative of x²?",
        options: ["x", "2x", "x²", "2"],
        correct: "2x",
        explanation: "Using the power rule: d/dx(xⁿ) = n·xⁿ⁻¹, so d/dx(x²) = 2x¹ = 2x"
      }
    ]
  },
  engineering: {
    title: "Engineering Fundamentals",
    subject: "Engineering",
    description: "Core engineering principles and applications.",
    topics: ["Mechanics", "Thermodynamics", "Materials", "Circuits", "Design Process"],
    questions: [
      {
        question: "What is the first law of thermodynamics?",
        options: [
          "Energy cannot be created or destroyed",
          "Entropy always increases",
          "Force equals mass times acceleration",
          "Energy equals mass times speed of light squared"
        ],
        correct: "Energy cannot be created or destroyed",
        explanation: "The first law of thermodynamics states that energy cannot be created or destroyed, only transferred or converted."
      }
    ]
  }
};

export const generateEnhancedQuiz = (topic: string = ""): EnhancedQuiz => {
  const topicKey = topic.toLowerCase().trim();
  const data = subjectData[topicKey] || subjectData.python; // Default to Python if topic not found
  
  const quizQuestions: EnhancedQuizQuestion[] = [];
  const difficulties: ('easy' | 'medium' | 'hard')[] = ['easy', 'medium', 'hard'];
  
  // Generate questions based on the topic
  for (let i = 0; i < 5; i++) {
    const baseQuestion = data.questions[i % data.questions.length];
    quizQuestions.push({
      id: `q${i + 1}`,
      question: baseQuestion.question,
      options: baseQuestion.options,
      correct: baseQuestion.correct,
      explanation: baseQuestion.explanation,
      difficulty: difficulties[i % 3],
      topic: data.title
    });
  }
  
  return {
    id: `quiz_${Date.now()}`,
    title: `${data.title} Quiz`,
    subject: data.subject,
    topic: data.title,
    difficulty: 'medium',
    totalQuestions: quizQuestions.length,
    questions: quizQuestions,
    estimatedTime: quizQuestions.length * 2, // 2 minutes per question
    learningObjectives: data.topics.slice(0, 3)
  };
};

export const getTopicDetails = (topic: string): any => {
  const topicKey = topic.toLowerCase().trim();
  return subjectData[topicKey] || {
    title: "General Knowledge",
    subject: "General",
    description: `This is a general knowledge topic about ${topic}.`,
    topics: ["Fundamentals", "Applications", "Advanced Concepts"],
    questions: []
  };
};
