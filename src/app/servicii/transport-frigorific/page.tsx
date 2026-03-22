import { ArrowRight } from 'lucide-react';
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
  title: 'Transport Frigorific — Temperatură Controlată | DACODA SRL',
  description:
    'Transport marfă la temperatură controlată în Europa. Agregate certificate, diagrame temperatură, 2 șoferi per cursă. DACODA SRL.',
  alternates: {
    canonical: 'https://dacoda.ro/servicii/transport-frigorific',
  },
  openGraph: {
    title: 'Transport Frigorific Temperatură Controlată | DACODA SRL',
    description:
      'Transport marfă la temperatură controlată -25°C până la +15°C. 2 șoferi per cursă lungă.',
    url: 'https://dacoda.ro/servicii/transport-frigorific',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const highlights = [
  {
    emoji: '🌡️',
    title: 'Temperaturi controlate',
    text: 'De la -25°C pentru produse congelate până la +15°C pentru produse răcite. Specificăm și respectăm temperatura cerută.',
  },
  {
    emoji: '📊',
    title: 'Diagrame de temperatură',
    text: 'Fiecare transport frigorific vine cu diagrama de temperatură — dovada că marfa a fost menținută la parametri pe tot traseul.',
  },
  {
    emoji: '👥',
    title: '2 șoferi per cursă lungă',
    text: 'Pentru distanțe mari (ex. România–Spania), alocăm 2 șoferi. Timpul de transport se reduce, riscul de întrerupere a lanțului frigorific dispare.',
  },
];

const products = [
  { emoji: '🥩', label: 'Carne și produse din carne' },
  { emoji: '🧀', label: 'Produse lactate' },
  { emoji: '💊', label: 'Produse farmaceutice' },
  { emoji: '🌱', label: 'Fructe și legume' },
  { emoji: '🧪', label: 'Produse chimice sensibile la temperatură' },
  { emoji: '🐟', label: 'Pește și fructe de mare' },
];

const steps = [
  {
    num: '1',
    title: 'Specifici temperatura',
    text: 'Ne spui intervalul necesar.',
  },
  {
    num: '2',
    title: 'Alocăm vehiculul',
    text: 'Camion cu agregat certificat, verificat.',
  },
  {
    num: '3',
    title: 'Monitorizăm și raportăm',
    text: 'Diagrama de temperatură inclusă.',
  },
];

const faqs = [
  {
    q: 'Ce temperaturi puteți menține?',
    a: 'Intervalul standard: -25°C până la +15°C, cu setare precisă conform cerințelor tale.',
  },
  {
    q: 'Primiți diagrama de temperatură după transport?',
    a: 'Da, diagrama completă a transportului este inclusă în documentație, fără costuri suplimentare.',
  },
];

const serviceSchema = makeServiceSchema({
  name: 'Transport Frigorific Temperatură Controlată',
  description:
    'Transport marfă la temperatură controlată -25°C până la +15°C. Agregate certificate, diagrame temperatură incluse, 2 șoferi per cursă lungă.',
  url: 'https://dacoda.ro/servicii/transport-frigorific',
  areaServed: ['Europa', 'România', 'Germania', 'Italia', 'Spania'],
  keywords: [
    'transport frigorific',
    'transport temperaturi controlate',
    'transport produse perisabile',
    'transport farma',
  ],
});

const faqSchemaData = makeFaqSchema([
  {
    q: 'Ce temperaturi puteți menține?',
    a: 'Intervalul standard: -25°C până la +15°C, cu setare precisă conform cerințelor tale.',
  },
  {
    q: 'Primiți diagrama de temperatură după transport?',
    a: 'Da, diagrama completă a transportului este inclusă în documentație, fără costuri suplimentare.',
  },
]);

const breadcrumbSchema = makeBreadcrumbSchema([
  { name: 'Acasă', url: 'https://dacoda.ro' },
  { name: 'Servicii', url: 'https://dacoda.ro/servicii' },
  {
    name: 'Transport Frigorific',
    url: 'https://dacoda.ro/servicii/transport-frigorific',
  },
]);

export default function TransportFrigorificPage() {
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
        className="relative overflow-hidden"
        style={{ backgroundColor: 'var(--dacoda-navy)' }}
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1625504615927-c6336b4b44e9?w=1200&q=75"
            alt="Camion frigorific transport temperatură controlată"
            fill
            className="object-cover opacity-25"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 container px-4 py-16 lg:px-6 lg:py-24">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Acasă', href: '/' },
                { label: 'Servicii', href: '/servicii' },
                { label: 'Transport Frigorific' },
              ]}
            />
          </div>

          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Transport Frigorific
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Marfa ta perisabilă ajunge la destinație la temperatura corectă —
            garantat.
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

      {/* De ce contează temperatura */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="text-dacoda-navy mb-10 text-center text-3xl font-bold md:text-4xl">
            De ce contează temperatura
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-xl border border-gray-100 p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-3 text-3xl">{h.emoji}</div>
                <h3 className="text-dacoda-navy mb-2 text-lg font-bold">
                  {h.title}
                </h3>
                <p className="text-dacoda-gray text-sm leading-relaxed">
                  {h.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipuri de produse transportate */}
      <section className="bg-[var(--dacoda-light)]">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="text-dacoda-navy mb-10 text-center text-3xl font-bold md:text-4xl">
            Tipuri de produse transportate
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
              >
                <span className="text-2xl">{p.emoji}</span>
                <span className="text-dacoda-navy text-sm font-medium">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cum funcționează */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="text-dacoda-navy mb-10 text-center text-3xl font-bold md:text-4xl">
            Cum funcționează
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="bg-dacoda-orange/10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                  <span className="text-dacoda-orange text-xl font-bold">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-dacoda-navy mb-2 text-base font-bold">
                  {step.title}
                </h3>
                <p className="text-dacoda-gray text-sm leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <DacodaServiceCta title="Ai produse perisabile de transportat?" />

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
