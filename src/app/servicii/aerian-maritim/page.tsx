import { Anchor, ArrowRight, Plane } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import DacodaServiceCta from '@/components/sections/dacoda-service-cta';
import Breadcrumb from '@/components/ui/breadcrumb';
import { makeBreadcrumbSchema, makeServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Transport Aerian și Maritim | DACODA SRL',
  description:
    'Cargo aerian și maritim pentru Asia și destinații globale. DACODA SRL organizează transport internațional complet. +40 785 225 446',
};

const airAdvantages = [
  { emoji: '⚡', text: 'Cel mai rapid mod de transport intercontinental' },
  { emoji: '📦', text: 'Ideal pentru mărfuri valoroase sau urgente' },
  { emoji: '🌏', text: 'Acoperire: Asia, Orientul Îndepărtat, global' },
  { emoji: '📋', text: 'Documentație completă: AWB, declarație vamală' },
];

const airDestinations =
  'China · India · Japonia · Coreea de Sud · Vietnam · Bangladesh · Thailanda · Singapore · și altele';

const seaOptions = [
  {
    label: 'FCL (Full Container Load)',
    text: 'Container dedicat',
  },
  {
    label: 'LCL (Less Container Load)',
    text: 'Grupaj container',
  },
];

const seaAdvantages = [
  { emoji: '💰', text: 'Cel mai economic pentru volume mari' },
  { emoji: '⚓', text: 'Porturi principale conectate global' },
  { emoji: '🌏', text: 'Destinații: Asia, Africa, Americas' },
];

const serviceSchema = makeServiceSchema({
  name: 'Transport Aerian și Maritim Cargo',
  description:
    'Cargo aerian și maritim pentru Asia și destinații globale. FCL, LCL, AWB. DACODA organizează tot lanțul logistic — rutier intern + aerian/maritim intercontinental.',
  url: 'https://dacoda.ro/servicii/aerian-maritim',
  areaServed: [
    'China',
    'India',
    'Japonia',
    'Coreea de Sud',
    'Vietnam',
    'Bangladesh',
    'Thailanda',
    'Singapore',
  ],
  keywords: [
    'transport aerian cargo',
    'transport maritim container',
    'cargo aerian Romania',
    'FCL LCL transport',
    'transport Asia',
  ],
});

const breadcrumbSchema = makeBreadcrumbSchema([
  { name: 'Acasă', url: 'https://dacoda.ro' },
  { name: 'Servicii', url: 'https://dacoda.ro/servicii' },
  {
    name: 'Aerian & Maritim',
    url: 'https://dacoda.ro/servicii/aerian-maritim',
  },
]);

export default function AerianMaritimPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema]),
        }}
      />

      {/* Hero */}
      <section
        className="relative"
        style={{ backgroundColor: 'var(--dacoda-navy)' }}
      >
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Acasă', href: '/' },
                { label: 'Servicii', href: '/servicii' },
                { label: 'Aerian & Maritim' },
              ]}
            />
          </div>

          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Transport Aerian & Maritim
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Cargo internațional pentru Asia și destinații globale — completăm
            rutele rutiere cu soluții air & sea.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/cerere-oferta"
              className="bg-dacoda-orange hover:bg-dacoda-orange-dark inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-colors"
            >
              Cere ofertă
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contactează-ne
            </Link>
          </div>
        </div>
      </section>

      {/* Transport Aerian */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Air */}
            <div className="overflow-hidden rounded-xl border border-gray-100">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=75"
                  alt="Transport cargo aerian avion"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <Plane className="text-dacoda-orange h-8 w-8" />
                  <h2 className="text-dacoda-navy text-2xl font-bold">
                    Transport Aerian
                  </h2>
                </div>

                <p className="text-dacoda-gray mb-6 text-base leading-relaxed">
                  Pentru urgențe sau destinații fără acces rutier direct,
                  organizăm cargo aerian prin parteneri selectați.
                </p>

                <div className="mb-6 space-y-3">
                  {airAdvantages.map((a) => (
                    <div key={a.text} className="flex items-center gap-3">
                      <span className="text-lg">{a.emoji}</span>
                      <span className="text-dacoda-navy text-sm font-medium">
                        {a.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-dacoda-navy mb-1 text-xs font-semibold tracking-wider uppercase">
                    Destinații principale
                  </p>
                  <p className="text-dacoda-gray text-sm leading-relaxed">
                    {airDestinations}
                  </p>
                </div>
              </div>
            </div>

            {/* Sea */}
            <div className="overflow-hidden rounded-xl border border-gray-100">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1595418965370-c0a7b011ad29?w=800&q=75"
                  alt="Transport maritim container port"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <Anchor className="text-dacoda-orange h-8 w-8" />
                  <h2 className="text-dacoda-navy text-2xl font-bold">
                    Transport Maritim
                  </h2>
                </div>

                <p className="text-dacoda-gray mb-6 text-base leading-relaxed">
                  Container complet sau grupaj maritim pentru volume mari
                  destinate Asiei și altor continente.
                </p>

                <div className="mb-6 space-y-3">
                  {seaOptions.map((o) => (
                    <div
                      key={o.label}
                      className="rounded-lg border border-gray-100 bg-gray-50 p-3"
                    >
                      <p className="text-dacoda-navy text-sm font-bold">
                        {o.label}
                      </p>
                      <p className="text-dacoda-gray text-xs">{o.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-6 space-y-3">
                  {seaAdvantages.map((a) => (
                    <div key={a.text} className="flex items-center gap-3">
                      <span className="text-lg">{a.emoji}</span>
                      <span className="text-dacoda-navy text-sm font-medium">
                        {a.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
                  <p className="text-sm leading-relaxed text-blue-800">
                    Serviciul maritim este complementar rutierului — îl
                    recomandăm pentru volume mari spre Asia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* De ce Dacoda */}
      <section className="bg-[var(--dacoda-light)]">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-dacoda-navy mb-6 text-3xl font-bold md:text-4xl">
              De ce DACODA pentru aerian & maritim?
            </h2>
            <p className="text-dacoda-gray text-base leading-relaxed md:text-lg">
              Avantajul DACODA față de un agent aerian/maritim dedicat:
              gestionăm tot lanțul logistic — de la fabrica ta (rutier intern)
              până la destinația finală (maritim/aerian). Un singur
              interlocutor, o singură responsabilitate.
            </p>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <DacodaServiceCta title="Ai nevoie de transport aerian sau maritim?" />
    </>
  );
}
