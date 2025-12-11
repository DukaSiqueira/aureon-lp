'use client';

import { PLANS } from '@/lib/constants';
import PlanCard from './PlanCard';
import PlansCarousel from './PlansCarousel';
import SectionTitle from './SectionTitle';

interface PlansSectionProps {
  getPlanWhatsAppUrl: (planName: string) => string;
}

export default function PlansSection({ getPlanWhatsAppUrl }: PlansSectionProps) {
  return (
    <section id="planos" className="section-light py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Nossos Planos"
          subtitle="Escolha o plano ideal para você e garante seu estilo sempre em dia"
          className="text-navy-900"
          subtitleClassName="text-silver-400"
        />

        {/* Mobile Carousel */}
        <div className="md:hidden max-w-md mx-auto">
          <PlansCarousel plans={PLANS} getWhatsAppUrl={getPlanWhatsAppUrl} />
        </div>

        {/* Desktop Grid - Planos lado a lado */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {PLANS.map((plan, index) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              index={index}
              getWhatsAppUrl={getPlanWhatsAppUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

