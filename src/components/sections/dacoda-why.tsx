import { MapPin, Phone, Shield, Users } from 'lucide-react';
import Image from 'next/image';

const cards = [
  {
    icon: MapPin,
    title: 'Cunoaștem rutele',
    text: '32 de ani pe aceleași coridoare înseamnă că știm ce se întâmplă la granița cu Kazahstanul și cum rezolvăm.',
  },
  {
    icon: Shield,
    title: 'Gestionăm riscurile',
    text: 'Management complet conform Convenției CMR. Marfa ta e acoperită, documentat, de la încărcare la livrare.',
  },
  {
    icon: Phone,
    title: 'Oameni, nu chatboți',
    text: 'O persoană reală cunoaște dosarul tău și îți răspunde când ai nevoie, nu un sistem automatizat.',
  },
  {
    icon: Users,
    title: 'Relații, nu tranzacții',
    text: 'Clienții noștri revin. Cei mai mulți colaborează cu noi de ani de zile. Asta spune mai mult decât orice statistică.',
  },
];

export default function DacodaWhy() {
  return (
    <section
      className="py-16 lg:py-20"
      style={{ backgroundColor: 'var(--dacoda-light)' }}
    >
      <div className="container px-4 lg:px-6">
        {/* Titlu centrat sus */}
        <div className="mb-10 text-center">
          <h2
            className="mb-3 text-3xl font-bold"
            style={{ color: 'var(--dacoda-navy)' }}
          >
            Ce înseamnă să lucrezi cu noi
          </h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Nu suntem un simplu intermediar. Suntem echipa care cunoaște fiecare
            rută, fiecare risc și fiecare soluție.
          </p>
        </div>

        {/* 2 coloane: stânga foto, dreapta carduri */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Coloana stânga — fotografie reală */}
          <div
            className="relative overflow-hidden rounded-2xl shadow-md"
            style={{ height: '420px' }}
          >
            <Image
              src="/images/agabaritic/2.jpg"
              alt="Transport tractoare John Deere platformă DACODA SRL 32 ani experiență"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute right-0 bottom-0 left-0 px-5 py-4"
              style={{
                background:
                  'linear-gradient(to top,rgba(13,31,60,.85) 0%,transparent 100%)',
              }}
            >
              <p className="text-xs" style={{ color: 'rgba(255,255,255,.6)' }}>
                Transport executat de DACODA SRL
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                4 tractoare John Deere, platformă specială internațională
              </p>
            </div>
          </div>

          {/* Coloana dreapta — cele 4 carduri */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cards.map((card) => (
              <div
                key={card.title}
                className="border-dacoda-orange rounded-lg border border-l-[3px] bg-white p-6 transition-shadow hover:shadow-md"
              >
                <card.icon className="text-dacoda-orange mb-3 h-6 w-6" />
                <h3 className="text-dacoda-navy mb-2 text-base font-bold">
                  {card.title}
                </h3>
                <p className="text-dacoda-gray text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
