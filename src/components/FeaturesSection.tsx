
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, Zap } from "lucide-react";

const FeaturesSection = () => {
  return (
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
  );
};

export default FeaturesSection;
