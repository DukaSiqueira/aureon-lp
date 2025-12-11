'use client';

import { motion } from 'framer-motion';

interface SocialButtonProps {
  href: string;
  label: string;
  ariaLabel: string;
}

export default function SocialButton({ href, label, ariaLabel }: SocialButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-transparent border-2 border-silver-100 text-silver-100 px-10 py-4 rounded-lg font-semibold hover:bg-silver-100 hover:text-navy-900 transition-all duration-300 relative overflow-hidden group inline-block"
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      aria-label={ariaLabel}
    >
      <motion.span
        className="absolute inset-0 bg-silver-100"
        initial={{ x: '-100%' }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">{label}</span>
    </motion.a>
  );
}

