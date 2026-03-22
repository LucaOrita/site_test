import {
  ArrowRight,
  Box,
  Car,
  CheckCircle,
  ClipboardList,
  Cog,
  FileCheck,
  MapPin,
  Package,
  Send,
  Shirt,
  Snowflake,
  Sofa,
  Truck,
} from 'lucide-react';
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
  title: 'Transport Rutier Internațional | DACODA SRL',
  description:
    'Transport marfă rutier FTL, LTL și grupaj în Europa, CSI și Orient. 32 ani experiență. Cerere ofertă în 2 ore. +40 785 225 446',
  alternates: {
    canonical: 'https://dacoda.ro/servicii/transport-rutier',
  },
  openGraph: {
    title: 'Transport Rutier Internațional FTL LTL Grupaj | DACODA SRL',
    description:
      'Transport marfă FTL, LTL și grupaj în Europa, CSI și Orient. 32 ani experiență. Cerere ofertă în 2 ore.',
    url: 'https://dacoda.ro/servicii/transport-rutier',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
};

const offeringCards = [
  {
    title: 'FTL — Camion Complet',
    text: 'Ai marfă care ocupă un camion întreg. Transport direct, fără opriri intermediare.',
    details: [
      '20–24 tone capacitate',
      'Prelatate și carosate',
      'Livrare directă origine→destinație',
    ],
  },
  {
    title: 'LTL — Transport Parțial',
    text: 'Marfă mai mică de un camion întreg. Plătești doar pentru spațiul ocupat.',
    details: [
      '1–15 tone',
      'Consolidare cu alte mărfuri',
      'Economic pentru volume medii',
    ],
  },
  {
    title: 'Grupaj',
    text: 'Marfa ta călătorește cu alte mărfuri compatibile. Soluția optimă pentru volume mici și regulate.',
    details: [
      'De la 100 kg',
      'Plecare regulată pe rute fixe',
      'Ideal pentru relații comerciale recurente',
    ],
  },
];

const vehicleTypes = [
  {
    icon: Truck,
    title: 'Dubă 3,5 tone',
    spec: 'Prelatată sau carosată',
    ideal: 'Ideal: partide mici, urban',
  },
  {
    icon: Truck,
    title: 'Camion 20 tone',
    spec: 'Prelatată standard',
    ideal: 'Ideal: marfă generală, paleți',
  },
  {
    icon: Snowflake,
    title: 'Camion Frigorific',
    spec: 'Agregat certificat, diagramă temp.',
    ideal: 'Ideal: produse perisabile',
  },
  {
    icon: Package,
    title: 'Lowboy / Platformă',
    spec: 'Transport agabaritic',
    ideal: 'Ideal: utilaje, structuri mari',
  },
];

const regions = [
  {
    emoji: '🇪🇺',
    title: 'Europa',
    countries:
      'Germania · Franța · Italia · Spania · Olanda · Belgia · Polonia · Ungaria · Austria · Cehia · Bulgaria · Grecia + toate țările UE',
  },
  {
    emoji: '🌐',
    title: 'CSI & Est',
    countries:
      'Ucraina · Moldova · Belarus · Rusia · Kazahstan · Georgia · Armenia · Azerbaidjan',
  },
  {
    emoji: '🌍',
    title: 'Orient Mijlociu',
    countries: 'Turcia · Iran · Liban · Iordania · EAU · Arabia Saudită',
  },
];

const cargoTypes = [
  { icon: Box, label: 'Mărfuri generale' },
  { icon: Sofa, label: 'Mobilă și bunuri casnice' },
  { icon: Car, label: 'Autoturisme' },
  { icon: Cog, label: 'Mărfuri metalurgice' },
  { icon: Shirt, label: 'Mărfuri pe umărașe' },
  { icon: ClipboardList, label: 'Marfă paletizată' },
];

const steps = [
  {
    icon: Send,
    title: 'Trimiți cererea',
    text: 'Completezi formularul online sau ne contactezi direct. Răspundem în 2 ore.',
  },
  {
    icon: FileCheck,
    title: 'Primești oferta',
    text: 'Analizăm ruta, tonajul și cerințele specifice. Îți trimitem o ofertă clară, fără surprize.',
  },
  {
    icon: CheckCircle,
    title: 'Confirmi comanda',
    text: 'Alegi oferta potrivită, confirmi, iar noi alocăm transportatorul.',
  },
  {
    icon: MapPin,
    title: 'Urmărești transportul',
    text: 'Ești informat pe tot parcursul — de la încărcare până la livrarea confirmată.',
  },
];

const faqs = [
  {
    q: 'Care e diferența dintre FTL și LTL?',
    a: 'FTL (Full Truck Load) înseamnă că închiriezi un camion întreg pentru marfa ta. LTL (Less Than Truck Load) înseamnă că marfa ta ocupă o parte din camion, împărțind costul cu alți expeditori.',
  },
  {
    q: 'Cât durează un transport România–Germania?',
    a: 'Pe ruta București–München, de exemplu, transportul durează în medie 2–3 zile lucrătoare, în funcție de punctele exacte de încărcare și livrare.',
  },
  {
    q: 'Organizați și transport pentru mărfuri speciale?',
    a: 'Da — transport ADR (mărfuri periculoase), frigorific, agabaritic și pe umărașe. Fiecare tip de marfă are soluția lui.',
  },
];

