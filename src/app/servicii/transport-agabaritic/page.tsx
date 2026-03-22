import { ArrowRight, Check } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import DacodaServiceCta from '@/components/sections/dacoda-service-cta';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Breadcrumb from '@/components/ui/breadcrumb';
import {
  makeBreadcrumbSchema,
  makeFaqSchema,
  makeServiceSchema,
} from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Transport Agabaritic Mărfuri Grele și Supradimensionate | DACODA SRL',
  description:
    'Transport agabaritic specializat în Europa. Mărfuri grele, supradimensionate: autorizații, escortă, ancorare. Cazuri reale DACODA.',
  alternates: {
    canonical: 'https://dacoda.ro/servicii/transport-agabaritic',
  },
  openGraph: {
    title: 'Transport Agabaritic Mărfuri Supradimensionate | DACODA SRL',
    description:
      'Transport agabaritic în Europa. Mărfuri grele până la 32 tone, autorizații, escortă. Cazuri reale documentate.',
    url: 'https://dacoda.ro/servicii/transport-agabaritic',
    images: [
      {
        url: '/images/agabaritic/11Lili.jpg',
        width: 1152,
        height: 2048,
        alt: 'Transport agabaritic DACODA SRL',
      },
    ],
  },
};

const criteria = [
  { emoji: '📏', text: 'Lungime > 12 m sau lățime > 2,55 m' },
  { emoji: '⬆️', text: 'Înălțime > 4 m (cu marfă)' },
  { emoji: '⚖️', text: 'Greutate totală > 40 tone' },
  { emoji: '🔄', text: 'Formă sau echilibru neobișnuit' },
];

const galleryPhotos = [
  {
    src: '/images/agabaritic/2.jpg',
    alt: 'Transport tractoare John Deere pe platformă DACODA SRL',
  },
  {
    src: '/images/agabaritic/4.jpg',
    alt: 'Transport utilaj agricol extensibil pe lowboy DACODA SRL',
  },
  {
    src: '/images/agabaritic/8.jpg',
    alt: 'Transport echipament Hydrog pe platformă DACODA SRL',
  },
  {
    src: '/images/agabaritic/9Lili.jpg',
    alt: 'Transport agabaritic convoi excepțional DACODA SRL',
  },
  {
    src: '/images/agabaritic/11Lili.jpg',
    alt: 'Volvo FH convoi exceptionnel transport marfă industrială DACODA SRL',
  },
  {
    src: '/images/agabaritic/5.jpg',
    alt: 'Transport utilaje agricole pe lowboy DACODA SRL',
  },
];

const serviceIncludes = [
  'Calculul rutei optime (poduri, înălțimi, restricții)',
  'Obținerea autorizațiilor de transport special',
  'Vehicul specializat (lowboy, platformă extensibilă)',
  'Ancorare profesională a mărfii',
  'Escortă (acolo unde e obligatorie)',
  'Documentație completă CMR + autorizații',
  'Coordonare cu autoritățile rutiere',
];

const faqs = [
  {
    q: 'Cât durează obținerea autorizațiilor?',
    a: 'Depinde de rută și de țările tranzitate. În general 3–7 zile lucrătoare. Planificați din timp!',
  },
  {
    q: 'Organizați și escortă?',
    a: 'Da, pentru transporturile care depășesc limitele legale și necesită escortă poliție sau pilot car.',
  },
  {
    q: 'Care e dimensiunea maximă transportabilă?',
    a: 'Nu există o limită fixă, depinde de autorizațiile obținute. Am transportat mărfuri de până la 32 tone cu gabarit depășit.',
  },
];

const serviceSchema = makeServiceSchema({
  name: 'Transport Agabaritic Mărfuri Supradimensionate',
  description:
    'Transport agabaritic mărfuri grele și supradimensionate în Europa. Autorizații speciale, escortă, ancorare profesională. Experiență reală: transporturi până la 32 tone gabarit depășit.',
  url: 'https://dacoda.ro/servicii/transport-agabaritic',
  areaServed: [
    'Europa',
    'Germania',
    'Austria',
    'Belgia',
    'Bulgaria',
    'România',
  ],
  keywords: [
    'transport agabaritic',
    'transport marfa supradimensionata',
    'transport utilaje grele',
    'transport exceptional Romania',
  ],
});

const faqSchemaData = makeFaqSchema([
  {
    q: 'Cât durează obținerea autorizațiilor?',
    a: 'Depinde de rută și de țările tranzitate. În general 3–7 zile lucrătoare. Planificați din timp!',
  },
  {
    q: 'Care e greutatea maximă transportabilă?',
    a: 'Nu există o limită fixă, depinde de autorizațiile obținute. Am transportat mărfuri de până la 32 tone cu gabarit depășit.',
  },
]);

const breadcrumbSchema = makeBreadcrumbSchema([
  { name: 'Acasă', url: 'https://dacoda.ro' },
  { name: 'Servicii', url: 'https://dacoda.ro/servicii' },
  {
    name: 'Transport Agabaritic',
    url: 'https://dacoda.ro/servicii/transport-agabaritic',
  },
]);

