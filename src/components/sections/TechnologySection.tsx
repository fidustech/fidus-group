import React from 'react';
import { Code, Smartphone, Palette, Blocks, Globe, Cloud, Shield, Cpu, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Custom Software Development',
    description: 'Tailored software solutions to meet your unique business requirements and challenges.'
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: 'Mobile Development',
    description: 'Native iOS and Android apps with cutting-edge features and seamless user experience.'
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Web Development',
    description: 'Responsive web applications using modern frameworks and technologies.'
  },
  {
    icon: <Blocks className="h-6 w-6" />,
    title: 'Blockchain Solutions',
    description: 'Advanced blockchain development and smart contract implementation.'
  }
];

const features = [
  {
    icon: <Cloud className="h-6 w-6" />,
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions for optimal performance.'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Cybersecurity',
    description: 'Comprehensive security measures to protect your digital assets.'
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'DevOps',
    description: 'Streamlined development operations for faster deployment.'
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: 'UI/UX Design',
    description: 'Intuitive interfaces that enhance user engagement.'
  }
];

export function TechnologySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="technology" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technology Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge technology solutions that drive innovation and growth
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
              <p className="text-gray-600 mb-4">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Technology Solutions?</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
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
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80"
                alt="Technology Solutions"
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-blue-100 mb-6">
                Discover how our technology solutions can help you achieve your business goals.
              </p>
              <a
                href="http://fidusfinance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                <span>Request Demo</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['24/7 Support', 'Expert Team', 'Global Reach', 'Proven Results'].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-300 rounded-full" />
                  <span className="text-blue-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}