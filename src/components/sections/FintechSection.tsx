import React from 'react';
import { FintechHeader } from './fintech/FintechHeader';
import { FintechServices } from './fintech/FintechServices';
import { LiquidSolutions } from './fintech/LiquidSolutions';
import { PerformanceChart } from './fintech/PerformanceChart';
import { ParticipationCTA } from './fintech/ParticipationCTA';

export function FintechSection() {
  return (
    <section id="fintech" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FintechHeader />
        <FintechServices />
        
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <LiquidSolutions />
            <ParticipationCTA />
          </div>
          <PerformanceChart />
        </div>
      </div>
    </section>
  );
}