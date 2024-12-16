import React from 'react';
import { Blocks } from 'lucide-react';

export function FintechHeader() {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Fintech Innovation</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Pioneering technological solutions for the New Economy of Value through encrypted and decentralized systems.
      </p>
      
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg mb-12">
        <div className="flex items-center justify-center mb-6">
          <Blocks className="h-8 w-8 text-blue-600 mr-3" />
          <h3 className="text-2xl font-bold">FIDDUX - Your Gateway to Blockchain</h3>
        </div>
        <p className="text-gray-600 mb-6">
          FIDDUX stands at the forefront of blockchain innovation, offering technological solutions that establish a robust infrastructure for the New Economy of Value. Through our commitment to encrypted and decentralized information systems, we empower users to access and generate value within a transparent, independent, and immutable ecosystem.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Transparency</h4>
            <p className="text-sm text-gray-600">Ensuring clear and visible transactions across our platform</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Independence</h4>
            <p className="text-sm text-gray-600">Empowering users with autonomous financial control</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Immutability</h4>
            <p className="text-sm text-gray-600">Guaranteeing secure and unchangeable records</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <div className="bg-blue-50 px-6 py-3 rounded-full">
          <span className="text-blue-600 font-medium">Trusted by Global Institutions</span>
        </div>
        <div className="bg-green-50 px-6 py-3 rounded-full">
          <span className="text-green-600 font-medium">Enterprise-Grade Security</span>
        </div>
      </div>
    </div>
  );
}