import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { TechnologySection } from './components/sections/TechnologySection';
import { FintechSection } from './components/sections/FintechSection';
import { AIHubSection } from './components/sections/AIHubSection';
import { EnvironmentalSection } from './components/sections/EnvironmentalSection';
import { CreativeSection } from './components/sections/CreativeSection';
import { ContactSection } from './components/sections/ContactSection';
import { BlockchainSection } from './components/sections/BlockchainSection';
import { SolutionsMap } from './pages/SolutionsMap';

function App() {
  const [showSolutionsMap, setShowSolutionsMap] = useState(false);

  if (showSolutionsMap) {
    return (
      <div className="min-h-screen">
        <Header onBack={() => setShowSolutionsMap(false)} />
        <SolutionsMap />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero onExplore={() => setShowSolutionsMap(true)} />
        <TechnologySection />
        <BlockchainSection />
        <FintechSection />
        <AIHubSection />
        <EnvironmentalSection />
        <CreativeSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;