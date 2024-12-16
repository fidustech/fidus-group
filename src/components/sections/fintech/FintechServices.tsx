import React from 'react';
import { Shield, Blocks, Lock, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Global Financial Solutions',
    description: 'Comprehensive international financial services and solutions.'
  },
  {
    icon: <Blocks className="h-6 w-6" />,
    title: 'Blockchain Infrastructure',
    description: 'Building the foundation for the New Economy of Value.'
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: 'Secure Transactions',
    description: 'Advanced encryption for secure and transparent global transactions.'
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'Smart Solutions',
    description: 'Intelligent financial systems powered by cutting-edge technology.'
  }
];

export function FintechServices() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {services.map((service, index) => (
        <motion.div
          key={index}
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
            {service.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
}