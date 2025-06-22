
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, ChevronLeft, Search, Calendar, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";

const QuizHistory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const quizHistory = [
    { id: 1, title: "Algebra Fundamentals", subject: "Mathematics", score: 92, date: "2024-01-20", duration: "5 min", questions: 10, status: "completed" },
    { id: 2, title: "Newton's Laws", subject: "Physics", score: 78, date: "2024-01-19", duration: "8 min", questions: 15, status: "completed" },
    { id: 3, title: "World War II", subject: "History", score: 95, date: "2024-01-18", duration: "12 min", questions: 20, status: "completed" },
    { id: 4, title: "Geometry Basics", subject: "Mathematics", score: 67, date: "2024-01-17", duration: "6 min", questions: 12, status: "completed" },
    { id: 5, title: "Chemical Reactions", subject: "Chemistry", score: 84, date: "2024-01-16", duration: "10 min", questions: 18, status: "completed" },
    { id: 6, title: "Essay Writing", subject: "English", score: 88, date: "2024-01-15", duration: "15 min", questions: 8, status: "completed" },
    { id: 7, title: "Trigonometry", subject: "Mathematics", score: null, date: "2024-01-21", duration: null, questions: 14, status: "in-progress" }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-blue-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 90) return "Excellent";
    if (score >= 80) return "Good";
    if (score >= 70) return "Fair";
    return "Needs Improvement";
  };

  const filteredQuizzes = quizHistory.filter(quiz =>
    quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    quiz.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const completedQuizzes = filteredQuizzes.filter(quiz => quiz.status === "completed");
  const inProgressQuizzes = filteredQuizzes.filter(quiz => quiz.status === "in-progress");

  const totalQuizzes = completedQuizzes.length;
  const averageScore = totalQuizzes > 0 ? Math.round(completedQuizzes.reduce((sum, quiz) => sum + quiz.score, 0) / totalQuizzes) : 0;
  const totalTimeSpent = completedQuizzes.reduce((sum, quiz) => {
    const minutes = parseInt(quiz.duration.split(' ')[0]);
    return sum + minutes;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/student-dashboard" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
              <ChevronLeft className="h-5 w-5" />
              <span>Back to Dashboard</span>
            </Link>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">Quiz History</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Quizzes</CardTitle>
              <BookOpen className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{totalQuizzes}</div>
              <p className="text-xs text-muted-foreground">Completed successfully</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Score</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{averageScore}%</div>
              <p className="text-xs text-muted-foreground">Across all subjects</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Time Spent</CardTitle>
              <Calendar className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{totalTimeSpent}m</div>
              <p className="text-xs text-muted-foreground">Total study time</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Best Score</CardTitle>
              <Award className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">
                {Math.max(...completedQuizzes.map(q => q.score))}%
              </div>
              <p className="text-xs text-muted-foreground">Personal best</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Search Quiz History</CardTitle>
            <CardDescription>Find quizzes by title or subject</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search quizzes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Quiz History Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Quizzes ({filteredQuizzes.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedQuizzes.length})</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress ({inProgressQuizzes.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {filteredQuizzes.map((quiz) => (
              <Card key={quiz.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold">{quiz.title}</h3>
                        <Badge variant="outline">{quiz.subject}</Badge>
                        {quiz.status === 'completed' && (
                          <Badge variant="secondary">{getScoreBadge(quiz.score)}</Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{quiz.questions} questions</span>
                        {quiz.duration && <span>{quiz.duration}</span>}
                        <span>{quiz.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      {quiz.status === 'completed' ? (
                        <div className="text-right">
                          <div className={`text-2xl font-bold ${getScoreColor(quiz.score)}`}>
                            {quiz.score}%
                          </div>
                          <Badge variant="secondary">Completed</Badge>
                        </div>
                      ) : (
                        <div className="text-right">
                          <Badge variant="outline">In Progress</Badge>
                          <Button size="sm" className="ml-2" asChild>
                            <Link to="/take-quiz">Continue</Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {completedQuizzes.map((quiz) => (
              <Card key={quiz.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold">{quiz.title}</h3>
                        <Badge variant="outline">{quiz.subject}</Badge>
                        <Badge variant="secondary">{getScoreBadge(quiz.score)}</Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{quiz.questions} questions</span>
                        <span>{quiz.duration}</span>
                        <span>{quiz.date}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${getScoreColor(quiz.score)}`}>
                        {quiz.score}%
                      </div>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="in-progress" className="space-y-4">
            {inProgressQuizzes.length > 0 ? (
              inProgressQuizzes.map((quiz) => (
                <Card key={quiz.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold">{quiz.title}</h3>
                          <Badge variant="outline">{quiz.subject}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{quiz.questions} questions</span>
                          <span>Started {quiz.date}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-2">In Progress</Badge>
                        <br />
                        <Button size="sm" asChild>
                          <Link to="/take-quiz">Continue</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No quizzes in progress</h3>
                  <p className="text-gray-600 mb-4">All your quizzes have been completed. Great job!</p>
                  <Button asChild>
                    <Link to="/take-quiz">Start New Quiz</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default QuizHistory;