const serviceSchema = makeServiceSchema({
  name: 'Transport Rutier Internațional FTL LTL Grupaj',
  description:
    'Organizăm transport rutier internațional FTL (camion complet), LTL (parțial) și grupaj în toată Europa, CSI și Orient. 32 ani experiență.',
  url: 'https://dacoda.ro/servicii/transport-rutier',
  areaServed: [
    'Germania',
    'Franța',
    'Italia',
    'Spania',
    'Olanda',
    'Belgia',
    'Polonia',
    'Ungaria',
    'Austria',
    'Cehia',
    'Bulgaria',
    'Grecia',
    'Ucraina',
    'Kazakhstan',
    'Georgia',
    'Turcia',
  ],
  keywords: [
    'transport rutier international',
    'FTL transport Romania',
    'LTL transport Romania',
    'grupaj transport Europa',
    'casa expeditii Romania',
    'transport marfa Germania',
  ],
});

const faqSchemaData = makeFaqSchema([
  {
    q: 'Care e diferența dintre FTL și LTL?',
    a: 'FTL (Full Truck Load) înseamnă că închiriezi un camion întreg pentru marfa ta, chiar dacă nu îl umpli complet. LTL (Less Than Truck Load) înseamnă că marfa ta ocupă o parte din camion, împărțind costul transportului cu alți expeditori.',
  },
  {
    q: 'Cât durează un transport România–Germania?',
    a: 'Pe ruta București–München, transportul durează în medie 2–3 zile lucrătoare, în funcție de punctele exacte de încărcare și livrare.',
  },
  {
    q: 'Organizați și transport pentru mărfuri speciale?',
    a: 'Da — transport ADR (mărfuri periculoase), frigorific, agabaritic și pe umărașe. Fiecare tip de marfă are soluția lui.',
  },
]);

const breadcrumbSchema = makeBreadcrumbSchema([
  { name: 'Acasă', url: 'https://dacoda.ro' },
  { name: 'Servicii', url: 'https://dacoda.ro/servicii' },
  {
    name: 'Transport Rutier',
    url: 'https://dacoda.ro/servicii/transport-rutier',
  },
]);

export default function TransportRutierPage() {
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
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=75"
            alt="Camion TIR transport rutier internațional"
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
                { label: 'Transport Rutier' },
              ]}
            />
          </div>

          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Transport Rutier Internațional
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            FTL, LTL și grupaj — intern, intracomunitar și extracomunitar. 32 de
            ani de experiență pe rutele europene și CSI.
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

      {/* Ce oferim */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="text-dacoda-navy mb-10 text-center text-3xl font-bold md:text-4xl">
            Ce oferim
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {offeringCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-gray-100 p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="text-dacoda-navy mb-2 text-lg font-bold">
                  {card.title}
                </h3>
                <p className="text-dacoda-gray mb-4 text-sm leading-relaxed">
                  {card.text}
                </p>
                <ul className="space-y-1.5">
                  {card.details.map((d) => (
                    <li
                      key={d}
                      className="text-dacoda-navy flex items-center gap-2 text-sm"
                    >
                      <span className="text-dacoda-orange text-xs">●</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipuri de vehicule */}
      <section className="bg-[var(--dacoda-light)]">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="text-dacoda-navy mb-10 text-center text-3xl font-bold md:text-4xl">
            Tipuri de vehicule
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vehicleTypes.map((v) => (
              <div
                key={v.title}
                className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm"
              >
                <v.icon className="text-dacoda-orange mb-4 h-10 w-10" />
                <h3 className="text-dacoda-navy mb-1 text-base font-bold">
                  {v.title}
                </h3>
                <p className="text-dacoda-gray mb-1 text-sm">{v.spec}</p>
                <p className="text-dacoda-navy text-xs font-medium">
                  {v.ideal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acoperire geografică */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="text-dacoda-navy mb-10 text-center text-3xl font-bold md:text-4xl">
            Unde transportăm
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {regions.map((r) => (
              <div key={r.title} className="text-center md:text-left">
                <div className="mb-3 text-4xl">{r.emoji}</div>
                <h3 className="text-dacoda-navy mb-2 text-lg font-bold">
                  {r.title}
                </h3>
                <p className="text-dacoda-gray text-sm leading-relaxed">
                  {r.countries}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipuri de marfă acceptată */}
      <section className="bg-[var(--dacoda-light)]">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="text-dacoda-navy mb-10 text-center text-3xl font-bold md:text-4xl">
            Tipuri de marfă acceptată
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {cargoTypes.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
              >
                <c.icon className="text-dacoda-orange h-6 w-6 shrink-0" />
                <span className="text-dacoda-navy text-sm font-medium">
                  {c.label}
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

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <div className="bg-dacoda-orange/10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                  <span className="text-dacoda-orange text-xl font-bold">
                    {i + 1}
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

      {/* Service CTA with form */}
      <DacodaServiceCta title="Ai marfă de transportat pe rute rutiere?" />

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
