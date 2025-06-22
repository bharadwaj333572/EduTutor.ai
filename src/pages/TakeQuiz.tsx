
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { BookOpen, Clock, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const TakeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes
  const [quizCompleted, setQuizCompleted] = useState(false);

  const quiz = {
    title: "Algebra Fundamentals",
    subject: "Mathematics",
    difficulty: "Medium",
    totalQuestions: 5,
    questions: [
      {
        id: 1,
        question: "What is the value of x in the equation 2x + 5 = 13?",
        options: ["x = 4", "x = 6", "x = 8", "x = 9"],
        correct: "x = 4"
      },
      {
        id: 2,
        question: "Simplify: 3(x + 2) - 2x",
        options: ["x + 6", "x + 4", "5x + 6", "3x + 2"],
        correct: "x + 6"
      },
      {
        id: 3,
        question: "If y = 2x + 3, what is y when x = 5?",
        options: ["11", "13", "15", "17"],
        correct: "13"
      },
      {
        id: 4,
        question: "Factor: x² - 9",
        options: ["(x + 3)(x - 3)", "(x + 9)(x - 1)", "(x - 3)²", "Cannot be factored"],
        correct: "(x + 3)(x - 3)"
      },
      {
        id: 5,
        question: "Solve for x: x/4 + 3 = 7",
        options: ["x = 12", "x = 16", "x = 20", "x = 24"],
        correct: "x = 16"
      }
    ]
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    if (currentQuestion < quiz.totalQuestions - 1) {
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
      if (answer === quiz.questions[index].correct) {
        correct++;
      }
    });
    return Math.round((correct / quiz.totalQuestions) * 100);
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
              <CardDescription>Great job on completing the {quiz.title} quiz</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-4xl font-bold text-green-600">
                {score}%
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{answers.filter((answer, index) => answer === quiz.questions[index].correct).length}</div>
                  <div className="text-sm text-gray-600">Correct</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">{quiz.totalQuestions - answers.filter((answer, index) => answer === quiz.questions[index].correct).length}</div>
                  <div className="text-sm text-gray-600">Incorrect</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{quiz.totalQuestions}</div>
                  <div className="text-sm text-gray-600">Total</div>
                </div>
              </div>
              <div className="flex space-x-4 justify-center">
                <Button asChild>
                  <Link to="/student-dashboard">Back to Dashboard</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/take-quiz">Take Another Quiz</Link>
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
              <Badge variant="outline">{currentQuestion + 1} of {quiz.totalQuestions}</Badge>
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
              <Badge variant="secondary">{quiz.subject}</Badge>
              <Badge variant="outline">{quiz.difficulty}</Badge>
            </div>
            <CardTitle className="text-2xl">{quiz.title}</CardTitle>
            <CardDescription>Question {currentQuestion + 1} of {quiz.totalQuestions}</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={((currentQuestion + 1) / quiz.totalQuestions) * 100} className="h-3" />
          </CardContent>
        </Card>

        {/* Question Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              {quiz.questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
              {quiz.questions[currentQuestion].options.map((option, index) => (
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
                {currentQuestion === quiz.totalQuestions - 1 ? (
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
              {quiz.questions.map((_, index) => (
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
