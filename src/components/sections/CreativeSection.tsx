import React from 'react';
import { Paintbrush, Monitor, Film, Lightbulb, Shapes, Brain, Megaphone, Palette, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: <Paintbrush className="h-6 w-6" />,
    title: 'Brand Identity',
    description: 'Creating distinctive visual identities that resonate with your audience.'
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: 'Digital Design',
    description: 'Crafting immersive digital experiences across platforms.'
  },
  {
    icon: <Film className="h-6 w-6" />,
    title: 'Motion Design',
    description: 'Bringing stories to life through dynamic animations and visual effects.'
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'AI Digital Models',
    description: 'Creating hyper-realistic digital humans and environments using AI.'
  },
  {
    icon: <Shapes className="h-6 w-6" />,
    title: '3D Design',
    description: 'Creating stunning 3D visualizations and interactive experiences.'
  },
  {
    icon: <Megaphone className="h-6 w-6" />,
    title: 'Marketing',
    description: 'Strategic marketing solutions to amplify your brand presence.'
  }
];

export function CreativeSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="creative" className="py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-white/5 rounded-full"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Sparkles className="h-5 w-5 text-purple-400" />
            <span className="text-purple-200">Creative Innovation</span>
          </div>
          
          {/* 3D Title */}
          <div className="perspective-1000">
            <h2 className="text-7xl font-black mb-6 transform-gpu relative">
              <span className="absolute inset-0 text-purple-300 transform translate-z-3 blur-sm">
                Creative Studio
              </span>
              <span className="absolute inset-0 text-pink-400 transform translate-z-2">
                Creative Studio
              </span>
              <span className="relative text-white transform translate-z-1 bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-200">
                Creative Studio
              </span>
            </h2>
          </div>

          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Where innovation meets imagination, powered by cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-purple-200">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Creative Process</h3>
              <div className="space-y-4">
                {[
                  'AI-Powered Conceptualization',
                  'Digital Asset Creation',
                  'Interactive Prototyping',
                  'Visual Enhancement',
                  'Performance Optimization'
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span className="text-purple-200">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1633355444132-695d5876cd00?auto=format&fit=crop&q=80"
                  alt="AI Creative Process"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}