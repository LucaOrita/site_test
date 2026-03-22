import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Star,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SERVICII = [
  { name: 'Transport Rutier', href: '/servicii/transport-rutier' },
  { name: 'Transport ADR', href: '/servicii/transport-adr' },
  { name: 'Transport Frigorific', href: '/servicii/transport-frigorific' },
  { name: 'Transport Agabaritic', href: '/servicii/transport-agabaritic' },
  { name: 'Aerian & Maritim', href: '/servicii/aerian-maritim' },
];

const COMPANIE = [
  { name: 'Despre noi', href: '/despre-noi' },
  { name: 'Blog', href: '/blog' },
  { name: 'Cariere', href: '/cariere' },
  { name: 'Transportatori', href: '/transportatori' },
  { name: 'Contact', href: '/contact' },
];

const LEGAL = [
  { name: 'Politică confidențialitate', href: '/confidentialitate' },
  { name: 'Termeni și condiții', href: '/termeni' },
  { name: 'Politică cookies', href: '/cookies' },
];

export default function Footer() {
  return (
    <footer className="bg-dacoda-navy text-white">
      <div className="container px-4 py-12 lg:px-6 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Column 1 — Brand & Social */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo-dacoda-simplu.png"
                  alt="DACODA Expediții Rutiere"
                  width={180}
                  height={62}
                  className="h-14 w-auto brightness-0 invert lg:h-16"
                />
              </Link>
              <p className="text-dacoda-orange mt-2 text-sm font-medium">
                Siguranță și Predictibilitate
              </p>
            </div>

            <p className="text-sm leading-relaxed text-white/60">
              Casă de expediții cu tradiție din 1993.
              <br />
              Capital 100% românesc.
            </p>

            {/* Social */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/15"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/15"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/15"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://g.page/dacoda-srl"
                target="_blank"
                rel="noreferrer"
                aria-label="Google Reviews"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/15"
              >
                <Star className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2 — Servicii */}
          <div>
            <h4 className="mb-4 text-xs font-medium tracking-wider text-white/50 uppercase">
              Servicii
            </h4>
            <ul className="space-y-3">
              {SERVICII.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-dacoda-orange text-sm text-gray-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Companie */}
          <div>
            <h4 className="mb-4 text-xs font-medium tracking-wider text-white/50 uppercase">
              Companie
            </h4>
            <ul className="space-y-3">
              {COMPANIE.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-dacoda-orange text-sm text-gray-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Legal */}
          <div>
            <h4 className="mb-4 text-xs font-medium tracking-wider text-white/50 uppercase">
              Legal
            </h4>
            <ul className="space-y-3">
              {LEGAL.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-dacoda-orange text-sm text-gray-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="text-sm text-gray-400">
                Licență intermediere transport
              </li>
            </ul>
          </div>

          {/* Column 5 — Puncte de lucru (rightmost) */}
          <div className="space-y-5">
            <h4 className="mb-4 text-xs font-medium tracking-wider text-white/50 uppercase">
              Puncte de lucru
            </h4>

            {/* București */}
            <div className="space-y-2 text-sm text-white/70">
              <p className="font-medium text-white/90">Sediu: București</p>
              <div className="flex items-start gap-2">
                <MapPin className="text-dacoda-orange mt-0.5 h-4 w-4 shrink-0" />
                <span>Str. Vespasian nr. 41A, et. 1, Sector 1</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-dacoda-orange h-4 w-4 shrink-0" />
                <a
                  href="tel:+40785225446"
                  className="transition-colors hover:text-white"
                >
                  +40 785 225 446
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-dacoda-orange h-4 w-4 shrink-0" />
                <a
                  href="mailto:oritaluca@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  oritaluca@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-dacoda-orange h-4 w-4 shrink-0" />
                <span>Luni–Vineri, 8:30–17:30</span>
              </div>
            </div>

            {/* Cluj-Napoca */}
            <div className="space-y-2 border-t border-white/10 pt-4 text-sm text-white/70">
              <p className="font-medium text-white/90">
                Punct de lucru: Cluj-Napoca
              </p>
              <div className="flex items-start gap-2">
                <MapPin className="text-dacoda-orange mt-0.5 h-4 w-4 shrink-0" />
                <span>Str. Croitorilor nr. 16, Cluj-Napoca</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-dacoda-orange h-4 w-4 shrink-0" />
                <a
                  href="tel:+40785225446"
                  className="transition-colors hover:text-white"
                >
                  +40 785 225 446
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-dacoda-orange h-4 w-4 shrink-0" />
                <a
                  href="mailto:oritaluca@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  oritaluca@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-dacoda-orange h-4 w-4 shrink-0" />
                <span>Luni–Vineri, 8:30–17:30</span>
              </div>
            </div>

            <p className="text-xs text-white/40">CUI: 4989577</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 lg:mt-20">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/50">
              &copy; 2025 DACODA SRL &middot; Toate drepturile rezervate
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/confidentialitate"
                className="hover:text-dacoda-orange text-xs text-white/50 transition-colors"
              >
                Confidențialitate
              </Link>
              <Link
                href="/termeni"
                className="hover:text-dacoda-orange text-xs text-white/50 transition-colors"
              >
                Termeni
              </Link>
              <Link
                href="/cookies"
                className="hover:text-dacoda-orange text-xs text-white/50 transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
