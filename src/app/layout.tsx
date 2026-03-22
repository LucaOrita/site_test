import './globals.css';

import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';

import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import CookieBanner from '@/components/ui/cookie-banner';
import WhatsAppWidget from '@/components/ui/whatsapp-widget';

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/satoshi/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dacoda.ro',
  ),
  title: {
    default: 'DACODA SRL | Transport Rutier Internațional',
    template: '%s | DACODA SRL',
  },
  description:
    'Casă de expediții cu tradiție din 1993. Transport rutier, ADR, frigorific și agabaritic în Europa, CSI și Asia. 32 ani experiență. +40 785 225 446',
  keywords: [
    'transport rutier',
    'casa expeditii',
    'transport international',
    'transport ADR',
    'transport agabaritic',
    'expeditii Romania',
    'transport frigorific',
    'transport CSI',
    'DACODA',
  ],
  authors: [{ name: 'DACODA SRL', url: 'https://dacoda.ro' }],
  creator: 'DACODA SRL',
  publisher: 'DACODA SRL',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://dacoda.ro',
    siteName: 'DACODA SRL',
    title: 'DACODA SRL | Transport Rutier Internațional',
    description:
      'Casă de expediții cu 32 ani experiență. Transport rutier, ADR, frigorific, agabaritic în 40+ țări.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DACODA SRL | Transport Rutier Internațional',
    description:
      'Casă de expediții cu 32 ani experiență în Europa, CSI și Asia.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://dacoda.ro',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B1E3D',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'FreightForwarder'],
      '@id': 'https://dacoda.ro/#organization',
      name: 'DACODA SRL',
      alternateName: 'Dacoda Expediții',
      description:
        'Casă de expediții fondată în 1993. Transport rutier internațional FTL/LTL/grupaj, ADR, frigorific, agabaritic, aerian și maritim. 32 ani experiență, 40+ țări.',
      url: 'https://dacoda.ro',
      telephone: '+40785225446',
      email: 'oritaluca@gmail.com',
      foundingDate: '1993',
      taxID: '4989577',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Str. Vespasian nr. 41A, et. 1',
        addressLocality: 'București',
        addressRegion: 'Sector 1',
        postalCode: '011741',
        addressCountry: 'RO',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 44.4525,
        longitude: 26.0855,
      },
      areaServed: [
        { '@type': 'Continent', name: 'Europe' },
        { '@type': 'Country', name: 'Germany' },
        { '@type': 'Country', name: 'France' },
        { '@type': 'Country', name: 'Italy' },
        { '@type': 'Country', name: 'Spain' },
        { '@type': 'Country', name: 'Netherlands' },
        { '@type': 'Country', name: 'Poland' },
        { '@type': 'Country', name: 'Hungary' },
        { '@type': 'Country', name: 'Austria' },
        { '@type': 'Country', name: 'Ukraine' },
        { '@type': 'Country', name: 'Kazakhstan' },
        { '@type': 'Country', name: 'Georgia' },
        { '@type': 'Country', name: 'Turkey' },
        { '@type': 'Country', name: 'China' },
        { '@type': 'Country', name: 'India' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicii transport internațional',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Transport Rutier Internațional FTL LTL',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Transport ADR Mărfuri Periculoase',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Transport Frigorific Temperatură Controlată',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Transport Agabaritic Mărfuri Supradimensionate',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Transport Aerian Cargo' },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Transport Maritim Container',
            },
          },
        ],
      },
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://dacoda.ro/#website',
      url: 'https://dacoda.ro',
      name: 'DACODA SRL',
      publisher: { '@id': 'https://dacoda.ro/#organization' },
      inLanguage: 'ro-RO',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body
        className={`h-screen ${satoshi.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="dacoda-theme"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppWidget />
          <CookieBanner />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
