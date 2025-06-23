import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { BookOpen, Clock, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useQuiz } from "@/contexts/QuizContext";
import { generateQuiz } from "@/services/quizGenerator";

const TakeQuiz = () => {
  const { currentQuiz, setCurrentQuiz } = useQuiz();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes
  const [quizCompleted, setQuizCompleted] = useState(false);

  // If no quiz is loaded, generate one or redirect
  useEffect(() => {
    if (!currentQuiz) {
      const newQuiz = generateQuiz();
      setCurrentQuiz(newQuiz);
    }
  }, [currentQuiz, setCurrentQuiz]);

  // If still no quiz after effect, show loading or redirect
  if (!currentQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Generating your quiz...</p>
        </div>
      </div>
    );
  }

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    if (currentQuestion < currentQuiz.totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(newAnswers[currentQuestion + 1] || "");
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || "");
    }
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === currentQuiz.questions[index].correct) {
        correct++;
      }
    });
    return Math.round((correct / currentQuiz.totalQuestions) * 100);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (quizCompleted) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link to="/student-dashboard" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
              <ChevronLeft className="h-5 w-5" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
              <CardDescription>Great job on completing the {currentQuiz.title} quiz</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-4xl font-bold text-green-600">
                {score}%
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{answers.filter((answer, index) => answer === currentQuiz.questions[index].correct).length}</div>
                  <div className="text-sm text-gray-600">Correct</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">{currentQuiz.totalQuestions - answers.filter((answer, index) => answer === currentQuiz.questions[index].correct).length}</div>
                  <div className="text-sm text-gray-600">Incorrect</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{currentQuiz.totalQuestions}</div>
                  <div className="text-sm text-gray-600">Total</div>
                </div>
              </div>
              <div className="flex space-x-4 justify-center">
                <Button asChild>
                  <Link to="/student-dashboard">Back to Dashboard</Link>
                </Button>
                <Button variant="outline" onClick={() => {
                  const newQuiz = generateQuiz();
                  setCurrentQuiz(newQuiz);
                  setCurrentQuestion(0);
                  setSelectedAnswer("");
                  setAnswers([]);
                  setTimeLeft(180);
                  setQuizCompleted(false);
                }}>
                  Take Another Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/student-dashboard" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
              <ChevronLeft className="h-5 w-5" />
              <span>Back to Dashboard</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-orange-600" />
                <span className="font-bold text-orange-600">{formatTime(timeLeft)}</span>
              </div>
              <Badge variant="outline">{currentQuestion + 1} of {currentQuiz.totalQuestions}</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Quiz Header */}
        <Card className="mb-6">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <Badge variant="secondary">{currentQuiz.subject}</Badge>
              <Badge variant="outline">{currentQuiz.difficulty}</Badge>
            </div>
            <CardTitle className="text-2xl">{currentQuiz.title}</CardTitle>
            <CardDescription>Question {currentQuestion + 1} of {currentQuiz.totalQuestions}</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={((currentQuestion + 1) / currentQuiz.totalQuestions) * 100} className="h-3" />
          </CardContent>
        </Card>

        {/* Question Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              {currentQuiz.questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
              {currentQuiz.questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              <Button 
                onClick={handleNext}
                disabled={!selectedAnswer}
                className="min-w-24"
              >
                {currentQuestion === currentQuiz.totalQuestions - 1 ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Finish
                  </>
                ) : (
                  <>
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Question Navigation */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Question Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {currentQuiz.questions.map((_, index) => (
                <Button
                  key={index}
                  variant={index === currentQuestion ? "default" : answers[index] ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => {
                    const newAnswers = [...answers];
                    newAnswers[currentQuestion] = selectedAnswer;
                    setAnswers(newAnswers);
                    setCurrentQuestion(index);
                    setSelectedAnswer(newAnswers[index] || "");
                  }}
                  className="w-10 h-10"
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TakeQuiz;
