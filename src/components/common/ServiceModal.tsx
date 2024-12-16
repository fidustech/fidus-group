import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ServiceModal({ isOpen, onClose }: ServiceModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Our Services</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-6 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Technology Solutions</h3>
              <ul className="space-y-2">
                <li>• Custom Software Development</li>
                <li>• Mobile App Development</li>
                <li>• Cloud Solutions</li>
                <li>• Cybersecurity Services</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Fintech Services</h3>
              <ul className="space-y-2">
                <li>• Digital Payment Solutions</li>
                <li>• Blockchain Integration</li>
                <li>• Financial Analytics</li>
                <li>• Crypto Asset Management</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
              <ul className="space-y-2">
                <li>• Predictive Analytics</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision Solutions</li>
                <li>• AI Consulting</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Environmental Solutions</h3>
              <ul className="space-y-2">
                <li>• RWA Tokenization</li>
                <li>• Sustainable Asset Management</li>
                <li>• Carbon Credit Trading</li>
                <li>• Environmental Impact Analysis</li>
              </ul>
            </div>
          </div>
          
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <p className="text-gray-600">
              Contact us to learn more about how we can help transform your business.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}