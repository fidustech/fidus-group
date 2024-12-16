import React from 'react';
import { LineChart as LucideLineChart, Wallet, Globe2 } from 'lucide-react';

export function LiquidSolutions() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold mb-6">Liquid Solutions</h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
            <LucideLineChart className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Market Analysis</h4>
            <p className="text-gray-600">Real-time market data and advanced analytics for informed decision-making</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
            <Wallet className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Digital Asset Management</h4>
            <p className="text-gray-600">Secure and efficient digital asset solutions</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
            <Globe2 className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Global Transactions</h4>
            <p className="text-gray-600">Borderless transaction capabilities for international business</p>
          </div>
        </div>
      </div>
    </div>
  );
}