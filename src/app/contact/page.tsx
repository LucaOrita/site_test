import type { Metadata } from 'next';

import ContactClient from './contact-client';

export const metadata: Metadata = {
  title: {
    absolute: 'Contact DACODA SRL | +40 785 225 446',
  },
  description:
    'Contactează DACODA SRL pentru transport rutier internațional. Telefon: +40 785 225 446, email: comercial@dacoda.ro. Timișoara, România.',
  alternates: {
    canonical: 'https://dacoda.ro/contact',
  },
  openGraph: {
    title: 'Contact DACODA SRL',
    description: '+40 785 225 446 | comercial@dacoda.ro | Timișoara',
    url: 'https://dacoda.ro/contact',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
