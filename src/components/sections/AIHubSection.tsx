import React from 'react';
import { Brain, Cpu, BarChart3, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'Advanced AI Solutions',
    description: 'Cutting-edge artificial intelligence applications designed for real-world implementation.'
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'Machine Learning',
    description: 'Sophisticated algorithms that learn and adapt to optimize performance.'
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights through AI-powered analytics.'
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: 'Innovation Research',
    description: 'Continuous research and development to push the boundaries of AI capabilities.'
  }
];

export function AIHubSection() {
  return (
    <section id="ai" className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">AI Innovation Hub</h2>
            <p className="text-xl text-gray-600 mb-8">
              We are committed to advancing the development of artificial intelligence and machine learning technologies. Our focus lies in the continuous evolution of applications designed to facilitate the effective utilization of AI.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
                  alt="AI Technology"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Brain className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">AI Development Progress</span>
                  </div>
                  <span className="text-green-600 font-semibold">Active</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold mb-4">Research Focus Areas</h4>
              <div className="space-y-3">
                {['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Neural Networks'].map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}