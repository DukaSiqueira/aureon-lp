'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HoverCard from './HoverCard';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
}

interface GalleryCarouselProps {
  items: GalleryItem[];
}

export default function GalleryCarousel({ items }: GalleryCarouselProps) {
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
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

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
            <HoverCard className="card group w-full h-full">
              <div className="relative h-96 md:h-[32rem] lg:h-[36rem] bg-gradient-to-br from-navy-800 to-navy-700 overflow-hidden w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-silver-300 text-lg md:text-xl font-light" aria-label={`Foto do cliente ${items[currentIndex].id}`}>
                    Foto do Cliente
                  </span>
                </div>
                <div className="absolute inset-0 animate-shimmer"></div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-navy-700/50 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </HoverCard>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-navy-900/80 hover:bg-navy-900 text-silver-100 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-silver-100 hover:scale-110"
        aria-label="Foto anterior"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-navy-900/80 hover:bg-navy-900 text-silver-100 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-silver-100 hover:scale-110"
        aria-label="Próxima foto"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-silver-100 focus:ring-offset-2 focus:ring-offset-navy-900 ${
              index === currentIndex
                ? 'w-8 bg-silver-100'
                : 'w-2 bg-silver-100/40 hover:bg-silver-100/60'
            }`}
            aria-label={`Ir para foto ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-2 text-silver-300 text-sm font-light">
        {currentIndex + 1} / {items.length}
      </div>
    </div>
  );
}

