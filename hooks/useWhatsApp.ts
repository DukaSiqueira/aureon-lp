import { useMemo } from 'react';
import { CONTACT_INFO } from '@/lib/constants';

export function useWhatsApp() {
  const whatsappUrl = useMemo(
    () => `https://wa.me/${CONTACT_INFO.whatsapp.phone}?text=${encodeURIComponent(CONTACT_INFO.whatsapp.message)}`,
    []
  );

  const whatsappCurriculoUrl = useMemo(
    () => `https://wa.me/${CONTACT_INFO.whatsapp.phone}?text=${encodeURIComponent('Olá! Vim do site e gostaria de enviar meu currículo para trabalhar na Aureon.')}`,
    []
  );

  const getPlanWhatsAppUrl = useMemo(
    () => (planName: string) => {
      return `https://wa.me/${CONTACT_INFO.whatsapp.phone}?text=${encodeURIComponent(`Olá! Vim do site e tenho interesse em assinar o ${planName} da Aureon. Gostaria de mais informações.`)}`;
    },
    []
  );

  return {
    whatsappUrl,
    whatsappCurriculoUrl,
    getPlanWhatsAppUrl,
  };
}

