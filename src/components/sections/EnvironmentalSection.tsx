import React from 'react';
import { TreePine, Coins, Shield, Leaf, LineChart, Users, Globe } from 'lucide-react';
import { PrimaryGoals } from './environmental/PrimaryGoals';
import { InvestmentBenefits } from './environmental/InvestmentBenefits';
import { ProjectOverview } from './environmental/ProjectOverview';

export function EnvironmentalSection() {
  return (
    <section id="environmental" className="py-24 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">CLIMAMIO Initiative</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing rainforest preservation through blockchain technology, making asset ownership more efficient, transparent, and secure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <ProjectOverview />
          <div className="space-y-8">
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80"
                  alt="Amazon Rainforest"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TreePine className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Protected Forest Area</span>
                  </div>
                  <span className="text-green-600 font-semibold">Active Protection</span>
                </div>
              </div>
            </div>
            <InvestmentBenefits />
          </div>
        </div>

        <PrimaryGoals />
      </div>
    </section>
  );
}