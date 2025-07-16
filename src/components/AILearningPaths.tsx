
import { useState
       } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { MapPin, Target, Clock, Star, ChevronRight } from "lucide-react";

interface LearningPath {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  progress: number;
  modules: string[];
  subjects: string[];
}

const AILearningPaths = () => {
  const [selectedPath, setSelectedPath] = useState<LearningPath | null>(null);
  
  const learningPaths: LearningPath[] = [
    {
      id: 1,
      title: "Python Programming Mastery",
      description: "Complete path from beginner to advanced Python programming",
      duration: "8 weeks",
      difficulty: 'Beginner',
      progress: 35,
      modules: ["Python Basics", "Data Structures", "OOP", "Web Development", "Data Science"],
      subjects: ["Programming", "Computer Science"]
    },
    {
      id: 2,
      title: "Calculus & Advanced Mathematics",
      description: "Comprehensive mathematics journey covering calculus and beyond",
      duration: "12 weeks",
      difficulty: 'Intermediate',
      progress: 60,
      modules: ["Limits", "Derivatives", "Integrals", "Series", "Multivariable Calculus"],
      subjects: ["Mathematics", "Engineering"]
    },
    {
      id: 3,
      title: "Engineering Fundamentals",
      description: "Core engineering principles across multiple disciplines",
      duration: "10 weeks",
      difficulty: 'Intermediate',
      progress: 20,
      modules: ["Mechanics", "Thermodynamics", "Electrical Circuits", "Materials", "Design"],
      subjects: ["Engineering", "Physics"]
    }
  ];

  if (selectedPath) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2 text-blue-600" />
              {selectedPath.title}
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setSelectedPath(null)}>
              ← Back
            </Button>
          </div>
          <CardDescription>{selectedPath.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Badge variant={selectedPath.difficulty === 'Beginner' ? 'secondary' : selectedPath.difficulty === 'Intermediate' ? 'default' : 'destructive'}>
              {selectedPath.difficulty}
            </Badge>
            <span className="text-sm text-gray-600 flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {selectedPath.duration}
            </span>
            <span className="text-sm text-gray-600">{selectedPath.progress}% complete</span>
          </div>
          
          <Progress value={selectedPath.progress} className="h-3" />
          
          <div className="space-y-2">
            <h4 className="font-medium">Learning Modules</h4>
            {selectedPath.modules.map((module, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                    index < Math.floor(selectedPath.modules.length * selectedPath.progress / 100)
                      ? 'bg-green-100 text-green-600'
                      : index === Math.floor(selectedPath.modules.length * selectedPath.progress / 100)
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                  <span className="font-medium">{module}</span>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            ))}
          </div>
          
          <Button className="w-full">Continue Learning</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <MapPin className="h-5 w-5 mr-2 text-blue-600" />
          AI-Powered Learning Paths
        </CardTitle>
        <CardDescription>
          Personalized learning journeys tailored to your goals
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {learningPaths.map((path) => (
          <div 
            key={path.id} 
            className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
            onClick={() => setSelectedPath(path)}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">{path.title}</h4>
              <Badge variant={path.difficulty === 'Beginner' ? 'secondary' : path.difficulty === 'Intermediate' ? 'default' : 'destructive'}>
                {path.difficulty}
              </Badge>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{path.description}</p>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {path.duration}
              </span>
              <span className="text-sm text-gray-500">{path.progress}% complete</span>
            </div>
            <Progress value={path.progress} className="h-2" />
            <div className="flex flex-wrap gap-1 mt-2">
              {path.subjects.map((subject, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {subject}
                </Badge>
              ))}
            </div>
          </div>
        ))}
        
        <Button variant="outline" className="w-full">
          <Star className="h-4 w-4 mr-2" />
          Create Custom Path
        </Button>
      </CardContent>
    </Card>
  );
};

export default AILearningPaths;
