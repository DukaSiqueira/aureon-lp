'use client';

import AnimatedSection from '@/components/AnimatedSection';
import AnimatedText from '@/components/AnimatedText';
import AnimatedBackground from '@/components/AnimatedBackground';
import HoverCard from '@/components/HoverCard';
import ParallaxSection from '@/components/ParallaxSection';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import PlansSection from '@/components/PlansSection';
import TestimonialCard from '@/components/TestimonialCard';
import LocationCard from '@/components/LocationCard';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { CONTACT_INFO, LOCATIONS, TESTIMONIALS, GALLERY_ITEMS } from '@/lib/constants';
import Image from 'next/image';

export default function Home() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.phone}?text=${encodeURIComponent(CONTACT_INFO.whatsapp.message)}`;
  const whatsappCurriculoUrl = `https://wa.me/${CONTACT_INFO.whatsapp.phone}?text=${encodeURIComponent('Olá! Vim do site e gostaria de enviar meu currículo para trabalhar na Aureon.')}`;
  
  const getPlanWhatsAppUrl = (planName: string) => {
    return `https://wa.me/${CONTACT_INFO.whatsapp.phone}?text=${encodeURIComponent(`Olá! Vim do site e tenho interesse em assinar o ${planName} da Aureon. Gostaria de mais informações.`)}`;
  };

  return (
    <main className="min-h-screen bg-navy-900 text-silver-100">
      <Header />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section id="inicio" className="section-dark pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden">
        <AnimatedBackground />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Logo */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
          >
            <div className="logo-pulse-wrapper">
              <Image
                src="/patch-branco.svg"
                alt="Logo da Barbearia"
                width={600}
                height={185}
                className="relative z-10"
                priority
              />
            </div>
          </motion.div>

          <AnimatedSection delay={0.4}>
            <p className="text-xl md:text-2xl text-silver-300 font-light mb-20 max-w-2xl mx-auto">
              Experiência premium em cortes e cuidados pessoais
            </p>
          </AnimatedSection>

          {/* Before/After Images */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.2} direction="left">
              <HoverCard className="card group">
                <div className="relative h-96 bg-gradient-to-br from-navy-800 to-navy-700 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-silver-300 text-lg font-light" aria-label="Imagem antes do corte">Antes</span>
                  </div>
                  <div className="absolute inset-0 animate-shimmer"></div>
                </div>
              </HoverCard>
            </AnimatedSection>

            <AnimatedSection delay={0.4} direction="right">
              <HoverCard className="card group">
                <div className="relative h-96 bg-gradient-to-br from-navy-800 to-navy-700 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-silver-300 text-lg font-light" aria-label="Imagem depois do corte">Depois</span>
                  </div>
                  <div className="absolute inset-0 animate-shimmer"></div>
                </div>
              </HoverCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Scheduling Section */}
      <section id="agendamento" className="section-light py-24 px-4 relative overflow-hidden">
        <ParallaxSection speed={0.3}>
          <div className="max-w-6xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 tracking-tight">
                Agende Seu Horário
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg text-silver-400 mb-8 font-light">
                Rápido, fácil e conveniente
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4} direction="scale">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Agendar pelo WhatsApp"
              >
                Agende pelo WhatsApp
              </motion.a>
            </AnimatedSection>
          </div>
        </ParallaxSection>
      </section>

      {/* Haircuts Gallery */}
      <section id="trabalhos" className="section-dark py-24 px-4 relative overflow-hidden">
        <div className="w-full">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-silver-100 mb-16 text-center tracking-tight max-w-7xl mx-auto">
              Nossos Trabalhos
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4 w-full">
            {GALLERY_ITEMS.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1} direction="scale" className="w-full">
                <HoverCard className="card group w-full h-full">
                  <div className="relative h-96 md:h-[32rem] lg:h-[36rem] bg-gradient-to-br from-navy-800 to-navy-700 overflow-hidden w-full min-w-0">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-silver-300 text-lg md:text-xl font-light" aria-label={`Foto do cliente ${item.id}`}>
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <PlansSection getPlanWhatsAppUrl={getPlanWhatsAppUrl} />

      {/* Locations Section */}
      <section id="unidades" className="section-light py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Como Chegar?"
            subtitle="Encontre a unidade mais próxima de você"
            className="text-navy-900"
            subtitleClassName="text-silver-400"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {LOCATIONS.map((location, index) => (
              <LocationCard
                key={location.id}
                location={location}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feedbacks Section */}
      <section id="feedbacks" className="section-dark py-24 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Feedbacks"
            subtitle="O que nossos clientes dizem"
            className="text-silver-100"
            subtitleClassName="text-silver-300"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Work With Us Section */}
      <section className="section-light py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection direction="scale">
            <motion.div
              className="relative h-[500px] bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 rounded-2xl overflow-hidden mb-12 shadow-2xl animate-gradient"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <motion.h2
                  className="text-5xl md:text-6xl font-bold text-silver-100 mb-6 tracking-tight"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Trabalhe Conosco
                </motion.h2>
                <motion.p
                  className="text-xl text-silver-300 font-light max-w-xl"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Faça parte de uma equipe premium e desenvolva sua carreira
                </motion.p>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-10 left-10 w-20 h-20 bg-silver-100/10 rounded-full animate-float"
                style={{ animationDelay: '0s' }}
              />
              <motion.div
                className="absolute bottom-20 right-20 w-32 h-32 bg-silver-100/10 rounded-full animate-float"
                style={{ animationDelay: '2s' }}
              />
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} direction="scale">
            <motion.a
              href={whatsappCurriculoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
              whileHover={{ scale: 1.15, y: -8 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Enviar currículo pelo WhatsApp"
            >
              Enviar Currículo
            </motion.a>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="contato" className="section-dark py-24 px-4 border-t border-silver-100/10 relative overflow-hidden">
        <ParallaxSection speed={0.2}>
          <div className="max-w-6xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-silver-100 mb-6 tracking-tight">
                Nossas Redes Sociais
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg text-silver-300 mb-12 font-light">
                Acompanhe nosso trabalho e novidades
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4} direction="scale">
              <div className="flex flex-wrap justify-center gap-6">
                <motion.a
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-silver-100 text-silver-100 px-10 py-4 rounded-lg font-semibold hover:bg-silver-100 hover:text-navy-900 transition-all duration-300 relative overflow-hidden group inline-block"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Seguir no Instagram"
                >
                  <motion.span
                    className="absolute inset-0 bg-silver-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Instagram</span>
                </motion.a>
                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-silver-100 text-silver-100 px-10 py-4 rounded-lg font-semibold hover:bg-silver-100 hover:text-navy-900 transition-all duration-300 relative overflow-hidden group inline-block"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Falar no WhatsApp"
                >
                  <motion.span
                    className="absolute inset-0 bg-silver-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">WhatsApp</span>
                </motion.a>
              </div>
            </AnimatedSection>
          </div>
        </ParallaxSection>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 py-12 px-4 border-t border-silver-100/10">
        <AnimatedSection>
          <div className="max-w-6xl mx-auto text-center text-silver-300 text-sm font-light">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              © 2024 Barbearia. Todos os direitos reservados.
            </motion.p>
            <motion.p
              className="mt-3 text-silver-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Powered by BRGweb
            </motion.p>
          </div>
        </AnimatedSection>
      </footer>
    </main>
  );
}