export default function TransportAgabariticPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceSchema,
            faqSchemaData,
            breadcrumbSchema,
          ]),
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
                { label: 'Transport Agabaritic' },
              ]}
            />
          </div>

          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Transport Agabaritic
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Mărfuri grele și supradimensionate. Organizăm tot procesul de la
            autorizații până la livrare.
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

      {/* Ce este transportul agabaritic */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="text-dacoda-navy mb-6 text-center text-3xl font-bold md:text-4xl">
            Ce este transportul agabaritic?
          </h2>

          <p className="text-dacoda-gray mx-auto mb-10 max-w-3xl text-center text-base leading-relaxed md:text-lg">
            Transportul agabaritic implică mărfuri care depășesc dimensiunile
            sau greutatea standard admise în trafic normal. Necesită autorizații
            speciale, vehicule specializate (lowboy, platforme extensibile) și
            uneori escortă.
          </p>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
            {criteria.map((c) => (
              <div
                key={c.text}
                className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4"
              >
                <span className="text-2xl">{c.emoji}</span>
                <span className="text-dacoda-navy text-sm font-medium">
                  {c.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cazuri reale */}
      <section className="bg-[var(--dacoda-light)]">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="text-dacoda-navy mb-10 text-center text-3xl font-bold md:text-4xl">
            Cazuri reale
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* CARD 1 — AT→BG / GOWEIL */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/images/agabaritic/1.jpg"
                  alt="Transport agabaritic utilaj agricol pe lowboy ruta Austria Bulgaria DACODA SRL"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: 'var(--dacoda-navy)' }}
                  >
                    AT → BG
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p
                  className="mb-1 text-xs font-semibold tracking-wider uppercase"
                  style={{ color: 'var(--dacoda-orange)' }}
                >
                  Caz real
                </p>
                <h3
                  className="mb-3 text-lg font-bold"
                  style={{ color: 'var(--dacoda-navy)' }}
                >
                  Austria → Bulgaria
                </h3>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>
                    <span className="font-medium text-gray-700">
                      Dimensiuni:
                    </span>{' '}
                    11.7 × 2.5 × 3.1 m
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Greutate:</span>{' '}
                    15 tone
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Client:</span>{' '}
                    GOWEIL Maschinenbau GmbH
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 — DE→RO / FARMTECH */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/images/agabaritic/7.jpg"
                  alt="Transport agabaritic Wirtgen ruta Germania Romania DACODA SRL"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: 'var(--dacoda-navy)' }}
                  >
                    DE → RO
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p
                  className="mb-1 text-xs font-semibold tracking-wider uppercase"
                  style={{ color: 'var(--dacoda-orange)' }}
                >
                  Caz real
                </p>
                <h3
                  className="mb-3 text-lg font-bold"
                  style={{ color: 'var(--dacoda-navy)' }}
                >
                  Germania → România
                </h3>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>
                    <span className="font-medium text-gray-700">
                      Dimensiuni:
                    </span>{' '}
                    13.7 × 2.55 × 3.2 m
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Greutate:</span>{' '}
                    17 tone
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Client:</span>{' '}
                    FARMTECH
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 — BE→RO / REMAT */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/images/agabaritic/3.jpg"
                  alt="Transport agabaritic Strautmann marfă masivă ruta Belgia Romania DACODA SRL"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: 'var(--dacoda-navy)' }}
                  >
                    BE → RO
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p
                  className="mb-1 text-xs font-semibold tracking-wider uppercase"
                  style={{ color: 'var(--dacoda-orange)' }}
                >
                  Caz real
                </p>
                <h3
                  className="mb-3 text-lg font-bold"
                  style={{ color: 'var(--dacoda-navy)' }}
                >
                  Belgia → România
                </h3>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>
                    <span className="font-medium text-gray-700">
                      Dimensiuni:
                    </span>{' '}
                    11 × 2.85 × 3.4 m
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Greutate:</span>{' '}
                    32 tone
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Client:</span>{' '}
                    REMAT MARAMURES
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ce includem în serviciu */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="text-dacoda-navy mb-10 text-center text-3xl font-bold md:text-4xl">
            Ce includem în serviciu
          </h2>

          <div className="mx-auto max-w-2xl space-y-4">
            {serviceIncludes.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-dacoda-navy text-base font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie foto din transporturi reale */}
      <section
        className="py-16"
        style={{ backgroundColor: 'var(--dacoda-light)' }}
      >
        <div className="container px-4 lg:px-6">
          <h2
            className="mb-3 text-center text-2xl font-bold"
            style={{ color: 'var(--dacoda-navy)' }}
          >
            Din transporturile noastre
          </h2>
          <p className="mb-8 text-center text-sm text-gray-500">
            Fotografii reale din operațiunile DACODA SRL
          </p>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl bg-gray-100"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <DacodaServiceCta title="Ai o marfă agabaritică de transportat?" />

      {/* FAQ */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="text-dacoda-navy mb-10 text-center text-3xl font-bold md:text-4xl">
            Întrebări frecvente
          </h2>

          <div className="mx-auto max-w-2xl">
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-dacoda-navy text-left text-base font-semibold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-dacoda-gray text-sm leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
