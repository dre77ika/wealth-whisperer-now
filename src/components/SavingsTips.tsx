
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SavingsTips = () => {
  const savingsTips = [
    {
      title: "50-30-20 Budget Rule",
      description: "Allocate 50% of income to needs, 30% to wants, and 20% to savings and debt repayment.",
      category: "Budgeting"
    },
    {
      title: "Emergency Fund First",
      description: "Build an emergency fund covering 3-6 months of expenses before focusing on other investments.",
      category: "Savings"
    },
    {
      title: "Index Fund Investment",
      description: "Consider low-cost index funds for long-term wealth building with minimal effort.",
      category: "Investment"
    }
  ];

  const investmentRecommendations = [
    {
      title: "Retirement Accounts",
      description: "Maximize contributions to tax-advantaged retirement accounts like 401(k)s or IRAs.",
      riskLevel: "Low-Medium"
    },
    {
      title: "Diversified ETFs",
      description: "Exchange-traded funds offer diversification and typically lower fees than mutual funds.",
      riskLevel: "Medium"
    },
    {
      title: "Real Estate Investment",
      description: "Consider REITs (Real Estate Investment Trusts) for exposure to real estate without direct ownership.",
      riskLevel: "Medium-High"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800">Financial Guidance</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Saving Tips</CardTitle>
            <CardDescription>Personalized recommendations to improve your savings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {savingsTips.map((tip, index) => (
              <div key={index} className="border-l-4 border-finance-teal p-4 bg-blue-50">
                <div className="flex justify-between">
                  <h3 className="font-medium text-gray-800">{tip.title}</h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {tip.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{tip.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Investment Recommendations</CardTitle>
            <CardDescription>Based on your financial profile</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {investmentRecommendations.map((rec, index) => (
              <div key={index} className="border-l-4 border-finance-green p-4 bg-green-50">
                <div className="flex justify-between">
                  <h3 className="font-medium text-gray-800">{rec.title}</h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {rec.riskLevel}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
              </div>
            ))}
            <p className="text-xs text-gray-500 mt-4">* Recommendations are for informational purposes. Consult a financial advisor for personalized advice.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SavingsTips;
