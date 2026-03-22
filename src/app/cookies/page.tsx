import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politică Cookies | DACODA SRL',
  description: 'Politica de utilizare a cookie-urilor pe site-ul DACODA SRL.',
};

export default function CookiesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: 'var(--dacoda-navy)' }}>
        <div className="container px-4 pt-32 pb-16 text-center lg:px-6 lg:pt-40 lg:pb-24">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Politică Cookies
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70">
            Ultima actualizare: Martie 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <article className="prose prose-lg mx-auto max-w-3xl">
            <h2>1. Ce sunt cookie-urile?</h2>
            <p>
              Cookie-urile sunt fișiere text mici stocate pe dispozitivul
              dumneavoastră atunci când vizitați un site web. Acestea permit
              site-ului să vă recunoască și să rețină anumite informații despre
              vizita dumneavoastră.
            </p>

            <h2>2. Cookie-uri utilizate</h2>
            <p>
              Site-ul dacoda.ro utilizează următoarele tipuri de cookie-uri:
            </p>

            <h3>Cookie-uri esențiale</h3>
            <ul>
              <li>
                <strong>dacoda-theme</strong>: Reține preferința de temă (light
                / dark)
              </li>
              <li>
                <strong>cookies-accepted</strong>: Reține acordul pentru
                cookie-uri
              </li>
            </ul>

            <h3>Cookie-uri analitice (opțional)</h3>
            <p>
              Putem utiliza servicii de analiză (ex. Google Analytics) pentru a
              înțelege cum este utilizat site-ul. Aceste cookie-uri colectează
              informații anonime despre paginile vizitate, durata vizitei și
              sursa traficului.
            </p>

            <h2>3. Durata de stocare</h2>
            <ul>
              <li>Cookie-uri de sesiune: se șterg la închiderea browserului</li>
              <li>
                Cookie-uri persistente: rămân pe dispozitiv conform duratei
                specificate (de regulă 1 an)
              </li>
            </ul>

            <h2>4. Cum puteți controla cookie-urile</h2>
            <p>
              Puteți controla și/sau șterge cookie-urile din setările
              browserului. Puteți șterge toate cookie-urile existente și puteți
              seta browserul să blocheze cookie-urile noi. Rețineți că unele
              funcționalități ale site-ului pot fi afectate.
            </p>
            <p>Instrucțiuni pentru browserele principale:</p>
            <ul>
              <li>
                <strong>Chrome:</strong> Setări → Confidențialitate și
                securitate → Cookie-uri
              </li>
              <li>
                <strong>Firefox:</strong> Setări → Confidențialitate →
                Cookie-uri
              </li>
              <li>
                <strong>Safari:</strong> Preferințe → Confidențialitate
              </li>
              <li>
                <strong>Edge:</strong> Setări → Cookie-uri și permisiuni site
              </li>
            </ul>

            <h2>5. Modificări</h2>
            <p>
              Această politică poate fi actualizată periodic. Data ultimei
              actualizări este menționată la începutul paginii.
            </p>

            <h2>6. Contact</h2>
            <p>Pentru întrebări legate de politica de cookie-uri:</p>
            <p>
              DACODA SRL
              <br />
              Email:{' '}
              <a href="mailto:comercial@dacoda.ro">comercial@dacoda.ro</a>
              <br />
              Telefon: <a href="tel:+40785225446">+40 785 225 446</a>
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
