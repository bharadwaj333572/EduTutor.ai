
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Trophy, Clock, TrendingUp, Play, History, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MultiThemeToggle } from "@/components/MultiThemeToggle";
import { NotificationCenter } from "@/components/NotificationCenter";
import { DailyTasks } from "@/components/DailyTasks";
import { AIAssistant } from "@/components/AIAssistant";
import { SmartContentCreation } from "@/components/SmartContentCreation";
import { AILearningPaths } from "@/components/AILearningPaths";
import { Contact } from "@/components/Contact";

const StudentDashboard = () => {
  const [currentStreak, setCurrentStreak] = useState(7);
  const [totalQuizzes, setTotalQuizzes] = useState(24);
  const [avgScore, setAvgScore] = useState(85);

  const recentQuizzes = [
    { id: 1, subject: "Computer Science", topic: "Python Programming", score: 92, date: "2024-01-20", status: "completed" },
    { id: 2, subject: "Mathematics", topic: "Calculus", score: 78, date: "2024-01-19", status: "completed" },
    { id: 3, subject: "Engineering", topic: "Thermodynamics", score: 95, date: "2024-01-18", status: "completed" },
    { id: 4, subject: "Computer Science", topic: "JavaScript", score: null, date: "2024-01-21", status: "in-progress" }
  ];

  const suggestedTopics = [
    { subject: "Computer Science", topic: "Python Data Structures", difficulty: "Medium" },
    { subject: "Mathematics", topic: "Linear Algebra", difficulty: "Easy" },
    { subject: "Engineering", topic: "Circuit Analysis", difficulty: "Hard" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduTutor AI
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <NotificationCenter />
              <MultiThemeToggle />
              <ThemeToggle />
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Student Portal</span>
              </div>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back!</h1>
          <p className="text-gray-600 dark:text-gray-300">Ready to continue your learning journey?</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
              <Trophy className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{currentStreak} days</div>
              <p className="text-xs text-muted-foreground">Keep it up!</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Quizzes</CardTitle>
              <BookOpen className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{totalQuizzes}</div>
              <p className="text-xs text-muted-foreground">Completed this month</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Score</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{avgScore}%</div>
              <p className="text-xs text-muted-foreground">+5% from last week</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Time Studied</CardTitle>
              <Clock className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">12.5h</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Play className="h-5 w-5 mr-2 text-blue-600" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" size="lg" asChild>
                  <Link to="/take-quiz">Take New Quiz</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/quiz-history">
                    <History className="h-4 w-4 mr-2" />
                    Quiz History
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/ai-quiz-generator">Generate AI Quiz</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Daily Tasks */}
            <DailyTasks />
            
            {/* AI Assistant */}
            <AIAssistant />
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Quiz Activity</CardTitle>
                <CardDescription>Your latest quiz attempts and scores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentQuizzes.map((quiz) => (
                    <div key={quiz.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
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
                            <Button size="sm" className="ml-2">Continue</Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Smart Content Creation */}
            <SmartContentCreation />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Learning Paths */}
            <AILearningPaths />
            
            {/* Progress Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>Your progress across different subjects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Computer Science</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">88%</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Mathematics</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Engineering</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Physics</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">54%</span>
                  </div>
                  <Progress value={54} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
