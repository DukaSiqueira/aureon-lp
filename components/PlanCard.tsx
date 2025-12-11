'use client';

import { motion } from 'framer-motion';
import HoverCard from './HoverCard';
import AnimatedSection from './AnimatedSection';

interface Plan {
  id: number;
  name: string;
  description: string;
  features: string[];
}

interface PlanCardProps {
  plan: Plan;
  index: number;
  getWhatsAppUrl: (planName: string) => string;
}

export default function PlanCard({ plan, index, getWhatsAppUrl }: PlanCardProps) {
  return (
    <AnimatedSection delay={index * 0.1} direction="up" className="w-full">
      <HoverCard className="card group h-full flex flex-col w-full">
        <div className="p-6 flex-1 flex flex-col w-full">
          <h3 className="text-2xl font-bold text-navy-900 mb-2">{plan.name}</h3>
          <p className="text-silver-400 text-sm mb-6 font-light">{plan.description}</p>
          
          <ul className="space-y-3 mb-8 flex-1">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <svg className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-silver-400 text-sm font-light">{feature}</span>
              </li>
            ))}
          </ul>

          <motion.a
            href={getWhatsAppUrl(plan.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block mt-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Assinar ${plan.name}`}
          >
            Assinar {plan.name}
          </motion.a>
        </div>
      </HoverCard>
    </AnimatedSection>
  );
}

