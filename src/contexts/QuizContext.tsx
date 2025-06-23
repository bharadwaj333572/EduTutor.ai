
import React, { createContext, useContext, useState } from 'react';
import { GeneratedQuiz } from '@/services/quizGenerator';

interface QuizContextType {
  currentQuiz: GeneratedQuiz | null;
  setCurrentQuiz: (quiz: GeneratedQuiz | null) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [currentQuiz, setCurrentQuiz] = useState<GeneratedQuiz | null>(null);

  return (
    <QuizContext.Provider value={{ currentQuiz, setCurrentQuiz }}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
