'use client';

import { motion } from 'framer-motion';
import { CONTACT_INFO } from '@/lib/constants';

interface WhatsAppButtonProps {
  message: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  variant?: 'primary' | 'secondary';
}

export default function WhatsAppButton({ 
  message, 
  children, 
  className = '', 
  ariaLabel,
  variant = 'primary'
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.phone}?text=${encodeURIComponent(message)}`;
  const buttonClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonClass} inline-block ${className}`}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      aria-label={ariaLabel}
    >
      {children}
    </motion.a>
  );
}

