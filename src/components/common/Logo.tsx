import React from 'react';
import { Shield, ShieldCheck } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Shield className="h-8 w-8 text-green-600" />
        <ShieldCheck className="h-4 w-4 text-blue-600 absolute bottom-0 right-0" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight text-gray-900">FIDUS</span>
        <span className="text-xs font-medium tracking-wider text-gray-500">GROUP</span>
      </div>
    </div>
  );
}