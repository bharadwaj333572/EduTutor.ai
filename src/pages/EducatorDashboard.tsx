
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, BookOpen, TrendingUp, Clock, User, LogOut, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

const EducatorDashboard = () => {
  const [totalStudents] = useState(156);
  const [activeQuizzes] = useState(23);
  const [avgClassScore] = useState(82);
  const [totalQuizzesTaken] = useState(1247);

  const recentStudentActivity = [
    { id: 1, name: "Alex Johnson", subject: "Mathematics", topic: "Algebra", score: 92, date: "2024-01-20", status: "completed" },
    { id: 2, name: "Sarah Chen", subject: "Science", topic: "Physics", score: 78, date: "2024-01-20", status: "completed" },
    { id: 3, name: "Michael Brown", subject: "History", topic: "World War II", score: 95, date: "2024-01-20", status: "completed" },
    { id: 4, name: "Emma Davis", subject: "Mathematics", topic: "Geometry", score: null, date: "2024-01-20", status: "in-progress" },
    { id: 5, name: "James Wilson", subject: "English", topic: "Essay Writing", score: 88, date: "2024-01-19", status: "completed" }
  ];

  const classPerformance = [
    { class: "Math 101", students: 28, avgScore: 85, quizzesThisWeek: 12, trend: "up" },
    { class: "Science 202", students: 32, avgScore: 78, quizzesThisWeek: 18, trend: "down" },
    { class: "History 150", students: 25, avgScore: 91, quizzesThisWeek: 15, trend: "up" },
    { class: "English 110", students: 30, avgScore: 79, quizzesThisWeek: 20, trend: "stable" }
  ];

  const strugglingStudents = [
    { name: "David Kim", class: "Math 101", avgScore: 45, recentAttempts: 3, needsHelp: true },
    { name: "Lisa Rodriguez", class: "Science 202", avgScore: 52, recentAttempts: 5, needsHelp: true },
    { name: "Tom Anderson", class: "English 110", avgScore: 48, recentAttempts: 2, needsHelp: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduTutor AI
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Educator Portal</span>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Educator Dashboard</h1>
          <p className="text-gray-600">Monitor student progress and gain insights into learning patterns</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{totalStudents}</div>
              <p className="text-xs text-muted-foreground">Across all classes</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Quizzes</CardTitle>
              <BookOpen className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{activeQuizzes}</div>
              <p className="text-xs text-muted-foreground">Currently in progress</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Class Average</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{avgClassScore}%</div>
              <p className="text-xs text-muted-foreground">+3% from last week</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Attempts</CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{totalQuizzesTaken}</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="classes">Classes</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Student Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Student Activity</CardTitle>
                  <CardDescription>Latest quiz attempts across all classes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentStudentActivity.slice(0, 5).map((activity) => (
                      <div key={activity.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div>
                          <p className="font-medium text-sm">{activity.name}</p>
                          <p className="text-xs text-gray-600">{activity.subject} - {activity.topic}</p>
                          <p className="text-xs text-gray-500">{activity.date}</p>
                        </div>
                        <div className="text-right">
                          {activity.status === 'completed' ? (
                            <div className="text-sm font-bold text-green-600">{activity.score}%</div>
                          ) : (
                            <Badge variant="outline">In Progress</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Students Needing Help */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Students Needing Attention</CardTitle>
                  <CardDescription>Students with low scores who may need extra support</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {strugglingStudents.map((student, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-red-200 rounded-lg bg-red-50">
                        <div>
                          <p className="font-medium text-sm">{student.name}</p>
                          <p className="text-xs text-gray-600">{student.class}</p>
                          <p className="text-xs text-red-600">Avg Score: {student.avgScore}%</p>
                        </div>
                        <Button size="sm" variant="outline">
                          Contact
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>View and manage individual student progress</CardDescription>
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search students..." className="pl-10" />
                  </div>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentStudentActivity.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-gray-600">Last active: {student.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium">Recent Score</p>
                          <p className="text-lg font-bold text-green-600">{student.score || 'N/A'}%</p>
                        </div>
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="classes" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {classPerformance.map((classData, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {classData.class}
                      <Badge variant={classData.trend === 'up' ? 'default' : classData.trend === 'down' ? 'destructive' : 'secondary'}>
                        {classData.trend === 'up' ? '↗' : classData.trend === 'down' ? '↘' : '→'} {classData.trend}
                      </Badge>
                    </CardTitle>
                    <CardDescription>{classData.students} students enrolled</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Average Score</span>
                        <span className="text-lg font-bold text-blue-600">{classData.avgScore}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Quizzes This Week</span>
                        <span className="text-lg font-bold text-green-600">{classData.quizzesThisWeek}</span>
                      </div>
                      <Button className="w-full" variant="outline">View Class Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>Coming soon - Detailed performance analytics and insights</CardDescription>
              </CardHeader>
              <CardContent className="text-center py-12">
                <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600 mb-4">Advanced charts, trends, and AI-powered insights will be available here.</p>
                <Button variant="outline">Request Early Access</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EducatorDashboard;
