import {
  ArrowRight,
  BarChart2,
  Building2,
  Eye,
  Globe,
  Handshake,
  Phone,
  Shield,
  Zap,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Despre DACODA SRL | 32 ani în transporturi',
  description:
    'Casă de expediții fondată în 1993, capital 100% românesc. Experiență în transport rutier internațional, ADR, frigorific și agabaritic.',
  alternates: {
    canonical: 'https://dacoda.ro/despre-noi',
  },
  openGraph: {
    title: 'Despre DACODA SRL | 32 ani în transporturi',
    description:
      'Casă de expediții fondată în 1993. Capital 100% românesc. 1.100+ clienți activi, 3.500+ transportatori parteneri.',
    url: 'https://dacoda.ro/despre-noi',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const cifre = [
  { value: '32', label: 'ani activitate' },
  { value: '~8.400', label: 'curse/an' },
  { value: '1.100+', label: 'clienți activi' },
  { value: '3.500+', label: 'transportatori' },
  { value: '40+', label: 'țări' },
];

const valori = [
  {
    icon: Shield,
    title: 'Siguranță',
    text: 'Marfa ta ajunge la destinație în condițiile stabilite. Management complet conform Convenției CMR.',
  },
  {
    icon: BarChart2,
    title: 'Predictibilitate',
    text: 'Știi ce se întâmplă cu transportul tău în fiecare moment. Fără surprize.',
  },
  {
    icon: Eye,
    title: 'Transparență',
    text: 'Comunicare deschisă pe tot parcursul transportului. O persoană reală îți răspunde.',
  },
  {
    icon: Zap,
    title: 'Eficiență',
    text: 'Soluția potrivită pentru nevoile tale, negociată din experiența a 3.500+ transportatori parteneri.',
  },
];

const certificari = [
  { badge: 'ISO', text: 'Standard internațional de management al calității' },
  { badge: 'CMR', text: 'Convenția de transport internațional rutier' },
  { badge: 'ADR', text: 'Autorizație transport mărfuri periculoase' },
];

const diferentiatori = [
  {
    icon: Globe,
    title: 'Expertiza CSI',
    text: 'Rute în Ucraina, Kazakhstan, Georgia, Armenia, piețe pe care puțini expeditori din România le cunosc.',
  },
  {
    icon: Building2,
    title: 'Capital 100% românesc',
    text: 'Nu suntem filiala unui grup multinațional. Deciziile se iau aici, în România.',
  },
  {
    icon: Handshake,
    title: 'Relații de lungă durată',
    text: 'Mulți clienți colaborează cu noi de 10+ ani. Asta spune mai mult decât orice promisiune.',
  },
  {
    icon: Phone,
    title: 'Oameni, nu sisteme',
    text: 'Ai un interlocutor real care cunoaște dosarul tău, nu un ticket number.',
  },
];

export default function DespreNoiPage() {
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
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Despre DACODA
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            O companie românească cu 32 de ani de experiență în organizarea
            transporturilor internaționale.
          </p>
        </div>
      </section>

      {/* Povestea noastră */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — text */}
            <div>
              <p className="text-dacoda-orange mb-3 text-xs font-medium tracking-widest uppercase">
                Povestea noastră
              </p>
              <h2 className="text-dacoda-navy mb-6 text-3xl font-bold md:text-4xl">
                Din 1993, în serviciul transporturilor
              </h2>
              <div className="text-dacoda-gray space-y-4 text-base leading-relaxed">
                <p>
                  DACODA SRL a pornit în 1993 ca un departament specializat în
                  transporturi, devenind în timp o companie independentă cu o
                  istorie de peste trei decenii.
                </p>
                <p>
                  De-a lungul anilor, am construit relații solide cu
                  transportatori din toată Europa și am acumulat experiența
                  necesară pentru a gestiona orice tip de transport, de la marfă
                  generală la mărfuri periculoase, agabaritice sau care necesită
                  temperatură controlată.
                </p>
                <p>
                  Astăzi, DACODA organizează ~8.400 de curse pe an pentru peste
                  1.100 de clienți activi din România și Europa, acoperind 40+
                  țări cu o rețea de 3.500+ transportatori parteneri.
                </p>
              </div>
            </div>

            {/* Right — fotografie */}
            <div
              className="relative overflow-hidden rounded-2xl shadow-lg"
              style={{ height: '420px' }}
            >
              <Image
                src="/images/agabaritic/11Lili.jpg"
                alt="Transport DACODA SRL Volvo FH convoi excepțional 32 ani experiență"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 35%' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute top-4 left-4 rounded-full px-4 py-2 text-sm font-semibold text-white"
                style={{ backgroundColor: 'var(--dacoda-navy)' }}
              >
                Din 1993 · 32 ani
              </div>
            </div>
          </div>

          {/* Cifre — bar orizontal */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {cifre.map((item) => (
              <div
                key={item.label}
                className="border-dacoda-orange border-l-[3px] pl-4"
              >
                <span className="text-dacoda-orange text-2xl font-bold">
                  {item.value}
                </span>
                <p className="text-dacoda-gray text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valorile noastre */}
      <section style={{ backgroundColor: 'var(--dacoda-light)' }}>
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <div className="mb-12 text-center">
            <h2 className="text-dacoda-navy mb-4 text-3xl font-bold md:text-4xl">
              Valorile noastre
            </h2>
            <div className="bg-dacoda-orange mx-auto h-0.5 w-12" />
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {valori.map((val) => (
              <div
                key={val.title}
                className="border-dacoda-orange rounded-lg border border-l-[3px] bg-white p-6 transition-shadow hover:shadow-md"
              >
                <val.icon className="text-dacoda-orange mb-3 h-6 w-6" />
                <h3 className="text-dacoda-navy mb-2 text-base font-bold">
                  {val.title}
                </h3>
                <p className="text-dacoda-gray text-sm leading-relaxed">
                  {val.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificări */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <div className="mb-12 text-center">
            <h2 className="text-dacoda-navy mb-4 text-3xl font-bold md:text-4xl">
              Certificări și acreditări
            </h2>
            <div className="bg-dacoda-orange mx-auto h-0.5 w-12" />
          </div>

          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-6">
            {certificari.map((cert) => (
              <div
                key={cert.badge}
                className="flex w-56 flex-col items-center rounded-xl border border-gray-100 p-6 text-center transition-shadow hover:shadow-md"
              >
                <span className="text-dacoda-navy border-dacoda-navy/30 mb-3 flex h-14 w-14 items-center justify-center rounded-full border text-lg font-bold">
                  {cert.badge}
                </span>
                <p className="text-dacoda-gray text-sm leading-relaxed">
                  {cert.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce ne face diferiți */}
      <section style={{ backgroundColor: 'var(--dacoda-light)' }}>
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <div className="mb-12 max-w-md">
            <h2 className="text-dacoda-navy mb-4 text-3xl font-bold md:text-4xl">
              Ce ne face diferiți
            </h2>
            <div className="bg-dacoda-orange mt-4 h-0.5 w-12" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {diferentiatori.map((item) => (
              <div key={item.title} className="rounded-lg bg-white p-6">
                <item.icon className="text-dacoda-orange mb-4 h-7 w-7" />
                <h3 className="text-dacoda-navy mb-2 text-base font-bold">
                  {item.title}
                </h3>
                <p className="text-dacoda-gray text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--dacoda-navy)' }}>
        <div className="container px-4 py-12 text-center lg:px-6 lg:py-16">
          <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
            Vrei să colaborăm?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/cerere-oferta"
              className="bg-dacoda-orange hover:bg-dacoda-orange-dark inline-flex items-center gap-2 rounded-xl px-8 py-3 text-sm font-medium text-white transition-colors"
            >
              Cere o ofertă
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Contactează-ne direct
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
