import React from 'react';
import { TrendingUp } from 'lucide-react';

export function ParticipationCTA() {
  return (
    <div className="bg-blue-600 text-white p-8 rounded-xl">
      <h3 className="text-2xl font-bold mb-4">Ready to Participate?</h3>
      <p className="text-blue-100 mb-6">
        Join the future of finance with our innovative solutions.
      </p>
      <a
        href="http://fiddux.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
      >
        <span>Participate Now</span>
        <TrendingUp className="h-5 w-5" />
      </a>
    </div>
  );
}