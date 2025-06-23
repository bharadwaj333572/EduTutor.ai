
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Plus, Calendar } from "lucide-react";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  subject: string;
}

const DailyTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Complete Python Quiz",
      description: "Take the advanced Python programming quiz",
      completed: false,
      priority: 'high',
      subject: 'Programming'
    },
    {
      id: 2,
      title: "Review Algebra Notes",
      description: "Go through yesterday's algebra concepts",
      completed: true,
      priority: 'medium',
      subject: 'Mathematics'
    },
    {
      id: 3,
      title: "Read Physics Chapter 5",
      description: "Study quantum mechanics basics",
      completed: false,
      priority: 'low',
      subject: 'Physics'
    }
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calendar className="h-5 w-5 mr-2" />
          Daily Tasks
        </CardTitle>
        <CardDescription>
          {completedTasks}/{totalTasks} tasks completed today
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleTask(task.id)}
              className="p-0 h-auto"
            >
              {task.completed ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <Circle className="h-5 w-5 text-gray-400" />
              )}
            </Button>
            <div className="flex-1">
              <h4 className={`font-medium ${task.completed ? 'line-through text-gray-500' : ''}`}>
                {task.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{task.description}</p>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <Badge variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'default' : 'secondary'}>
                {task.priority}
              </Badge>
              <span className="text-xs text-gray-500">{task.subject}</span>
            </div>
          </div>
        ))}
        <Button variant="outline" className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add New Task
        </Button>
      </CardContent>
    </Card>
  );
};

export default DailyTasks;
