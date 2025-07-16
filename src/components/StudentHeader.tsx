
import { BookOpen, User, LogOut 
       } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import MultiThemeToggle from "@/components/MultiThemeToggle";
import NotificationCenter from "@/components/NotificationCenter";

const StudentHeader = () => {
  return (
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
  );
};

export default StudentHeader;
