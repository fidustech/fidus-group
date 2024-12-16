import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Database, Cloud, Shield, Brain, Leaf, 
  Palette, Globe, Blocks, Wallet, LineChart, Users,
  Lock, Network, Coins
} from 'lucide-react';

const solutions = [
  {
    category: 'Technology',
    icon: <Code />,
    items: ['Custom Software', 'Mobile Apps', 'Web Development', 'Cloud Solutions', 'DevOps', 'Cybersecurity']
  },
  {
    category: 'Blockchain',
    icon: <Blocks />,
    items: [
      'Asset Tokenization',
      'Security Token Offering',
      'Digital Asset Trading',
      'Smart Contracts',
      'DeFi Solutions',
      'Custody Services'
    ]
  },
  {
    category: 'Fintech',
    icon: <Wallet />,
    items: [
      'Digital Banking',
      'Payment Solutions',
      'Asset Management',
      'Market Analytics',
      'Risk Management',
      'Global Transactions'
    ]
  },
  {
    category: 'AI & ML',
    icon: <Brain />,
    items: [
      'Machine Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Consulting',
      'Neural Networks'
    ]
  },
  {
    category: 'Environmental',
    icon: <Leaf />,
    items: [
      'Carbon Credits',
      'Forest Protection',
      'Sustainable Assets',
      'Impact Tracking',
      'Green Technology',
      'Community Support'
    ]
  },
  {
    category: 'Creative',
    icon: <Palette />,
    items: [
      'Brand Identity',
      'Digital Design',
      'Motion Graphics',
      '3D Visualization',
      'AI Digital Models',
      'Interactive Media'
    ]
  }
];

export function SolutionsMap() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">Solutions Overview</h1>
            <p className="text-xl text-gray-600">
              Explore our comprehensive range of innovative solutions
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center text-blue-600">
                  {solution.icon}
                </div>
                <h2 className="text-xl font-semibold">{solution.category}</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {solution.items.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-blue-50 mb-6">
                Our team of experts is ready to help you find the perfect solution for your specific needs.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Contact Us
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Global Reach',
                'Expert Team',
                'Custom Solutions',
                '24/7 Support',
                'Secure Platform',
                'Innovative Tech'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white/50 rounded-full" />
                  <span className="text-blue-50 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}