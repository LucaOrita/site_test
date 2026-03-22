import { ArrowRight, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import DacodaEuropeMap from '@/components/sections/dacoda-europe-map';
import Breadcrumb from '@/components/ui/breadcrumb';

export const metadata: Metadata = {
  title: 'Rute și destinații',
  description:
    'Transport rutier în 40+ țări — Europa, CSI, Orient Mijlociu și Asia. Hartă interactivă cu toate destinațiile DACODA SRL.',
  alternates: {
    canonical: 'https://dacoda.ro/rute',
  },
  openGraph: {
    title: 'Rute transport internațional | DACODA SRL',
    description: '40+ țări acoperite: Europa, CSI, Orient Mijlociu și Asia.',
    url: 'https://dacoda.ro/rute',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function RutePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative"
        style={{
          backgroundColor: 'var(--dacoda-navy)',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-opacity='0.05' stroke-width='1'%3E%3Cpath d='M0 0l60 60M60 0L0 60'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="container px-4 pt-32 pb-16 text-center lg:px-6 lg:pt-40 lg:pb-24">
          <Breadcrumb
            items={[{ label: 'Acasă', href: '/' }, { label: 'Rute' }]}
          />

          <h1 className="mt-6 mb-4 text-4xl font-bold text-white md:text-5xl">
            Unde transportăm
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Acoperim 40+ țări prin transport rutier, aerian și maritim.
            <br className="hidden sm:block" />
            Click pe o țară pentru detalii.
          </p>
        </div>
      </section>

      {/* Interactive Map + Country Lists (client component) */}
      <DacodaEuropeMap />

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--dacoda-navy)' }}>
        <div className="container px-4 py-16 text-center lg:px-6 lg:py-24">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Transportăm în țara ta? Cere o ofertă.
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/70">
            Nu găsești destinația? Contactează-ne — acoperim și rute mai puțin
            obișnuite.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="bg-dacoda-orange hover:bg-dacoda-orange-dark inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-medium text-white transition-colors"
            >
              Cere ofertă
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+40785225446"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              +40 785 225 446
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
