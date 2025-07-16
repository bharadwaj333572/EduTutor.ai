
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, GraduationCap, Brain } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useQuiz } from "@/contexts/QuizContext";
import { generateQuiz
       } from "@/services/quizGenerator";

const UserTypeSelection = () => {
  const { user } = useAuth();
  const { setCurrentQuiz } = useQuiz();
  const navigate = useNavigate();

  const handleStartLearning = () => {
    console.log("Start Learning button clicked!");
    try {
      const newQuiz = generateQuiz();
      console.log("Generated quiz:", newQuiz);
      setCurrentQuiz(newQuiz);
      console.log("Quiz set in context, navigating to /take-quiz");
      navigate('/take-quiz');
    } catch (error) {
      console.error("Error in handleStartLearning:", error);
    }
  };

  const handleGoogleClassroom = () => {
    window.open('https://classroom.google.com', '_blank');
  };

  const handleAIQuizzes = () => {
    navigate('/ai-quiz-generator');
  };

  return (
    <>
      {/* User Type Selection */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
        <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 hover:border-blue-300 dark:hover:border-blue-600">
          <CardHeader className="text-center">
            <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <CardTitle className="text-2xl">I'm a Student</CardTitle>
            <CardDescription>
              Take personalized quizzes and track your learning progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" size="lg" onClick={handleStartLearning}>
              Start Learning
            </Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 hover:border-purple-300 dark:hover:border-purple-600">
          <CardHeader className="text-center">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <CardTitle className="text-2xl">I'm an Educator</CardTitle>
            <CardDescription>
              Monitor student progress and access detailed analytics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" size="lg" variant="secondary" asChild>
              <Link to={user?.role === 'educator' ? '/educator-dashboard' : '/login'}>
                View Analytics
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Additional Options */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
        <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 hover:border-green-300 dark:hover:border-green-600">
          <CardHeader className="text-center">
            <GraduationCap className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <CardTitle className="text-2xl">Google Classroom</CardTitle>
            <CardDescription>
              Access your Google Classroom directly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" size="lg" variant="outline" onClick={handleGoogleClassroom}>
              Open Classroom
            </Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 hover:border-orange-300 dark:hover:border-orange-600">
          <CardHeader className="text-center">
            <Brain className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <CardTitle className="text-2xl">AI Generated Quizzes</CardTitle>
            <CardDescription>
              Create custom quizzes from your text content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" size="lg" variant="outline" onClick={handleAIQuizzes}>
              Generate Quizzes
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default UserTypeSelection;
