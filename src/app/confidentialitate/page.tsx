import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politică de Confidențialitate | DACODA SRL',
  description:
    'Politica de confidențialitate DACODA SRL: cum colectăm, utilizăm și protejăm datele personale conform GDPR.',
};

export default function ConfidentialitatePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: 'var(--dacoda-navy)' }}>
        <div className="container px-4 pt-32 pb-16 text-center lg:px-6 lg:pt-40 lg:pb-24">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Politică de Confidențialitate
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
            <h2>1. Introducere</h2>
            <p>
              DACODA SRL (&quot;Compania&quot;, &quot;noi&quot;), cu sediul în
              Timișoara, România, respectă confidențialitatea datelor
              dumneavoastră personale și se angajează să le protejeze în
              conformitate cu Regulamentul General privind Protecția Datelor
              (GDPR) – Regulamentul (UE) 2016/679.
            </p>
            <p>
              Această politică descrie ce date colectăm, cum le utilizăm și
              drepturile pe care le aveți în legătură cu datele dumneavoastră
              personale.
            </p>

            <h2>2. Date colectate</h2>
            <p>Putem colecta următoarele categorii de date personale:</p>
            <ul>
              <li>
                <strong>Date de identificare:</strong> nume, prenume, denumire
                firmă, CUI
              </li>
              <li>
                <strong>Date de contact:</strong> adresă email, număr de
                telefon, adresă fizică
              </li>
              <li>
                <strong>Date tehnice:</strong> adresă IP, tip browser, pagini
                vizitate, durata vizitei
              </li>
              <li>
                <strong>Date de transport:</strong> detalii despre mărfuri,
                rute, preferințe de transport
              </li>
            </ul>

            <h2>3. Scopul prelucrării</h2>
            <p>Utilizăm datele dumneavoastră pentru:</p>
            <ul>
              <li>
                Furnizarea serviciilor de expediție și transport solicitate
              </li>
              <li>Comunicarea ofertelor și informațiilor solicitate</li>
              <li>Îmbunătățirea serviciilor și a experienței pe site</li>
              <li>Respectarea obligațiilor legale și contractuale</li>
              <li>Gestionarea relației cu transportatorii parteneri</li>
            </ul>

            <h2>4. Temeiul juridic</h2>
            <p>Prelucrăm datele dumneavoastră pe baza:</p>
            <ul>
              <li>
                Consimțământului dumneavoastră (pentru formulare de contact)
              </li>
              <li>
                Executării unui contract (pentru serviciile de transport
                solicitate)
              </li>
              <li>
                Interesului nostru legitim (pentru îmbunătățirea serviciilor)
              </li>
              <li>
                Obligațiilor legale (legislația transporturilor, fiscalitate)
              </li>
            </ul>

            <h2>5. Partajarea datelor</h2>
            <p>Nu vindem datele dumneavoastră. Putem partaja informații cu:</p>
            <ul>
              <li>
                Transportatori parteneri (strict pentru executarea
                transportului)
              </li>
              <li>Furnizori de servicii IT (hosting, email, formulare)</li>
              <li>Autorități publice (când legea o impune)</li>
            </ul>

            <h2>6. Durata stocării</h2>
            <p>
              Păstrăm datele personale pe durata relației contractuale și pentru
              o perioadă suplimentară conform obligațiilor legale (de regulă 5
              ani pentru documentele fiscale). Datele colectate prin formulare
              de contact sunt păstrate maxim 2 ani.
            </p>

            <h2>7. Drepturile dumneavoastră</h2>
            <p>Conform GDPR, aveți dreptul la:</p>
            <ul>
              <li>Acces la datele personale</li>
              <li>Rectificarea datelor inexacte</li>
              <li>Ștergerea datelor (&quot;dreptul de a fi uitat&quot;)</li>
              <li>Restricționarea prelucrării</li>
              <li>Portabilitatea datelor</li>
              <li>Opoziția la prelucrare</li>
              <li>Retragerea consimțământului</li>
            </ul>
            <p>
              Pentru exercitarea drepturilor, contactați-ne la{' '}
              <a href="mailto:comercial@dacoda.ro">comercial@dacoda.ro</a>.
            </p>

            <h2>8. Securitatea datelor</h2>
            <p>
              Implementăm măsuri tehnice și organizatorice adecvate pentru
              protejarea datelor personale împotriva accesului neautorizat,
              pierderii sau distrugerii.
            </p>

            <h2>9. Contact</h2>
            <p>Pentru orice întrebări legate de protecția datelor personale:</p>
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
