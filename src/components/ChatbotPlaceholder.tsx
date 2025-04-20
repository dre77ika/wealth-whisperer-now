
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot } from "lucide-react";

const ChatbotPlaceholder = () => {
  return (
    <Card className="mt-6 card-hover bg-gradient-to-br from-blue-50 to-purple-50 border-dashed border-2 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-finance-teal" />
          Financial Assistant (Coming Soon)
        </CardTitle>
        <CardDescription>
          Your AI-powered financial advisor
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="bg-white/80 p-6 rounded-full mb-4">
            <Bot className="h-12 w-12 text-finance-teal" />
          </div>
          <h3 className="text-xl font-medium text-gray-800 mb-2">Meet Your Financial Assistant</h3>
          <p className="text-gray-600 max-w-md mb-4">
            Soon you'll be able to ask questions, get personalized financial advice, and receive insights about your spending habits.
          </p>
          <Button variant="outline" className="gap-2">
            <span>Notify me when available</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatbotPlaceholder;
