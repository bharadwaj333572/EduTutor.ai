
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <MessageCircle className="h-5 w-5 mr-2" />
          Contact Us
        </CardTitle>
        <CardDescription>
          Get in touch with our support team
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <Mail className="h-5 w-5 text-blue-600" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-gray-600">support@edututor.ai</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <Phone className="h-5 w-5 text-green-600" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <MapPin className="h-5 w-5 text-purple-600" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-sm text-gray-600">San Francisco, CA</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
          </div>
          <Input placeholder="Subject" />
          <Textarea placeholder="Your message..." className="min-h-[100px]" />
          
          <div className="flex items-center space-x-2">
            <Button className="flex-1">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
            <Badge variant="outline">24/7 Support</Badge>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <h4 className="font-medium mb-2">Quick Help Topics</h4>
          <div className="flex flex-wrap gap-2">
            {['Account Issues', 'Technical Support', 'Billing', 'Feature Request', 'Bug Report'].map((topic, index) => (
              <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Contact;
