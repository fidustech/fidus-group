import React from 'react';
import { TreePine, Shield, Users, Globe, LineChart, Coins, Target, Code, Network } from 'lucide-react';

const goals = [
  {
    icon: <TreePine className="h-4 w-4" />,
    text: 'Preserve the Amazon Forest and its fauna and flora'
  },
  {
    icon: <Shield className="h-4 w-4" />,
    text: 'Create a trustworthy ecosystem using Blockchain technology'
  },
  {
    icon: <Users className="h-4 w-4" />,
    text: 'Reward the community and investors fairly to help maintain the project'
  },
  {
    icon: <Globe className="h-4 w-4" />,
    text: 'Address global climate issues'
  },
  {
    icon: <LineChart className="h-4 w-4" />,
    text: 'Scale operations through strategic partnerships and expansion'
  },
  {
    icon: <Coins className="h-4 w-4" />,
    text: 'Develop sustainable investment opportunities'
  },
  {
    icon: <Target className="h-4 w-4" />,
    text: 'Achieve measurable environmental and social impact'
  },
  {
    icon: <Code className="h-4 w-4" />,
    text: 'Implement cutting-edge blockchain solutions for transparent tracking'
  },
  {
    icon: <Network className="h-4 w-4" />,
    text: 'Build a global network of environmental conservation partners'
  }
];

export function PrimaryGoals() {
  return (
    <div className="bg-green-700/90 text-white p-6 rounded-xl shadow-md backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-xl font-bold mb-4">Primary Goals</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {goals.map((goal, index) => (
            <div key={index} className="flex items-center space-x-2 bg-green-800/20 rounded-lg p-3">
              <div>{goal.icon}</div>
              <span className="text-green-50 text-sm">{goal.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}