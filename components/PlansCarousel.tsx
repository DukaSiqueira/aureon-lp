'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HoverCard from './HoverCard';

interface Plan {
  id: number;
  name: string;
  description: string;
  features: string[];
}

interface PlansCarouselProps {
  plans: Plan[];
  getWhatsAppUrl: (planName: string) => string;
}

export default function PlansCarousel({ plans, getWhatsAppUrl }: PlansCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se está no mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint do Tailwind
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % plans.length);
  }, [plans.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + plans.length) % plans.length);
  }, [plans.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-play apenas no mobile - reinicia quando currentIndex muda (interação manual)
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 segundos

    return () => clearInterval(interval);
  }, [isMobile, currentIndex, nextSlide]);

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3, type: 'spring' as const, stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000) {
                nextSlide();
              } else if (swipe > 10000) {
                prevSlide();
              }
            }}
            className="w-full touch-pan-y cursor-grab active:cursor-grabbing"
          >
            <div className="w-full px-14">
              <HoverCard className="card group h-full flex flex-col w-full">
                <div className="p-6 flex-1 flex flex-col w-full">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">{plans[currentIndex].name}</h3>
                  <p className="text-silver-400 text-sm mb-6 font-light">{plans[currentIndex].description}</p>
                  
                  <ul className="space-y-3 mb-8 flex-1">
                    {plans[currentIndex].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-silver-400 text-sm font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={getWhatsAppUrl(plans[currentIndex].name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center block mt-auto"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Assinar ${plans[currentIndex].name}`}
                  >
                    Assinar {plans[currentIndex].name}
                  </motion.a>
                </div>
              </HoverCard>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-silver-100/95 hover:bg-silver-100 text-navy-900 p-2 rounded-full shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-navy-900 hover:scale-110 backdrop-blur-sm border-2 border-silver-200"
        aria-label="Plano anterior"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-silver-100/95 hover:bg-silver-100 text-navy-900 p-2 rounded-full shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-navy-900 hover:scale-110 backdrop-blur-sm border-2 border-silver-200"
        aria-label="Próximo plano"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {plans.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-silver-100 focus:ring-offset-2 focus:ring-offset-navy-900 ${
              index === currentIndex
                ? 'w-8 bg-silver-100'
                : 'w-2 bg-silver-100/40 hover:bg-silver-100/60'
            }`}
            aria-label={`Ir para plano ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-2 text-silver-300 text-sm font-light">
        {currentIndex + 1} / {plans.length}
      </div>
    </div>
  );
}

