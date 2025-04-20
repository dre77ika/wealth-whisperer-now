
import React from 'react';
import Header from '@/components/Header';
import DashboardStats from '@/components/DashboardStats';
import FuturePredictions from '@/components/FuturePredictions';
import SavingsTips from '@/components/SavingsTips';
import LoanTracker from '@/components/LoanTracker';
import ChatbotPlaceholder from '@/components/ChatbotPlaceholder';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container py-6 px-4 md:px-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Financial Dashboard</h1>
          <p className="text-gray-600">Track, analyze, and optimize your finances</p>
        </div>
        
        <div className="space-y-8">
          <DashboardStats />
          
          <div className="border-t border-gray-200 pt-8">
            <FuturePredictions />
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <SavingsTips />
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <LoanTracker />
          </div>
          
          <ChatbotPlaceholder />
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="container text-center text-gray-500 text-sm">
          <p>© 2025 WealthWhisperer. All rights reserved.</p>
          <p className="mt-1">This is a demonstration app. Financial data shown is simulated.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
