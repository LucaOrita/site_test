import {
  AlertTriangle,
  ArrowRight,
  Check,
  Construction,
  Plane,
  Ship,
  Snowflake,
  Truck,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicii Transport | DACODA SRL',
  description:
    'Transport rutier, ADR, frigorific, agabaritic și cargo internațional — soluții complete pentru orice tip de marfă. Cerere ofertă în 2 ore.',
  alternates: {
    canonical: 'https://dacoda.ro/servicii',
  },
  openGraph: {
    title: 'Servicii transport internațional | DACODA SRL',
    description:
      'Transport rutier, ADR, frigorific, agabaritic și cargo global. Soluții complete pentru orice tip de marfă.',
    url: 'https://dacoda.ro/servicii',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Servicii transport DACODA SRL',
      },
    ],
  },
};

const services = [
  {
    icon: Truck,
    title: 'Transport Rutier',
    badge: 'Core business',
    text: 'FTL, LTL și grupaj intern și internațional. Acoperim toată Europa, CSI și Orientul Mijlociu.',
    bullets: ['FTL – camion complet', 'LTL – parțial', 'Grupaj', '40+ țări'],
    href: '/servicii/transport-rutier',
    featured: true,
  },
  {
    icon: AlertTriangle,
    title: 'Transport ADR',
    text: 'Mărfuri periculoase clasele 3–6, 8, 9. Documentație completă, șoferi certificați ADR.',
    href: '/servicii/transport-adr',
  },
  {
    icon: Snowflake,
    title: 'Transport Frigorific',
    text: 'Temperatură controlată, agregate certificate, 2 șoferi per cursă pentru distanțe lungi.',
    href: '/servicii/transport-frigorific',
  },
  {
    icon: Construction,
    title: 'Transport Agabaritic',
    text: 'Mărfuri grele și supradimensionate. Ancore, escortă, autorizații speciale.',
    href: '/servicii/transport-agabaritic',
  },
  {
    icon: null,
    icons: [Plane, Ship],
    title: 'Aerian & Maritim',
    text: 'Cargo internațional pentru Asia și destinații globale prin parteneri selectați.',
    href: '/servicii/aerian-maritim',
  },
];

const advantages = [
  'Nu trebuie să cauți transportatori',
  'Prețuri negociate din volum',
  'Un singur interlocutor pentru tot procesul',
  'Acoperire CMR completă',
];

export default function ServiciiPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative"
        style={{ backgroundColor: 'var(--dacoda-navy)' }}
      >
        <div className="container px-4 py-16 text-center lg:px-6 lg:py-24">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Serviciile noastre
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Transport rutier, ADR, frigorific, agabaritic și cargo internațional
            — soluții complete pentru orice tip de marfă.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className={`group flex flex-col rounded-xl border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${
                  service.featured
                    ? 'border-dacoda-orange border-t-[3px] md:col-span-2'
                    : 'border-t-[3px] border-gray-100 border-t-[var(--dacoda-orange)]'
                }`}
              >
                {/* Icon */}
                <div className="mb-4 flex items-center gap-2">
                  {service.icons ? (
                    service.icons.map((Icon, i) => (
                      <Icon key={i} className="text-dacoda-orange h-7 w-7" />
                    ))
                  ) : service.icon ? (
                    <service.icon className="text-dacoda-orange h-8 w-8" />
                  ) : null}
                </div>

                {/* Title + Badge */}
                <div className="mb-2 flex items-center gap-3">
                  <h3 className="text-dacoda-navy text-xl font-bold">
                    {service.title}
                  </h3>
                  {service.badge && (
                    <span className="bg-dacoda-orange/10 text-dacoda-orange rounded-full px-2.5 py-0.5 text-xs font-semibold">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Text */}
                <p className="text-dacoda-gray mb-4 text-sm leading-relaxed">
                  {service.text}
                </p>

                {/* Bullets (featured only) */}
                {service.bullets && (
                  <div className="mb-4 grid grid-cols-2 gap-2">
                    {service.bullets.map((b) => (
                      <span
                        key={b}
                        className="text-dacoda-navy flex items-center gap-1.5 text-sm"
                      >
                        <Check className="text-dacoda-orange h-4 w-4 shrink-0" />
                        {b}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <span className="text-dacoda-orange mt-auto inline-flex items-center gap-1 text-sm font-medium">
                  Află mai mult
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* De ce o casă de expediții? */}
      <section className="bg-[var(--dacoda-light)]">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left — text */}
            <div>
              <h2 className="text-dacoda-navy mb-4 text-3xl font-bold md:text-4xl">
                De ce o casă de expediții?
              </h2>
              <p className="text-dacoda-gray text-base leading-relaxed md:text-lg">
                O casă de expediții nu este o firmă de transport — este
                partenerul care organizează transportul în numele tău, negociază
                cu transportatorii, gestionează documentația și răspunde de
                marfa ta conform Convenției CMR.
              </p>
            </div>

            {/* Right — advantages */}
            <div className="flex flex-col justify-center space-y-4">
              {advantages.map((adv) => (
                <div key={adv} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-dacoda-navy text-base font-medium">
                    {adv}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section style={{ backgroundColor: 'var(--dacoda-orange)' }}>
        <div className="container px-4 py-12 text-center lg:px-6 lg:py-16">
          <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
            Ai nevoie de o ofertă personalizată?
          </h2>
          <Link
            href="/cerere-oferta"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 text-sm font-semibold transition-colors hover:bg-gray-50"
            style={{ color: 'var(--dacoda-orange)' }}
          >
            Cere ofertă acum
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
