import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Stats } from './Stats';
import { Features } from './Features';
import { ScrollLink } from '../common/ScrollLink';
import { ServiceModal } from '../common/ServiceModal';
import { useI18n } from '../../i18n/I18nContext';

interface HeroProps {
  onExplore: () => void;
}

export function Hero({ onExplore }: HeroProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useI18n();

  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 mt-24 md:mt-0">
                <span className="flex h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium">{t('hero.tagline')}</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                {t('hero.title.transform')} <span className="text-blue-600">{t('hero.title.vision')}</span>{' '}
                {t('hero.title.into')} <span className="text-green-600">{t('hero.title.reality')}</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                {t('hero.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button
                  onClick={onExplore}
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>{t('hero.buttons.explore')}</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                
                <ScrollLink
                  to="#technology"
                  className="border border-gray-300 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>{t('hero.buttons.services')}</span>
                  <ArrowUpRight className="h-5 w-5" />
                </ScrollLink>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-green-600/20 mix-blend-multiply z-10" />
                  <img
                    src="https://cdn.pixabay.com/photo/2018/07/14/11/33/earth-3537401_1280.jpg"
                    alt="Global Blockchain Technology"
                    className="object-cover w-full h-full brightness-110 contrast-105"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 max-w-[200px] hidden sm:block z-20"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="flex h-3 w-3 rounded-full bg-blue-500" />
                    <span className="text-sm font-medium">RWA Innovations</span>
                  </div>
                  <p className="text-xs text-gray-600">Transforming real-world assets through blockchain</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 hidden sm:block z-20"
                >
                  <div className="flex items-center space-x-2">
                    <span className="flex h-3 w-3 rounded-full bg-green-500" />
                    <span className="text-sm font-medium">Trusted Encrypted Networks</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      <Stats />
      <Features />
      
      <ServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}