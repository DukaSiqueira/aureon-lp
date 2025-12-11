'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  const particles = Array.from({ length: 50 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomDelay = Math.random() * 5;
        const randomDuration = 10 + Math.random() * 20;
        const randomSize = 1 + Math.random() * 3;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-silver-100/10"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
              width: `${randomSize}px`,
              height: `${randomSize}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}

      {/* Gradient Overlay Animated */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(0, 24, 58, 0.3) 0%, transparent 50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
