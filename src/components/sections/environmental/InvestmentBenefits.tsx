import React from 'react';

const benefits = [
  'Sustainable Returns',
  'Environmental Impact',
  'Asset Ownership',
  'Blockchain Security',
  'Community Support',
  'Global Recognition',
  'Carbon Credits',
  'Impact Tracking'
];

export function InvestmentBenefits() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h4 className="font-semibold mb-4">Investment Benefits</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-700">{benefit}</span>
            <span className="text-green-600 font-semibold">✓</span>
          </div>
        ))}
      </div>
    </div>
  );
}