import {
  AlertTriangle,
  ArrowRight,
  Construction,
  Plane,
  Snowflake,
  Truck,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Truck,
    title: 'Transport Rutier',
    text: 'FTL, LTL și grupaj: intern, intracomunitar și extracomunitar',
    href: '/servicii/transport-rutier',
    featured: true,
  },
  {
    icon: AlertTriangle,
    title: 'Transport ADR',
    text: 'Mărfuri periculoase cls. 3–6, 8, 9 cu documentație completă',
    href: '/servicii/transport-adr',
  },
  {
    icon: Snowflake,
    title: 'Transport Frigorific',
    text: 'Temperatură controlată, agregate certificate, 2 șoferi per cursă',
    href: '/servicii/transport-frigorific',
  },
  {
    icon: Construction,
    title: 'Transport Agabaritic',
    text: 'Mărfuri grele și supradimensionate: ancore, escortă, autorizații',
    href: '/servicii/transport-agabaritic',
  },
  {
    icon: Plane,
    title: 'Aerian & Maritim',
    text: 'Cargo global pentru Asia și destinații intercontinentale',
    href: '/servicii/aerian-maritim',
  },
];

export default function DacodaServices() {
  return (
    <section className="bg-white">
      <div className="container px-4 py-16 lg:px-6 lg:py-24">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-dacoda-navy text-3xl font-bold md:text-4xl">
            Ce organizăm pentru tine
          </h2>
          <p className="text-dacoda-gray mx-auto mt-3 max-w-xl text-base md:text-lg">
            Soluții complete de transport pentru orice tip de marfă și
            destinație
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group flex flex-col rounded-lg border bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md ${
                service.featured
                  ? 'border-dacoda-orange border-t-[3px]'
                  : 'border-t-[3px] border-gray-100 border-t-[var(--dacoda-orange)]'
              }`}
            >
              <service.icon className="text-dacoda-orange mb-4 h-8 w-8" />
              <h3 className="text-dacoda-navy mb-2 text-lg font-bold">
                {service.title}
              </h3>
              <p className="text-dacoda-gray mb-4 flex-1 text-sm leading-relaxed">
                {service.text}
              </p>
              <span className="text-dacoda-orange inline-flex items-center gap-1 text-sm font-medium">
                Află mai mult
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}

          {/* CTA Card */}
          <div
            className="flex flex-col justify-center rounded-lg p-6 text-white"
            style={{ backgroundColor: 'var(--dacoda-navy)' }}
          >
            <h3 className="mb-2 text-lg font-bold">Ai o cerere specifică?</h3>
            <p className="mb-6 text-sm text-white/70">
              Descrie-ne transportul și îți răspundem în 2 ore.
            </p>
            <Link
              href="/cerere-oferta"
              className="bg-dacoda-orange hover:bg-dacoda-orange-dark inline-flex w-fit items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium text-white transition-colors"
            >
              Cere ofertă
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
