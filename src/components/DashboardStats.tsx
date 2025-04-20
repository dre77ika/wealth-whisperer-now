
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SpendingChart from './SpendingChart';

const currentSpendingData = [
  { name: 'Housing', value: 1200, color: '#0EA5E9' },
  { name: 'Food', value: 450, color: '#10B981' },
  { name: 'Transportation', value: 350, color: '#F97316' },
  { name: 'Entertainment', value: 200, color: '#8B5CF6' },
  { name: 'Utilities', value: 180, color: '#64748B' }
];

const DashboardStats = () => {
  const totalIncome = 3500;
  const totalExpenses = currentSpendingData.reduce((acc, item) => acc + item.value, 0);
  const savings = totalIncome - totalExpenses;
  const savingsPercentage = ((savings / totalIncome) * 100).toFixed(1);

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800">Financial Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="card-hover">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Income</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="stat-value text-finance-teal">${totalIncome.toLocaleString()}</p>
            <p className="stat-label">Monthly</p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="stat-value text-finance-red">${totalExpenses.toLocaleString()}</p>
            <p className="stat-label">Monthly</p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="stat-value text-finance-green">${savings.toLocaleString()}</p>
            <p className="stat-label">{savingsPercentage}% of income</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SpendingChart 
          data={currentSpendingData}
          title="Current Month Spending"
        />
      </div>
    </div>
  );
};

export default DashboardStats;
