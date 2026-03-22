import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termeni și Condiții | DACODA SRL',
  description:
    'Termenii și condițiile de utilizare a site-ului DACODA SRL și a serviciilor de expediție transport.',
};

export default function TermeniPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: 'var(--dacoda-navy)' }}>
        <div className="container px-4 pt-32 pb-16 text-center lg:px-6 lg:pt-40 lg:pb-24">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Termeni și Condiții
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
            <h2>1. Informații generale</h2>
            <p>
              Prezentele Termeni și Condiții reglementează utilizarea site-ului
              dacoda.ro, operat de DACODA SRL, cu sediul în Timișoara, România.
              Prin accesarea și utilizarea acestui site, sunteți de acord cu
              acești termeni.
            </p>

            <h2>2. Servicii</h2>
            <p>
              DACODA SRL este o casă de expediții care intermediază servicii de
              transport rutier internațional. Serviciile includ, fără a se
              limita la:
            </p>
            <ul>
              <li>Transport rutier standard (FTL, LTL, grupaj)</li>
              <li>Transport ADR (mărfuri periculoase)</li>
              <li>Transport frigorific (temperatură controlată)</li>
              <li>Transport agabaritic (mărfuri supradimensionate)</li>
              <li>Cargo aerian și maritim (prin parteneri)</li>
            </ul>

            <h2>3. Cereri de ofertă</h2>
            <p>
              Cererile de ofertă trimise prin site au caracter informativ și nu
              constituie un angajament contractual. Ofertele transmise de DACODA
              SRL sunt valabile conform termenilor menționați în fiecare ofertă
              individuală.
            </p>

            <h2>4. Responsabilitate</h2>
            <p>
              DACODA SRL acționează în calitate de expeditor, conform Convenției
              CMR privind contractul de transport internațional de mărfuri pe
              șosele. Responsabilitatea noastră este limitată conform
              prevederilor acestei convenții.
            </p>

            <h2>5. Proprietate intelectuală</h2>
            <p>
              Conținutul site-ului (texte, imagini, logo, design) este
              proprietatea DACODA SRL și este protejat de legislația privind
              drepturile de autor. Reproducerea fără acord scris este interzisă.
            </p>

            <h2>6. Limitarea răspunderii</h2>
            <p>
              Informațiile de pe site sunt furnizate &quot;ca atare&quot;.
              DACODA SRL nu garantează exactitatea completă a informațiilor
              prezentate și nu răspunde pentru eventualele erori sau omisiuni.
            </p>

            <h2>7. Linkuri externe</h2>
            <p>
              Site-ul poate conține linkuri către site-uri terțe. DACODA SRL nu
              răspunde pentru conținutul sau politicile de confidențialitate ale
              acestor site-uri.
            </p>

            <h2>8. Modificări</h2>
            <p>
              Ne rezervăm dreptul de a modifica acești termeni în orice moment.
              Modificările intră în vigoare la data publicării pe site.
            </p>

            <h2>9. Legislație aplicabilă</h2>
            <p>
              Acești termeni sunt guvernați de legislația din România. Orice
              dispută va fi soluționată de instanțele competente din Timișoara.
            </p>

            <h2>10. Contact</h2>
            <p>
              DACODA SRL
              <br />
              Timișoara, România
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
