
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Wand2, FileText, Video, BookOpen, Lightbulb } from "lucide-react";

const SmartContentCreation = () => {
  const [topic, setTopic] = useState("");
  const [contentType, setContentType] = useState<'notes' | 'quiz' | 'presentation' | 'study-guide'>('notes');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string>("");

  const contentTypes = [
    { id: 'notes', label: 'Study Notes', icon: FileText },
    { id: 'quiz', label: 'Practice Quiz', icon: BookOpen },
    { id: 'presentation', label: 'Presentation', icon: Video },
    { id: 'study-guide', label: 'Study Guide', icon: Lightbulb }
  ];

  const generateContent = () => {
    if (!topic.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate content generation
    setTimeout(() => {
      const sampleContent = {
        notes: `# ${topic} - Study Notes\n\n## Key Concepts\n- Important point 1\n- Important point 2\n- Important point 3\n\n## Examples\nDetailed examples and explanations...`,
        quiz: `# ${topic} Quiz\n\n1. What is the main concept of ${topic}?\na) Option A\nb) Option B\nc) Option C\nd) Option D\n\n2. Explain the significance of ${topic}...`,
        presentation: `# ${topic} Presentation\n\n## Slide 1: Introduction\n- Overview of ${topic}\n\n## Slide 2: Key Points\n- Main concepts\n- Real-world applications`,
        'study-guide': `# ${topic} Study Guide\n\n## What to Study\n- Core concepts\n- Practice problems\n- Review materials\n\n## Study Schedule\n- Week 1: Fundamentals\n- Week 2: Applications`
      };
      
      setGeneratedContent(sampleContent[contentType]);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Wand2 className="h-5 w-5 mr-2 text-purple-600" />
          Smart Content Creation
        </CardTitle>
        <CardDescription>
          AI-powered content generation for your studies
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Topic</label>
          <Input
            placeholder="Enter topic (e.g., Python, Calculus, Physics)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        
        <div>
          <label className="text-sm font-medium mb-2 block">Content Type</label>
          <div className="grid grid-cols-2 gap-2">
            {contentTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Button
                  key={type.id}
                  variant={contentType === type.id ? "default" : "outline"}
                  className="h-auto p-3 flex flex-col items-center space-y-1"
                  onClick={() => setContentType(type.id as any)}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-xs">{type.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
        
        <Button 
          onClick={generateContent} 
          disabled={!topic.trim() || isGenerating}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <Wand2 className="h-4 w-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Wand2 className="h-4 w-4 mr-2" />
              Generate Content
            </>
          )}
        </Button>
        
        {generatedContent && (
          <div className="mt-4">
            <label className="text-sm font-medium mb-2 block">Generated Content</label>
            <Textarea
              value={generatedContent}
              onChange={(e) => setGeneratedContent(e.target.value)}
              className="min-h-[200px] font-mono text-sm"
            />
            <div className="flex space-x-2 mt-2">
              <Button size="sm" variant="outline">Save</Button>
              <Button size="sm" variant="outline">Export</Button>
              <Button size="sm" variant="outline">Share</Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SmartContentCreation;
