
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "lucide-react";

const LoanTracker = () => {
  const loans = [
    {
      name: "Home Mortgage",
      nextPayment: "April 25, 2025",
      amount: 1450,
      progress: 35,
      total: 300000,
      remaining: 195000,
      daysUntilDue: 5
    },
    {
      name: "Car Loan",
      nextPayment: "May 3, 2025",
      amount: 420,
      progress: 65,
      total: 28000,
      remaining: 9800,
      daysUntilDue: 13
    },
    {
      name: "Student Loan",
      nextPayment: "May 15, 2025",
      amount: 350,
      progress: 82,
      total: 45000,
      remaining: 8100,
      daysUntilDue: 25
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800">Loan & EMI Tracker</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loans.map((loan, index) => (
          <Card key={index} className={`card-hover ${loan.daysUntilDue <= 7 ? 'border-red-300' : ''}`}>
            <CardHeader className="pb-2">
              <CardTitle>{loan.name}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{loan.nextPayment}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="stat-value">${loan.amount}</p>
                  <p className="stat-label">Next payment</p>
                </div>
                {loan.daysUntilDue <= 7 ? (
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Due in {loan.daysUntilDue} days
                  </span>
                ) : (
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Due in {loan.daysUntilDue} days
                  </span>
                )}
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Repayment progress</span>
                  <span>{loan.progress}%</span>
                </div>
                <Progress value={loan.progress} className="h-2" />
              </div>
              
              <div className="pt-2 border-t border-gray-100">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Original amount</span>
                  <span>${loan.total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Remaining</span>
                  <span>${loan.remaining.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LoanTracker;
