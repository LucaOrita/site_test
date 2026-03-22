import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pagina nu a fost găsită | DACODA SRL',
};

export default function NotFound() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-4 text-center"
      style={{ backgroundColor: 'var(--dacoda-navy)' }}
    >
      <div
        className="mb-2 text-9xl leading-none font-bold"
        style={{ color: 'var(--dacoda-orange)' }}
        aria-hidden="true"
      >
        404
      </div>

      <h1 className="mb-4 text-2xl font-semibold text-white">
        Pagina nu a fost găsită
      </h1>

      <p
        className="mb-8 max-w-md text-base leading-relaxed"
        style={{ color: 'rgba(255,255,255,0.6)' }}
      >
        Se pare că ruta pe care o cauți nu există sau a fost mutată. Ca și în
        transport, uneori trebuie să recalculezi drumul.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-lg px-6 py-3 font-medium text-white transition-opacity hover:opacity-85"
          style={{ backgroundColor: 'var(--dacoda-orange)' }}
        >
          Înapoi la pagina principală
        </Link>
        <Link
          href="/cerere-oferta"
          className="rounded-lg border px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
          style={{ borderColor: 'rgba(255,255,255,0.2)' }}
        >
          Cere o ofertă
        </Link>
      </div>

      <p className="mt-10 text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
        Sau contactează-ne direct:{' '}
        <a
          href="tel:+40785225446"
          className="underline transition-colors hover:text-white"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          +40 785 225 446
        </a>
      </p>
    </div>
  );
}
