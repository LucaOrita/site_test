import type { Metadata } from 'next';

import DacodaBlogPreview from '@/components/sections/dacoda-blog-preview';
import DacodaCta from '@/components/sections/dacoda-cta';
import DacodaHero from '@/components/sections/dacoda-hero';
import DacodaServices from '@/components/sections/dacoda-services';
import DacodaStats from '@/components/sections/dacoda-stats';
import DacodaTestimonials from '@/components/sections/dacoda-testimonials';
import DacodaTrustBar from '@/components/sections/dacoda-trust-bar';
import DacodaWhy from '@/components/sections/dacoda-why';

export const metadata: Metadata = {
  title: {
    absolute: 'DACODA SRL — Transport Rutier Internațional din 1993',
  },
  description:
    'Casă de expediții cu capital 100% românesc. Transport rutier FTL/LTL, ADR, frigorific, agabaritic în Europa, CSI și Asia. 32 ani experiență. Cerere ofertă în 2 ore.',
  alternates: {
    canonical: 'https://dacoda.ro',
  },
  openGraph: {
    title: 'DACODA SRL — Transport Rutier Internațional din 1993',
    description:
      'Transport marfă rutier, ADR, frigorific, agabaritic în 40+ țări. 32 ani experiență. Capital 100% românesc.',
    url: 'https://dacoda.ro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DACODA SRL — Casă de expediții transport rutier internațional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DACODA SRL — Transport Rutier Internațional',
    description: 'Transport marfă în Europa, CSI și Asia. 32 ani experiență.',
    images: ['/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <>
      <DacodaHero />
      <DacodaTrustBar />
      <DacodaWhy />
      <DacodaServices />
      <DacodaStats />
      <DacodaTestimonials />
      <DacodaBlogPreview />
      <DacodaCta />
    </>
  );
}
