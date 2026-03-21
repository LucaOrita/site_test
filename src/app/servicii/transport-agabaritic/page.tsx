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
  title:
    'Transport Agabaritic — Mărfuri Grele și Supradimensionate | DACODA SRL',
  description:
    'Transport agabaritic specializat în Europa. Mărfuri grele, supradimensionate — autorizații, escortă, ancorare. Cazuri reale DACODA.',
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
    alt: 'Transport agabaritic utilaj agricol DACODA',
  },
  {
    src: '/images/agabaritic/3.jpg',
    alt: 'Lowboy transport marfă supradimensionată DACODA',
  },
  {
    src: '/images/agabaritic/4.jpg',
    alt: 'Convoi excepțional transport agabaritic România',
  },
  {
    src: '/images/agabaritic/5.jpg',
    alt: 'Transport utilaje grele Europa DACODA SRL',
  },
  {
    src: '/images/agabaritic/6.jpg',
    alt: 'Marfă agabaritică pe platformă specializată',
  },
  {
    src: '/images/agabaritic/7.jpg',
    alt: 'Transport excepțional utilaje industriale DACODA',
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
    a: 'Nu există o limită fixă — depinde de autorizațiile obținute. Am transportat mărfuri de până la 32 tone cu gabarit depășit.',
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
    a: 'Nu există o limită fixă — depinde de autorizațiile obținute. Am transportat mărfuri de până la 32 tone cu gabarit depășit.',
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
            Mărfuri grele și supradimensionate — organizăm tot procesul de la
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
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                  src="/images/agabaritic/1.jpg"
                  alt="Transport agabaritic utilaj agricol pe lowboy — ruta Austria Bulgaria DACODA SRL"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 30%' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  AT &rarr; BG
                </div>
              </div>
              <div className="p-5">
                <p
                  className="mb-1 text-xs font-medium tracking-wider uppercase"
                  style={{ color: 'var(--dacoda-orange)' }}
                >
                  Caz real
                </p>
                <h3
                  className="mb-3 text-lg font-semibold"
                  style={{ color: 'var(--dacoda-navy)' }}
                >
                  Austria &rarr; Bulgaria
                </h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>
                    <strong>Dimensiuni:</strong> 11.7 &times; 2.5 &times; 3.1 m
                  </p>
                  <p>
                    <strong>Greutate:</strong> 15 tone
                  </p>
                  <p>
                    <strong>Client:</strong> GOWEIL Maschinenbau GmbH
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 — DE→RO / FARMTECH */}
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                  src="/images/agabaritic/11Lili.jpg"
                  alt="Transport agabaritic convoi excepțional Volvo pe lowboy — ruta Germania România DACODA SRL"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 25%' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  DE &rarr; RO
                </div>
              </div>
              <div className="p-5">
                <p
                  className="mb-1 text-xs font-medium tracking-wider uppercase"
                  style={{ color: 'var(--dacoda-orange)' }}
                >
                  Caz real
                </p>
                <h3
                  className="mb-3 text-lg font-semibold"
                  style={{ color: 'var(--dacoda-navy)' }}
                >
                  Germania &rarr; Rom&acirc;nia
                </h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>
                    <strong>Dimensiuni:</strong> 13.7 &times; 2.55 &times; 3.2 m
                    (dep&#259;&#537;it)
                  </p>
                  <p>
                    <strong>Greutate:</strong> 17 tone
                  </p>
                  <p>
                    <strong>Client:</strong> FARMTECH
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 — BE→RO / REMAT */}
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                  src="/images/agabaritic/9Lili.jpg"
                  alt="Transport agabaritic marfă grea supradimensionată — ruta Belgia România DACODA SRL"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 30%' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  BE &rarr; RO
                </div>
              </div>
              <div className="p-5">
                <p
                  className="mb-1 text-xs font-medium tracking-wider uppercase"
                  style={{ color: 'var(--dacoda-orange)' }}
                >
                  Caz real
                </p>
                <h3
                  className="mb-3 text-lg font-semibold"
                  style={{ color: 'var(--dacoda-navy)' }}
                >
                  Belgia &rarr; Rom&acirc;nia
                </h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>
                    <strong>Dimensiuni:</strong> 11 &times; 2.85 &times; 3.4 m
                    (dep&#259;&#537;it)
                  </p>
                  <p>
                    <strong>Greutate:</strong> 32 tone
                  </p>
                  <p>
                    <strong>Client:</strong> REMAT MARAMURES
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
          <p className="mb-10 text-center text-gray-500">
            Fotografii reale din transporturile agabaritice organizate de DACODA
            SRL
          </p>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className="relative aspect-[3/2] overflow-hidden rounded-lg"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  style={{ objectPosition: 'center 30%' }}
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
