
import React from 'react';
import { Button } from "@/components/ui/button";
import { PiggyBank, ChartPie, DollarSign, Calendar } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <PiggyBank className="h-8 w-8 text-finance-teal" />
          <h1 className="text-2xl font-bold text-finance-navy">WealthWhisperer</h1>
        </div>
        
        <nav className="flex items-center space-x-1 sm:space-x-4">
          <Button variant="ghost" className="flex flex-col sm:flex-row items-center gap-1">
            <ChartPie className="h-5 w-5" />
            <span className="text-xs sm:text-sm">Dashboard</span>
          </Button>
          <Button variant="ghost" className="flex flex-col sm:flex-row items-center gap-1">
            <Calendar className="h-5 w-5" />
            <span className="text-xs sm:text-sm">Payments</span>
          </Button>
          <Button variant="ghost" className="flex flex-col sm:flex-row items-center gap-1">
            <DollarSign className="h-5 w-5" />
            <span className="text-xs sm:text-sm">Investments</span>
          </Button>
          <Button variant="outline" className="hidden sm:flex">Account</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
