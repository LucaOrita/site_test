import type { Metadata } from 'next';

import CerereOfertaClient from './cerere-oferta-client';

export const metadata: Metadata = {
  title: {
    absolute: 'Cere ofertă transport | DACODA SRL',
  },
  description:
    'Completează formularul și primești ofertă personalizată pentru transport rutier, ADR, frigorific sau agabaritic în 2 ore. Sau conversează cu agentul nostru AI.',
  alternates: {
    canonical: 'https://dacoda.ro/cerere-oferta',
  },
  openGraph: {
    title: 'Cere ofertă transport | DACODA SRL',
    description:
      'Formular de cerere ofertă pentru transport internațional. Răspuns în 2 ore.',
    url: 'https://dacoda.ro/cerere-oferta',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function CerereOfertaPage() {
  return <CerereOfertaClient />;
}
