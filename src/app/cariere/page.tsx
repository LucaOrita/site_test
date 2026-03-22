import type { Metadata } from 'next';

import CariereClient from './cariere-client';

export const metadata: Metadata = {
  title: 'Cariere',
  description:
    'Lucrează la DACODA SRL, casă de expediții cu 32 ani experiență. Trimite CV-ul dacă ești pasionat de transporturi internaționale.',
  alternates: {
    canonical: 'https://dacoda.ro/cariere',
  },
};

export default function CarierePage() {
  return <CariereClient />;
}
