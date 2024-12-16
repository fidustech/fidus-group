import React, { useState } from 'react';
import { Menu, Home, ChevronLeft, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { Logo } from '../common/Logo';
import { LanguageSelector } from '../common/LanguageSelector';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useI18n } from '../../i18n/I18nContext';

interface HeaderProps {
  onBack?: () => void;
}

export function Header({ onBack }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const { t } = useI18n();

  const handleHomeClick = () => {
    if (onBack) {
      onBack();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: '#technology', label: t('common.technology') },
    { href: '#blockchain', label: t('common.blockchain') },
    { href: '#fintech', label: t('common.fintech') },
    { href: '#ai', label: t('common.aiHub') },
    { href: '#environmental', label: t('common.environmental') },
    { href: '#creative', label: t('common.creative') },
    { href: '#contact', label: t('common.contact') }
  ];

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            {onBack && (
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}
            <Logo />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={handleHomeClick}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Home className="h-5 w-5" />
            </button>
            {navItems.map(({ href, label }) => (
              <NavLink
                key={href}
                href={href}
                isActive={activeSection === href.slice(1)}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="py-2 space-y-1">
              <button
                onClick={handleHomeClick}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                {t('common.home')}
              </button>
              {navItems.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 hover:bg-gray-100 ${
                    activeSection === href.slice(1) ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}