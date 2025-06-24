
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "@/contexts/QuizContext";
import { generateQuiz } from "@/services/quizGenerator";

interface Quiz {
  id: number;
  subject: string;
  topic: string;
  score: number | null;
  date: string;
  status: string;
}

interface RecentActivityProps {
  recentQuizzes: Quiz[];
}

const RecentActivity = ({ recentQuizzes }: RecentActivityProps) => {
  const navigate = useNavigate();
  const { setCurrentQuiz } = useQuiz();

  const handleQuizClick = (quiz: Quiz) => {
    console.log("Quiz clicked:", quiz);
    try {
      if (quiz.status === 'in-progress') {
        // Generate a new quiz for in-progress items
        const newQuiz = generateQuiz();
        console.log("Generated quiz for in-progress item:", newQuiz);
        setCurrentQuiz(newQuiz);
        navigate('/take-quiz');
      } else {
        // For completed quizzes, show history or retake
        navigate('/quiz-history');
      }
    } catch (error) {
      console.error("Error handling quiz click:", error);
    }
  };

  const handleContinueQuiz = (quiz: Quiz) => {
    console.log("Continue quiz clicked:", quiz);
    try {
      const newQuiz = generateQuiz();
      console.log("Generated quiz to continue:", newQuiz);
      setCurrentQuiz(newQuiz);
      navigate('/take-quiz');
    } catch (error) {
      console.error("Error continuing quiz:", error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Quiz Activity</CardTitle>
        <CardDescription>Your latest quiz attempts and scores</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentQuizzes.map((quiz) => (
            <div 
              key={quiz.id} 
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              onClick={() => handleQuizClick(quiz)}
            >
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{quiz.topic}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{quiz.subject}</p>
                    <p className="text-xs text-gray-500">{quiz.date}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {quiz.status === 'completed' ? (
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{quiz.score}%</div>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                ) : (
                  <div className="text-right">
                    <Badge variant="outline">In Progress</Badge>
                    <Button 
                      size="sm" 
                      className="ml-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleContinueQuiz(quiz);
                      }}
                    >
                      Continue
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
