import { AlertTriangle, ArrowRight, FileText } from 'lucide-react';
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
  title: 'Transport ADR — Mărfuri Periculoase | DACODA SRL',
  description:
    'Transport mărfuri periculoase ADR clasele 3-6, 8, 9 în România și Europa. Documentație completă, șoferi certificați. +40 785 225 446',
};

const adrClasses = [
  {
    cls: 'Clasa 3',
    title: 'Lichide inflamabile',
    text: 'Combustibili, solvenți, vopsele, rășini',
    example: 'Exemplu real: UN 1866 rășină alchidică — ruta Italia→RO',
  },
  {
    cls: 'Clasa 4',
    title: 'Solide inflamabile',
    text: 'Materiale care se aprind ușor',
  },
  {
    cls: 'Clasa 5',
    title: 'Substanțe oxidante',
    text: 'Peroxizi organici, nitrați',
  },
  {
    cls: 'Clasa 6',
    title: 'Substanțe toxice',
    text: 'Pesticide, substanțe infecțioase',
  },
  {
    cls: 'Clasa 8',
    title: 'Substanțe corozive',
    text: 'Acizi, baze, electroliți',
  },
  {
    cls: 'Clasa 9',
    title: 'Substanțe periculoase diverse',
    text: 'Baterii litiu, materiale magnetizate, CO₂ solid',
  },
];

const documents = [
  'Declarație ADR completată corect',
  'Fișa de siguranță a produsului (SDS)',
  'Instrucțiuni scrise pentru șofer (Tremcard)',
  'Certificat ADR șofer',
  'Conosament / CMR cu mențiuni speciale ADR',
  'Autorizație vehicul pentru ADR (dacă e cazul)',
];

const faqs = [
  {
    q: 'Pot transporta orice marfă periculoasă?',
    a: 'DACODA transportă clasele 3, 4, 5, 6, 8 și 9. Clasele 1 (explozivi) și 7 (radioactive) necesită autorizații speciale pe care nu le deținem.',
  },
  {
    q: 'Ce documente trebuie să furnizez ca expeditor?',
    a: 'Fișa de siguranță (SDS) și o descriere clară a mărfii. Restul documentației ADR o pregătim noi.',
  },
];

const serviceSchema = makeServiceSchema({
  name: 'Transport ADR Mărfuri Periculoase',
  description:
    'Transport mărfuri periculoase ADR clasele 3-6, 8, 9 în România și Europa. Documentație completă, vehicule echipate, șoferi certificați ADR.',
  url: 'https://dacoda.ro/servicii/transport-adr',
  areaServed: ['România', 'Germania', 'Italia', 'Franța', 'Europa'],
  keywords: [
    'transport ADR',
    'marfuri periculoase transport',
    'ADR clasa 3',
    'transport substante chimice',
  ],
});

const faqSchemaData = makeFaqSchema([
  {
    q: 'Ce clase ADR transportați?',
    a: 'DACODA transportă clasele 3 (lichide inflamabile), 4, 5, 6, 8 (corozive) și 9. Clasele 1 (explozivi) și 7 (radioactive) necesită autorizații speciale.',
  },
  {
    q: 'Ce documente trebuie să furnizez?',
    a: 'Fișa de siguranță (SDS) și o descriere clară a mărfii. Restul documentației ADR o pregătim noi.',
  },
]);

const breadcrumbSchema = makeBreadcrumbSchema([
  { name: 'Acasă', url: 'https://dacoda.ro' },
  { name: 'Servicii', url: 'https://dacoda.ro/servicii' },
  { name: 'Transport ADR', url: 'https://dacoda.ro/servicii/transport-adr' },
]);

export default function TransportAdrPage() {
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
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=75"
            alt="Transport ADR mărfuri periculoase"
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
                { label: 'Transport ADR' },
              ]}
            />
          </div>

          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Transport Mărfuri Periculoase ADR
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Clase 3–6, 8 și 9 — documentație completă, vehicule echipate, șoferi
            certificați ADR.
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

      {/* Ce este ADR? */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="text-dacoda-navy mb-10 text-center text-3xl font-bold md:text-4xl">
            Ce este ADR?
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-dacoda-gray text-base leading-relaxed md:text-lg">
                ADR (Accord Dangereux Routier) este acordul european care
                reglementează transportul rutier al mărfurilor periculoase.
                DACODA SRL organizează transport ADR cu toate documentele în
                regulă și echipamentele obligatorii.
              </p>
            </div>

            <div className="rounded-xl border-2 border-yellow-400 bg-yellow-50 p-6">
              <div className="mb-3 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
                <span className="text-lg font-bold text-yellow-800">
                  Atenție
                </span>
              </div>
              <p className="text-sm leading-relaxed text-yellow-800">
                Transportul mărfurilor periculoase fără respectarea ADR este
                ilegal și periculos. Lucrați doar cu expeditori autorizați.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clase ADR */}
      <section className="bg-[var(--dacoda-light)]">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="text-dacoda-navy mb-10 text-center text-3xl font-bold md:text-4xl">
            Clase ADR pe care le transportăm
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {adrClasses.map((c) => (
              <div
                key={c.cls}
                className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-dacoda-orange mb-1 block text-xs font-semibold tracking-wider uppercase">
                  {c.cls}
                </span>
                <h3 className="text-dacoda-navy mb-2 text-lg font-bold">
                  {c.title}
                </h3>
                <p className="text-dacoda-gray text-sm leading-relaxed">
                  {c.text}
                </p>
                {c.example && (
                  <p className="text-dacoda-orange mt-3 text-xs font-medium italic">
                    {c.example}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documente necesare ADR */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="text-dacoda-navy mb-10 text-center text-3xl font-bold md:text-4xl">
            Documente necesare ADR
          </h2>

          <div className="mx-auto max-w-2xl space-y-4">
            {documents.map((doc) => (
              <div
                key={doc}
                className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 p-4"
              >
                <FileText className="text-dacoda-orange h-5 w-5 shrink-0" />
                <span className="text-dacoda-navy text-sm font-medium">
                  {doc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caz real */}
      <section className="bg-[var(--dacoda-light)]">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <div className="mx-auto max-w-2xl rounded-xl border-l-4 border-[var(--dacoda-orange)] bg-white p-8 shadow-sm">
            <span className="text-dacoda-orange mb-2 block text-xs font-semibold tracking-wider uppercase">
              Caz real — Transport ADR cls. 3
            </span>
            <h3 className="text-dacoda-navy mb-4 text-xl font-bold">
              Rășină alchidică (UN 1866)
            </h3>
            <div className="text-dacoda-gray space-y-2 text-sm leading-relaxed">
              <p>
                <strong className="text-dacoda-navy">Ruta:</strong> Italia →
                România
              </p>
              <p>
                <strong className="text-dacoda-navy">Marfă:</strong> Rășină
                alchidică (UN 1866, clasa 3)
              </p>
              <p>
                <strong className="text-dacoda-navy">Client:</strong> Astron
                Chemicals / Sanipack
              </p>
              <p className="mt-4 italic">
                Transport organizat cu succes, documentație completă, livrare la
                termen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <DacodaServiceCta title="Ai mărfuri periculoase de transportat?" />

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
