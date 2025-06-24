
import { useState } from "react";
import StudentHeader from "@/components/StudentHeader";
import StatsCards from "@/components/StatsCards";
import QuickActions from "@/components/QuickActions";
import RecentActivity from "@/components/RecentActivity";
import ProgressOverview from "@/components/ProgressOverview";
import DailyTasks from "@/components/DailyTasks";
import AIAssistant from "@/components/AIAssistant";
import SmartContentCreation from "@/components/SmartContentCreation";
import AILearningPaths from "@/components/AILearningPaths";
import Contact from "@/components/Contact";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <StudentHeader />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back!</h1>
          <p className="text-gray-600 dark:text-gray-300">Ready to continue your learning journey?</p>
        </div>

        {/* Stats Cards */}
        <StatsCards 
          currentStreak={currentStreak}
          totalQuizzes={totalQuizzes}
          avgScore={avgScore}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            <QuickActions />
            <DailyTasks />
            <AIAssistant />
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-1 space-y-6">
            <RecentActivity recentQuizzes={recentQuizzes} />
            <SmartContentCreation />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6">
            <AILearningPaths />
            <ProgressOverview />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
