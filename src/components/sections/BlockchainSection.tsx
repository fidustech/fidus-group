import React from 'react';
import { Blocks, Shield, LineChart, Globe, Wallet, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: <Blocks className="h-6 w-6" />,
    title: 'Asset Tokenization',
    description: 'Transform real-world assets into digital tokens, enabling fractional ownership and increased liquidity.'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Security Token Offering',
    description: 'Compliant digital securities issuance platform for businesses and investors.'
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: 'Trading Platform',
    description: 'Advanced trading infrastructure for digital assets with high security and performance.'
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Global Custody',
    description: 'Secure digital asset custody solutions with institutional-grade security.'
  }
];

const features = [
  {
    icon: <Wallet className="h-6 w-6" />,
    title: 'Digital Wallet',
    description: 'Secure storage and management of digital assets with multi-signature support.'
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: 'Compliance',
    description: 'Full regulatory compliance and KYC/AML integration for secure transactions.'
  }
];

export function BlockchainSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="blockchain" className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Blockchain Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing asset management through blockchain technology and digital transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80"
                alt="Blockchain Technology"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Platform Features</h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Tokenize?</h3>
              <p className="text-blue-100 mb-6">
                Transform your assets into digital tokens and unlock new opportunities.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}