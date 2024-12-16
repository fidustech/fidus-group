import React from 'react';
import { TreePine, Coins, Shield, Leaf } from 'lucide-react';

const benefits = [
  {
    icon: <TreePine className="h-6 w-6" />,
    title: 'Rainforest Preservation',
    description: 'Protecting the Amazon rainforest through sustainable economic incentives.'
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: 'Tokenized Assets',
    description: 'Converting real-world assets into tradeable digital tokens.'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Transparent System',
    description: 'Blockchain-based platform ensuring decentralized and secure transactions.'
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: 'Sustainable Returns',
    description: 'Financial opportunities that support environmental conservation.'
  }
];

export function ProjectOverview() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold mb-6">How It Works</h3>
      <p className="text-gray-600 mb-8">
        The bio-coin is created through Real World Asset Tokenisation, fractionating the value of Amazon rainforest properties into digital tokens. These tokens can be traded on our blockchain platform, allowing investors to directly contribute to rainforest preservation while potentially earning returns.
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
              {benefit.icon}
            </div>
            <div>
              <h4 className="font-semibold mb-1">{benefit.title}</h4>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}