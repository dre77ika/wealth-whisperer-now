
import React from 'react';
import SpendingChart from './SpendingChart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const predictedSpendingData = [
  { name: 'Housing', value: 1200, color: '#0EA5E9' },
  { name: 'Food', value: 480, color: '#10B981' }, // Predicted increase
  { name: 'Transportation', value: 320, color: '#F97316' }, // Predicted decrease
  { name: 'Entertainment', value: 240, color: '#8B5CF6' }, // Predicted increase
  { name: 'Utilities', value: 210, color: '#64748B' } // Predicted increase
];

const FuturePredictions = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800">Future Predictions</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SpendingChart 
          data={predictedSpendingData}
          title="Next Month Predicted Spending"
        />
        
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Spending Insights</CardTitle>
            <CardDescription>AI-powered predictions for next month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-finance-orange p-4 bg-orange-50">
              <h3 className="font-medium text-gray-800">Food expenses increasing</h3>
              <p className="text-sm text-gray-600">Your food expenses are predicted to increase by 6.6% next month based on recent trends.</p>
            </div>
            
            <div className="border-l-4 border-finance-green p-4 bg-green-50">
              <h3 className="font-medium text-gray-800">Transportation savings</h3>
              <p className="text-sm text-gray-600">You're on track to reduce transportation costs by 8.5% through your recent carpooling habits.</p>
            </div>
            
            <div className="border-l-4 border-finance-purple p-4 bg-purple-50">
              <h3 className="font-medium text-gray-800">Entertainment increase</h3>
              <p className="text-sm text-gray-600">Entertainment spending is projected to rise by 20% with the upcoming holiday season.</p>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">* Predictions based on your spending patterns and seasonal trends</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FuturePredictions;
