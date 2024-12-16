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
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
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

            {/* Rest of the component remains the same */}
          </div>
        </div>
      </div>
      
      <Stats />
      <Features />
      
      <ServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}