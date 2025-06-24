
import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <GraduationCap className="h-6 w-6" />
          <span className="text-xl font-bold">EduTutor AI</span>
        </div>
        <p className="text-gray-400">© 2024 EduTutor AI. Revolutionizing education through artificial intelligence.</p>
      </div>
    </footer>
  );
};

export default Footer;
