
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ProgressOverview = () => {
  return (
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
  );
};

export default ProgressOverview;
