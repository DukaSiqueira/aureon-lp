'use client';

import AnimatedSection from './AnimatedSection';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  subtitleClassName?: string;
  delay?: number;
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  className = '', 
  subtitleClassName = '',
  delay = 0 
}: SectionTitleProps) {
  return (
    <>
      <AnimatedSection delay={delay}>
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight ${className}`}>
          {title}
        </h2>
      </AnimatedSection>
      {subtitle && (
        <AnimatedSection delay={delay + 0.2}>
          <p className={`text-lg text-center mb-16 font-light ${subtitleClassName}`}>
            {subtitle}
          </p>
        </AnimatedSection>
      )}
    </>
  );
}

