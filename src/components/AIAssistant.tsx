
import { useState
       } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Brain, MessageCircle, Send, Sparkles } from "lucide-react";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([
    {
      role: 'assistant',
      content: 'Hi! I\'m your AI learning assistant. How can I help you today?'
    }
  ]);

  const suggestions = [
    "Explain Python functions",
    "Help with algebra problems",
    "Create a study plan",
    "Quiz me on physics"
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newConversation = [
      ...conversation,
      { role: 'user', content: message },
      { role: 'assistant', content: `I understand you're asking about "${message}". Let me help you with that! This is a simulated response - in a real implementation, this would connect to an AI service.` }
    ];
    
    setConversation(newConversation);
    setMessage("");
  };

  if (!isOpen) {
    return (
      <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setIsOpen(true)}>
        <CardHeader className="text-center">
          <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <CardTitle className="text-xl">AI Assistant</CardTitle>
          <CardDescription>
            Get instant help with your studies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full" variant="outline">
            <MessageCircle className="h-4 w-4 mr-2" />
            Start Conversation
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-96">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <Brain className="h-5 w-5 mr-2 text-purple-600" />
            AI Assistant
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
            ×
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-48 overflow-y-auto space-y-2 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
          {conversation.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-2 rounded-lg text-sm ${
                msg.role === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white dark:bg-gray-700 border'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {suggestions.map((suggestion, index) => (
            <Badge key={index} variant="outline" className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setMessage(suggestion)}>
              <Sparkles className="h-3 w-3 mr-1" />
              {suggestion}
            </Badge>
          ))}
        </div>
        
        <div className="flex space-x-2">
          <Input
            placeholder="Ask me anything..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button onClick={handleSendMessage} size="sm">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAssistant;
