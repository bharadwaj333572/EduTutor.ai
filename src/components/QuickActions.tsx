
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, History } from "lucide-react";
import { Link } from "react-router-dom";

const QuickActions = () => {
  return (
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
  );
};

export default QuickActions;
