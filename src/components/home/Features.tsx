import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Globe, Cpu, Leaf } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Technology',
    description: 'Cutting-edge solutions for modern businesses',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Fintech',
    description: 'Revolutionary financial technology services',
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'AI Innovation',
    description: 'Advanced artificial intelligence solutions',
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: 'Environmental',
    description: 'Sustainable blockchain initiatives',
  },
];

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Our Core Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering businesses with innovative solutions across multiple domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}