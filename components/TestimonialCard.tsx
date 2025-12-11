'use client';

import { motion } from 'framer-motion';
import HoverCard from './HoverCard';
import AnimatedSection from './AnimatedSection';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <AnimatedSection key={testimonial.id} delay={index * 0.1} direction="up">
      <HoverCard className="card">
        <div className="relative h-56 bg-gradient-to-br from-navy-800 to-navy-700 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-silver-300 text-sm font-light" aria-label={`Foto de ${testimonial.name}`}>
              Foto do cliente
            </span>
          </div>
        </div>
        <motion.div
          className="p-6 bg-navy-800/50"
          whileHover={{ backgroundColor: 'rgba(0, 17, 38, 0.7)' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-silver-200 to-silver-300 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring' as const }}
              aria-hidden="true"
            >
              <span className="text-navy-900 font-bold text-sm">
                {testimonial.name.charAt(0)}
              </span>
            </motion.div>
            <div>
              <p className="text-sm font-semibold text-silver-100">{testimonial.name}</p>
              <motion.div
                className="flex text-silver-300 text-sm"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                aria-label={`${testimonial.rating} estrelas`}
              >
                {'★'.repeat(testimonial.rating)}
              </motion.div>
            </div>
          </div>
          <p className="text-sm text-silver-300 font-light leading-relaxed">
            {testimonial.comment}
          </p>
        </motion.div>
      </HoverCard>
    </AnimatedSection>
  );
}

