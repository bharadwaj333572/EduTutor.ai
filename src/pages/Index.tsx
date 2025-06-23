
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Brain, BarChart3, Users, BookOpen, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduTutor AI
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Welcome, {user.name}
                  </span>
                  <Button 
                    variant="outline" 
                    asChild
                  >
                    <Link to={user.role === 'student' ? '/student-dashboard' : '/educator-dashboard'}>
                      Dashboard
                    </Link>
                  </Button>
                  <Button variant="outline" onClick={logout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex space-x-4">
                  <Button variant="outline" asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/signup">Get Started</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Revolutionize Learning with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI-Powered Education
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              EduTutor AI transforms education through personalized quizzes, real-time assessment, 
              and intelligent insights powered by IBM Watsonx and Granite foundation models.
            </p>
          </div>

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
                <Button className="w-full" size="lg" asChild>
                  <Link to={user?.role === 'student' ? '/student-dashboard' : '/login'}>
                    Start Learning
                  </Link>
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powered by Advanced AI Technology
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the future of education with our comprehensive suite of AI-driven features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Brain className="h-10 w-10 text-blue-600 mb-4" />
                <CardTitle>AI-Generated Quizzes</CardTitle>
                <CardDescription>
                  Dynamic quiz creation using IBM Watsonx and Granite models
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-green-600 mb-4" />
                <CardTitle>Real-time Analytics</CardTitle>
                <CardDescription>
                  Comprehensive performance tracking and insights for educators
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Zap className="h-10 w-10 text-purple-600 mb-4" />
                <CardTitle>Google Classroom Integration</CardTitle>
                <CardDescription>
                  Seamless synchronization with existing classroom workflows
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students and educators already using EduTutor AI
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
            <Link to="/signup">Start Your Journey Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GraduationCap className="h-6 w-6" />
            <span className="text-xl font-bold">EduTutor AI</span>
          </div>
          <p className="text-gray-400">© 2024 EduTutor AI. Revolutionizing education through artificial intelligence.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
