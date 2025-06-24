
import { useState } from "react";
import StatsCards from "@/components/StatsCards";
import QuickActions from "@/components/QuickActions";
import RecentActivity from "@/components/RecentActivity";
import ProgressOverview from "@/components/ProgressOverview";
import AIAssistant from "@/components/AIAssistant";
import SmartContentCreation from "@/components/SmartContentCreation";
import Contact from "@/components/Contact";
import { useAuth } from "@/contexts/AuthContext";

const DashboardSection = () => {
  const { user } = useAuth();
  const [currentStreak] = useState(7);
  const [totalQuizzes] = useState(24);
  const [avgScore] = useState(85);

  const recentQuizzes = [
    { id: 1, subject: "Computer Science", topic: "Python Programming", score: 92, date: "2024-01-20", status: "completed" },
    { id: 2, subject: "Mathematics", topic: "Calculus", score: 78, date: "2024-01-19", status: "completed" },
    { id: 3, subject: "Engineering", topic: "Thermodynamics", score: 95, date: "2024-01-18", status: "completed" },
    { id: 4, subject: "Computer Science", topic: "JavaScript", score: null, date: "2024-01-21", status: "in-progress" }
  ];

  if (!user) return null;

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Learning Dashboard
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Track your progress and continue your learning journey
          </p>
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
            <AIAssistant />
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-1 space-y-6">
            <RecentActivity recentQuizzes={recentQuizzes} />
            <SmartContentCreation />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6">
            <ProgressOverview />
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
