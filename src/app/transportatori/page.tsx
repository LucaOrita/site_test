import type { Metadata } from 'next';

import TransportatoriClient from './transportatori-client';

export const metadata: Metadata = {
  title: {
    absolute: 'Devino transportator partener DACODA SRL',
  },
  description:
    'Colaborează cu DACODA SRL ca transportator partener. Plăți la termen, mărfuri regulate (~8.400 curse/an), relație pe termen lung. Înregistrează-te.',
  alternates: {
    canonical: 'https://dacoda.ro/transportatori',
  },
  openGraph: {
    title: 'Devino transportator partener | DACODA SRL',
    description:
      'Mărfuri regulate, plăți la termen. 3.500+ transportatori parteneri activi.',
    url: 'https://dacoda.ro/transportatori',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function TransportatoriPage() {
  return <TransportatoriClient />;
}
