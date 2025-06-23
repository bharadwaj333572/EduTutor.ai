
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Brain, BookOpen, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { generateQuiz, GeneratedQuiz } from "@/services/quizGenerator";

const AIQuizGenerator = () => {
  const [inputText, setInputText] = useState("");
  const [textInfo, setTextInfo] = useState("");
  const [generatedQuizzes, setGeneratedQuizzes] = useState<GeneratedQuiz[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmitText = async () => {
    if (!inputText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate text analysis
    setTimeout(() => {
      const wordCount = inputText.split(' ').length;
      const charCount = inputText.length;
      const sentences = inputText.split('.').filter(s => s.trim()).length;
      
      setTextInfo(`
        Text Analysis:
        • Word count: ${wordCount}
        • Character count: ${charCount}
        • Sentences: ${sentences}
        • Reading level: ${wordCount > 100 ? 'Advanced' : wordCount > 50 ? 'Intermediate' : 'Basic'}
        • Topics detected: ${inputText.toLowerCase().includes('math') ? 'Mathematics' : inputText.toLowerCase().includes('science') ? 'Science' : 'General Knowledge'}
      `);
      setIsAnalyzing(false);
    }, 1500);
  };

  const handleGenerateQuizzes = () => {
    setIsGenerating(true);
    
    // Generate multiple quizzes
    setTimeout(() => {
      const newQuizzes = [];
      for (let i = 0; i < 3; i++) {
        newQuizzes.push(generateQuiz());
      }
      setGeneratedQuizzes(newQuizzes);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-orange-600" />
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  AI Quiz Generator
                </span>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Text Input Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <BookOpen className="h-6 w-6 mr-2" />
              Input Your Text
            </CardTitle>
            <CardDescription>
              Paste or type your content below to analyze and generate quizzes from it
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Enter your text content here... This could be a lesson, article, or any educational material you want to create quizzes from."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[200px]"
            />
            <Button 
              onClick={handleSubmitText} 
              disabled={!inputText.trim() || isAnalyzing}
              className="w-full"
            >
              {isAnalyzing ? (
                <>
                  <Loader className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing Text...
                </>
              ) : (
                'Analyze Text'
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Text Analysis Results */}
        {textInfo && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Analysis Results</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="whitespace-pre-wrap text-sm bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                {textInfo}
              </pre>
            </CardContent>
          </Card>
        )}

        {/* Generate Quizzes Section */}
        {textInfo && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Brain className="h-6 w-6 mr-2" />
                Generate Quizzes
              </CardTitle>
              <CardDescription>
                Create AI-powered quizzes based on your analyzed content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={handleGenerateQuizzes}
                disabled={isGenerating}
                size="lg"
                className="w-full"
              >
                {isGenerating ? (
                  <>
                    <Loader className="h-4 w-4 mr-2 animate-spin" />
                    Generating Quizzes...
                  </>
                ) : (
                  'Generate Quizzes'
                )}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Generated Quizzes Display */}
        {generatedQuizzes.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">Generated Quizzes</h2>
            {generatedQuizzes.map((quiz, index) => (
              <Card key={quiz.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Quiz {index + 1}: {quiz.title}</span>
                    <span className="text-sm font-normal bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                      {quiz.difficulty}
                    </span>
                  </CardTitle>
                  <CardDescription>
                    {quiz.subject} • {quiz.totalQuestions} questions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {quiz.questions.slice(0, 2).map((question, qIndex) => (
                      <div key={question.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h4 className="font-semibold mb-2">
                          Question {qIndex + 1}: {question.question}
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {question.options.map((option, oIndex) => (
                            <div 
                              key={oIndex}
                              className={`p-2 rounded text-sm ${
                                option === question.correct 
                                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' 
                                  : 'bg-white dark:bg-gray-700'
                              }`}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    {quiz.questions.length > 2 && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                        ... and {quiz.questions.length - 2} more questions
                      </p>
                    )}
                    <Button className="w-full mt-4" asChild>
                      <Link to="/take-quiz">
                        Take This Quiz
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIQuizGenerator;
