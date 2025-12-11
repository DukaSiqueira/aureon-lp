'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

interface Location {
  id: number;
  name: string;
  unit: string;
  address: string;
  mapEmbedUrl: string;
  mapUrl: string;
}

interface LocationCardProps {
  location: Location;
  index: number;
}

export default function LocationCard({ location, index }: LocationCardProps) {
  return (
    <AnimatedSection key={location.id} delay={index * 0.15} direction="up">
      <motion.div
        className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <motion.a
          href={location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          whileHover={{ scale: 1.02 }}
          aria-label={`Ver localização da unidade ${location.name}`}
        >
          <div className="relative h-64 w-full overflow-hidden">
            <iframe
              src={location.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title={`Mapa da unidade ${location.name}`}
            />
          </div>
        </motion.a>
        <div className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <motion.div
              className="logo-pulse-wrapper flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/patch-branco.svg"
                alt="Logo"
                width={120}
                height={37}
                className="relative z-10"
              />
            </motion.div>
            <div className="flex-1">
              <p className="text-silver-400 text-xs font-light uppercase tracking-wider mb-1">
                {location.unit}
              </p>
              <h3 className="text-navy-900 font-bold text-xl mb-2">{location.name}</h3>
            </div>
          </div>
          <p className="text-silver-400 text-sm font-light leading-relaxed mb-4">
            {location.address}
          </p>
          <motion.a
            href={location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-navy-700 hover:text-navy-900 font-medium text-sm transition-colors"
            whileHover={{ x: 5 }}
          >
            Ver no Google Maps →
          </motion.a>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

