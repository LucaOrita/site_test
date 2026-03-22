'use client';

import { ArrowRight, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// Natural Earth TopoJSON — world countries, hosted on CDN
const GEO_URL =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// ISO numeric → ISO alpha-2 mapping for countries we cover
const NUMERIC_TO_CODE: Record<string, string> = {
  '276': 'DE',
  '250': 'FR',
  '380': 'IT',
  '724': 'ES',
  '528': 'NL',
  '056': 'BE',
  '616': 'PL',
  '348': 'HU',
  '040': 'AT',
  '203': 'CZ',
  '703': 'SK',
  '100': 'BG',
  '300': 'GR',
  '620': 'PT',
  '752': 'SE',
  '208': 'DK',
  '756': 'CH',
  '191': 'HR',
  '688': 'RS',
  '498': 'MD',
  '804': 'UA',
  '112': 'BY',
  '643': 'RU',
  '398': 'KZ',
  '268': 'GE',
  '051': 'AM',
  '031': 'AZ',
  '792': 'TR',
  '364': 'IR',
  '682': 'SA',
  '784': 'AE',
  '156': 'CN',
  '356': 'IN',
  '642': 'RO',
  '442': 'LU',
  '246': 'FI',
  '578': 'NO',
  '352': 'IS',
  '372': 'IE',
  '826': 'GB',
  '440': 'LT',
  '428': 'LV',
  '233': 'EE',
  '807': 'MK',
  '008': 'AL',
  '070': 'BA',
  '499': 'ME',
  '705': 'SI',
  '196': 'CY',
  '470': 'MT',
};

interface CountryInfo {
  name: string;
  zone: 'europa' | 'csi' | 'orient';
  transport: string[];
  transitTime: string;
}

const COUNTRY_DATA: Record<string, CountryInfo> = {
  DE: {
    name: 'Germania',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~2-3 zile',
  },
  FR: {
    name: 'Franța',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~3-4 zile',
  },
  IT: {
    name: 'Italia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~2-3 zile',
  },
  ES: {
    name: 'Spania',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~4-5 zile',
  },
  NL: {
    name: 'Olanda',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~3-4 zile',
  },
  BE: {
    name: 'Belgia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~3-4 zile',
  },
  PL: {
    name: 'Polonia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~1-2 zile',
  },
  HU: {
    name: 'Ungaria',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~1 zi',
  },
  AT: {
    name: 'Austria',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~1-2 zile',
  },
  CZ: {
    name: 'Cehia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~1-2 zile',
  },
  SK: {
    name: 'Slovacia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~1 zi',
  },
  BG: {
    name: 'Bulgaria',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~1 zi',
  },
  GR: {
    name: 'Grecia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~2-3 zile',
  },
  PT: {
    name: 'Portugalia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~5-6 zile',
  },
  SE: {
    name: 'Suedia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~3-4 zile',
  },
  DK: {
    name: 'Danemarca',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~3 zile',
  },
  CH: {
    name: 'Elveția',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~2-3 zile',
  },
  HR: {
    name: 'Croația',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~1-2 zile',
  },
  RS: {
    name: 'Serbia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~1 zi',
  },
  MD: {
    name: 'Moldova',
    zone: 'csi',
    transport: ['Rutier extracomunitar'],
    transitTime: '~1 zi',
  },
  RO: {
    name: 'România',
    zone: 'europa',
    transport: ['Intern + FTL/LTL'],
    transitTime: 'origine',
  },
  GB: {
    name: 'Marea Britanie',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~4-5 zile',
  },
  IE: {
    name: 'Irlanda',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~5-6 zile',
  },
  FI: {
    name: 'Finlanda',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~4-5 zile',
  },
  NO: {
    name: 'Norvegia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~4-5 zile',
  },
  LT: {
    name: 'Lituania',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~2 zile',
  },
  LV: {
    name: 'Letonia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~2-3 zile',
  },
  EE: {
    name: 'Estonia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~3 zile',
  },
  LU: {
    name: 'Luxemburg',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~3-4 zile',
  },
  SI: {
    name: 'Slovenia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~1-2 zile',
  },
  MK: {
    name: 'Macedonia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~1-2 zile',
  },
  AL: {
    name: 'Albania',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~2 zile',
  },
  UA: {
    name: 'Ucraina',
    zone: 'csi',
    transport: ['Rutier extracomunitar'],
    transitTime: '~1-2 zile',
  },
  BY: {
    name: 'Belarus',
    zone: 'csi',
    transport: ['Rutier extracomunitar'],
    transitTime: '~2-3 zile',
  },
  RU: {
    name: 'Rusia',
    zone: 'csi',
    transport: ['Rutier extracomunitar'],
    transitTime: '~4-7 zile',
  },
  KZ: {
    name: 'Kazahstan',
    zone: 'csi',
    transport: ['Rutier extracomunitar'],
    transitTime: '~7-10 zile',
  },
  GE: {
    name: 'Georgia',
    zone: 'csi',
    transport: ['Rutier extracomunitar'],
    transitTime: '~3-4 zile',
  },
  AM: {
    name: 'Armenia',
    zone: 'csi',
    transport: ['Rutier extracomunitar'],
    transitTime: '~4-5 zile',
  },
  AZ: {
    name: 'Azerbaidjan',
    zone: 'csi',
    transport: ['Rutier extracomunitar'],
    transitTime: '~4-5 zile',
  },
  TR: {
    name: 'Turcia',
    zone: 'orient',
    transport: ['Rutier extracomunitar'],
    transitTime: '~2-3 zile',
  },
  IR: {
    name: 'Iran',
    zone: 'orient',
    transport: ['Rutier extracomunitar'],
    transitTime: '~5-7 zile',
  },
  AE: {
    name: 'EAU',
    zone: 'orient',
    transport: ['Aerian', 'Maritim'],
    transitTime: '~1-2 zile (aerian)',
  },
  SA: {
    name: 'Arabia Saudită',
    zone: 'orient',
    transport: ['Aerian', 'Maritim'],
    transitTime: '~1-2 zile (aerian)',
  },
  CN: {
    name: 'China',
    zone: 'orient',
    transport: ['Aerian', 'Maritim'],
    transitTime: '~2-3 zile (aerian)',
  },
  IN: {
    name: 'India',
    zone: 'orient',
    transport: ['Aerian', 'Maritim'],
    transitTime: '~1-2 zile (aerian)',
  },
};

const ZONE_COLORS = {
  europa: { base: '#1a7a5e', hover: '#0f5c44' },
  csi: { base: '#1a5c9e', hover: '#0f4478' },
  orient: { base: '#c4780f', hover: '#9a5e0a' },
};

const DEFAULT_COLOR = '#d1d5db';

export default function DacodaEuropeMap() {
  const [selected, setSelected] = useState<string | null>(null);

  const getColor = (code: string | undefined, isHovered: boolean) => {
    if (!code || !COUNTRY_DATA[code]) return DEFAULT_COLOR;
    const zone = COUNTRY_DATA[code].zone;
    return isHovered ? ZONE_COLORS[zone].hover : ZONE_COLORS[zone].base;
  };

  const selectedData = selected ? COUNTRY_DATA[selected] : null;

  return (
    <section className="bg-white">
      <div className="container px-4 py-12 lg:px-6 lg:py-16">
        {/* Legend */}
        <div className="mb-6 flex flex-wrap justify-center gap-4 text-sm">
          {[
            { color: '#1a7a5e', label: 'Europa: rutier direct' },
            { color: '#1a5c9e', label: 'CSI & Est: extracomunitar' },
            {
              color: '#c4780f',
              label: 'Orient & Asia: rutier/aerian/maritim',
            },
            { color: DEFAULT_COLOR, label: 'Neacoperit' },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-2">
              <div
                className="h-3 w-5 rounded"
                style={{ backgroundColor: color }}
              />
              <span className="text-gray-600">{label}</span>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-slate-50 shadow-sm">
          <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{ rotate: [-20, -52, 0], scale: 680 }}
            style={{ width: '100%', height: 'auto' }}
            viewBox="0 0 900 500"
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const numericId = String(geo.id).padStart(3, '0');
                  const code = NUMERIC_TO_CODE[numericId];
                  const isCovered = !!(code && COUNTRY_DATA[code]);
                  const isSelected = code === selected;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => {
                        if (code && COUNTRY_DATA[code])
                          setSelected((prev) => (prev === code ? null : code));
                      }}
                      style={{
                        default: {
                          fill: isSelected ? '#0D1F3C' : getColor(code, false),
                          stroke: '#fff',
                          strokeWidth: 0.5,
                          outline: 'none',
                        },
                        hover: {
                          fill: isCovered ? getColor(code, true) : '#9ca3af',
                          stroke: '#fff',
                          strokeWidth: 0.5,
                          outline: 'none',
                          cursor: isCovered ? 'pointer' : 'default',
                        },
                        pressed: {
                          fill: '#0D1F3C',
                          outline: 'none',
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>

          {/* Info panel */}
          {selectedData && selected && (
            <div className="absolute top-4 right-4 w-64 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <h3
                    className="font-bold"
                    style={{ color: 'var(--dacoda-navy)' }}
                  >
                    {selectedData.name}
                  </h3>
                  <span
                    className="mt-0.5 inline-block rounded-full px-2 py-0.5 text-xs font-medium text-white"
                    style={{
                      backgroundColor: ZONE_COLORS[selectedData.zone].base,
                    }}
                  >
                    {selectedData.zone === 'europa'
                      ? 'Europa'
                      : selectedData.zone === 'csi'
                        ? 'CSI & Est'
                        : 'Orient & Asia'}
                  </span>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <span>🚛</span>
                  <span>{selectedData.transport.join(', ')}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>⏱</span>
                  <span>
                    Transit din RO: <strong>{selectedData.transitTime}</strong>
                  </span>
                </div>
              </div>
              <Link
                href="/cerere-oferta"
                className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--dacoda-orange)' }}
              >
                Cere ofertă pentru {selectedData.name}
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          )}

          <p className="absolute right-3 bottom-2 text-xs text-gray-400">
            Click pe o țară pentru detalii
          </p>
        </div>

        {/* Country lists */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {(
            [
              ['europa', '🇪🇺 Europa'],
              ['csi', '🌐 CSI & Est'],
              ['orient', '🌍 Orient & Asia'],
            ] as const
          ).map(([zone, title]) => (
            <div key={zone}>
              <h3
                className="mb-3 text-sm font-bold tracking-wider uppercase"
                style={{ color: ZONE_COLORS[zone].base }}
              >
                {title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {Object.entries(COUNTRY_DATA)
                  .filter(([, v]) => v.zone === zone)
                  .map(([code, v]) => (
                    <button
                      key={code}
                      onClick={() =>
                        setSelected((prev) => (prev === code ? null : code))
                      }
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium transition-all ${
                        selected === code
                          ? 'text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                      style={
                        selected === code
                          ? {
                              backgroundColor: ZONE_COLORS[zone].base,
                            }
                          : {}
                      }
                    >
                      {v.name}
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
