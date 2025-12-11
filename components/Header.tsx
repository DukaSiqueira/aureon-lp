'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { NAVIGATION_ITEMS } from '@/lib/constants';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4" role="navigation" aria-label="Navegação principal">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('#inicio')}
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-silver-100 focus:ring-offset-2 focus:ring-offset-navy-900 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Ir para o início"
          >
            <Image
              src="/logo-branca.svg"
              alt="Logo da Barbearia"
              width={200}
              height={43}
              className="relative z-10"
              priority
            />
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {NAVIGATION_ITEMS.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-silver-200 hover:text-silver-100 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-silver-100 focus:ring-offset-2 focus:ring-offset-navy-900 rounded px-2 py-1"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden w-10 h-10 flex flex-col justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-silver-100 focus:ring-offset-2 focus:ring-offset-navy-900 rounded-lg p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
            aria-expanded={isMobileMenuOpen}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="w-6 h-0.5 bg-silver-100 rounded"
              animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-silver-100 rounded"
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-silver-100 rounded"
              animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left text-silver-200 hover:text-silver-100 hover:bg-navy-800 px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-silver-100"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}

