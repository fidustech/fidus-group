import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { month: 'Dec', value: 3.12 },
  { month: 'Jan', value: 0.37 },
  { month: 'Feb', value: 7.11 },
  { month: 'Mar', value: 4.53 },
  { month: 'Apr', value: 3.09 },
  { month: 'May', value: 3.38 },
  { month: 'Jun', value: 1.39 },
  { month: 'Jul', value: 2.11 },
  { month: 'Aug', value: 0.41 },
  { month: 'Sep', value: 3.84 },
  { month: 'Oct', value: 3.17 },
  { month: 'Nov', value: 4.91 }
];

export function PerformanceChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl">
      <h3 className="text-xl font-bold mb-4">Average Fund Performance</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis 
              tickFormatter={(value) => `${value}%`}
              domain={[0, 8]}
            />
            <Tooltip 
              formatter={(value: number) => [`${value.toFixed(2)}%`, 'Return']}
              labelFormatter={(label) => `${label}`}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={2}
              dot={{ fill: '#2563eb' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 mb-2">
          Monthly performance over the past twelve months
        </p>
        <p className="font-semibold text-blue-600">
          APY: +37.43%
        </p>
      </div>
    </div>
  );
}