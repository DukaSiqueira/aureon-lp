import { CONTACT_INFO, LOCATIONS, TESTIMONIALS } from '@/lib/constants';

export default function SchemaMarkup() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aureon-barbearia.com.br';

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Aureon Barbearia',
    description: 'Experiência premium em cortes e cuidados pessoais. Agende seu horário rápido e fácil.',
    image: `${baseUrl}/selo-azul.png`,
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toledo',
      addressRegion: 'PR',
      addressCountry: 'BR',
      streetAddress: LOCATIONS[0]?.address || '',
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    sameAs: [
      CONTACT_INFO.instagram,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: TESTIMONIALS.length.toString(),
    },
    url: baseUrl,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Agendamento',
        item: `${baseUrl}/#agendamento`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Trabalhos',
        item: `${baseUrl}/#trabalhos`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Planos',
        item: `${baseUrl}/#planos`,
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Unidades',
        item: `${baseUrl}/#unidades`,
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Feedbacks',
        item: `${baseUrl}/#feedbacks`,
      },
      {
        '@type': 'ListItem',
        position: 7,
        name: 'Contato',
        item: `${baseUrl}/#contato`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
