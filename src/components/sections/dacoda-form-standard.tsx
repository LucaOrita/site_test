'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  AlertTriangle,
  Construction,
  Plane,
  Ship,
  Snowflake,
  Truck,
} from 'lucide-react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { DACODA_CONFIG, submitToFormspree } from '@/lib/config';
import { cn } from '@/lib/utils';

/* ─── Country list ─── */
const COUNTRIES: Record<string, string[]> = {
  Europa: [
    'România',
    'Germania',
    'Franța',
    'Italia',
    'Spania',
    'Olanda',
    'Belgia',
    'Polonia',
    'Ungaria',
    'Austria',
    'Cehia',
    'Slovacia',
    'Bulgaria',
    'Grecia',
    'Portugalia',
    'Suedia',
    'Danemarca',
    'Norvegia',
    'Finlanda',
    'Elveția',
    'Croația',
    'Serbia',
    'Slovenia',
    'Bosnia',
    'Albania',
    'Macedonia de Nord',
    'Muntenegru',
    'Kosovo',
    'Moldova',
    'Ucraina',
    'Belarus',
    'Estonia',
    'Letonia',
    'Lituania',
    'Luxemburg',
    'Malta',
    'Cipru',
    'Irlanda',
    'Marea Britanie',
  ],
  'CSI & Orient': [
    'Rusia',
    'Kazahstan',
    'Georgia',
    'Armenia',
    'Azerbaidjan',
    'Uzbekistan',
    'Turcia',
    'Iran',
    'Liban',
    'Iordania',
    'EAU',
    'Arabia Saudită',
    'Siria',
    'Irak',
  ],
  Asia: [
    'China',
    'India',
    'Japonia',
    'Coreea de Sud',
    'Vietnam',
    'Bangladesh',
    'Pakistan',
    'Thailanda',
    'Malaezia',
    'Singapore',
    'Indonezia',
  ],
  Altele: ['Maroc', 'Egipt', 'Tunisia', 'Africa de Sud', 'SUA', 'Canada'],
};

const TONNAGE_OPTIONS = [
  '< 1 tonă',
  '1–3 tone',
  '3–5 tone',
  '5–10 tone',
  '10–15 tone',
  '15–20 tone',
  '20–24 tone',
  'Peste 24 tone (agabaritic)',
];

const TRANSPORT_TYPES = [
  { value: 'rutier', label: 'Rutier Standard', icon: Truck },
  { value: 'adr', label: 'ADR (periculos)', icon: AlertTriangle },
  { value: 'frigorific', label: 'Frigorific', icon: Snowflake },
  { value: 'agabaritic', label: 'Agabaritic', icon: Construction },
  { value: 'aerian', label: 'Aerian', icon: Plane },
  { value: 'maritim', label: 'Maritim', icon: Ship },
];

const FLEX_OPTIONS = [
  { value: 'fix', label: 'Fix' },
  { value: 'interval', label: 'Interval' },
  { value: 'flexibil', label: 'Flexibil' },
] as const;

/* ─── Schema ─── */
const schema = z.object({
  taraOrigine: z.string().min(1, 'Selectează țara de origine'),
  orasOrigine: z.string().min(2, 'Introdu orașul'),
  adresaOrigine: z.string().min(5, 'Introdu adresa'),
  taraDestinatie: z.string().min(1, 'Selectează țara de destinație'),
  orasDestinatie: z.string().min(2, 'Introdu orașul'),
  adresaDestinatie: z.string().min(5, 'Introdu adresa'),
  tonaj: z.string().min(1, 'Selectează tonajul'),
  tipTransport: z.string().min(1, 'Selectează tipul de transport'),
  descriereMarfa: z.string().min(10, 'Descrie marfa pe scurt'),
  cerinteSpeciale: z.string().optional(),
  dataIncarcare: z.string().min(1, 'Selectează data'),
  dataLivrare: z.string().optional(),
  flexibilitateData: z.enum(['fix', 'interval', 'flexibil']).optional(),
  buget: z.string().optional(),
  moneda: z.enum(['EUR', 'RON']).optional(),
  numePrenume: z.string().min(3, 'Introdu numele complet'),
  firma: z.string().min(2, 'Introdu firma'),
  telefon: z.string().min(10, 'Număr de telefon invalid'),
  email: z.string().email('Email invalid'),
});

export type FormData = z.infer<typeof schema>;

interface Props {
  defaultValues?: Partial<FormData>;
}

export default function DacodaFormStandard({ defaultValues }: Props) {
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      flexibilitateData: 'fix',
      moneda: 'EUR',
      ...defaultValues,
    },
  });

  const flex = watch('flexibilitateData');

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('loading');

    const result = await submitToFormspree(DACODA_CONFIG.formspree.cerere, {
      _subject: `Transport ${data.taraOrigine} → ${data.taraDestinatie} | ${data.tipTransport}`,
      _replyto: data.email,
      Origine: `${data.taraOrigine}, ${data.orasOrigine}, ${data.adresaOrigine}`,
      Destinatie: `${data.taraDestinatie}, ${data.orasDestinatie}, ${data.adresaDestinatie}`,
      Tonaj: data.tonaj,
      'Tip transport': data.tipTransport,
      Marfa: data.descriereMarfa,
      'Cerinte speciale': data.cerinteSpeciale ?? '-',
      'Data incarcare': data.dataIncarcare,
      'Data livrare': data.dataLivrare ?? 'Flexibil',
      Buget: data.buget
        ? `${data.buget} ${data.moneda ?? 'EUR'}`
        : 'Nespecificat',
      Nume: data.numePrenume,
      Firma: data.firma,
      Telefon: data.telefon,
      Email: data.email,
    });

    setSubmitStatus(result.ok ? 'success' : 'error');
  };

  if (submitStatus === 'success') {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 rounded-2xl border-2 border-green-300 bg-green-50 p-10 text-center duration-500">
        <div className="mb-4 text-6xl">✅</div>
        <h3 className="mb-2 text-2xl font-bold text-green-800">
          Cererea a fost trimisă!
        </h3>
        <p className="mb-1 text-green-700">
          Te vom contacta în cel mult 2 ore în zilele lucrătoare.
        </p>
        <p className="text-sm text-green-600">
          Program: Luni–Vineri, 8:00–18:00
        </p>
        <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
          <a
            href="tel:+40785225446"
            className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800"
          >
            📞 Sună direct acum
          </a>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="text-sm text-green-600 underline"
          >
            Trimite altă cerere
          </button>
        </div>
      </div>
    );
  }

  if (submitStatus === 'error') {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 rounded-2xl border-2 border-red-300 bg-red-50 p-8 text-center duration-500">
        <div className="mb-3 text-5xl">❌</div>
        <h3 className="mb-1 text-xl font-bold text-red-800">
          Nu s-a putut trimite cererea
        </h3>
        <p className="mb-4 text-sm text-red-600">Contactează-ne direct:</p>
        <p className="text-lg font-bold text-red-800">📞 +40 785 225 446</p>
        <p className="font-semibold text-red-700">✉️ oritaluca@gmail.com</p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="mt-5 rounded-lg border border-red-300 px-5 py-2 text-sm font-medium text-red-700 hover:bg-red-100"
        >
          Încearcă din nou
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* ── Grup 1: Origine ── */}
      <fieldset className="space-y-4">
        <legend className="text-dacoda-navy text-lg font-bold">
          Punct de încărcare
        </legend>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label>Țară origine *</Label>
            <Controller
              name="taraOrigine"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="mt-1 h-11">
                    <SelectValue placeholder="Selectează țara" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(COUNTRIES).map(([group, countries]) => (
                      <SelectGroup key={group}>
                        <SelectLabel>{group}</SelectLabel>
                        {countries.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.taraOrigine && (
              <p className="mt-1 text-xs text-red-500">
                {errors.taraOrigine.message}
              </p>
            )}
          </div>
          <div>
            <Label>Oraș origine *</Label>
            <Input
              className="mt-1"
              placeholder="ex. București"
              {...register('orasOrigine')}
            />
            {errors.orasOrigine && (
              <p className="mt-1 text-xs text-red-500">
                {errors.orasOrigine.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label>Adresă încărcare *</Label>
          <Textarea
            className="mt-1"
            rows={2}
            placeholder="Adresa completă de încărcare"
            {...register('adresaOrigine')}
          />
          {errors.adresaOrigine && (
            <p className="mt-1 text-xs text-red-500">
              {errors.adresaOrigine.message}
            </p>
          )}
        </div>
      </fieldset>

      {/* ── Grup 2: Destinație ── */}
      <fieldset className="space-y-4">
        <legend className="text-dacoda-navy text-lg font-bold">
          Punct de livrare
        </legend>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label>Țară destinație *</Label>
            <Controller
              name="taraDestinatie"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="mt-1 h-11">
                    <SelectValue placeholder="Selectează țara" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(COUNTRIES).map(([group, countries]) => (
                      <SelectGroup key={group}>
                        <SelectLabel>{group}</SelectLabel>
                        {countries.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.taraDestinatie && (
              <p className="mt-1 text-xs text-red-500">
                {errors.taraDestinatie.message}
              </p>
            )}
          </div>
          <div>
            <Label>Oraș destinație *</Label>
            <Input
              className="mt-1"
              placeholder="ex. München"
              {...register('orasDestinatie')}
            />
            {errors.orasDestinatie && (
              <p className="mt-1 text-xs text-red-500">
                {errors.orasDestinatie.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label>Adresă livrare *</Label>
          <Textarea
            className="mt-1"
            rows={2}
            placeholder="Adresa completă de livrare"
            {...register('adresaDestinatie')}
          />
          {errors.adresaDestinatie && (
            <p className="mt-1 text-xs text-red-500">
              {errors.adresaDestinatie.message}
            </p>
          )}
        </div>
      </fieldset>

      {/* ── Grup 3: Detalii marfă ── */}
      <fieldset className="space-y-4">
        <legend className="text-dacoda-navy text-lg font-bold">
          Detalii transport
        </legend>

        <div>
          <Label>Tonaj *</Label>
          <Controller
            name="tonaj"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="mt-1 h-11">
                  <SelectValue placeholder="Selectează tonajul" />
                </SelectTrigger>
                <SelectContent>
                  {TONNAGE_OPTIONS.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.tonaj && (
            <p className="mt-1 text-xs text-red-500">{errors.tonaj.message}</p>
          )}
        </div>

        {/* Transport type cards */}
        <div>
          <Label>Tip transport *</Label>
          <Controller
            name="tipTransport"
            control={control}
            render={({ field }) => (
              <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {TRANSPORT_TYPES.map((tt) => {
                  const selected = field.value === tt.value;
                  return (
                    <button
                      key={tt.value}
                      type="button"
                      onClick={() => field.onChange(tt.value)}
                      className={cn(
                        'flex items-center gap-3 rounded-lg border-2 p-3 text-left text-sm font-medium transition-all',
                        selected
                          ? 'border-dacoda-orange bg-dacoda-orange/10 text-dacoda-navy'
                          : 'text-dacoda-gray border-gray-200 hover:border-gray-300',
                      )}
                    >
                      <tt.icon
                        className={cn(
                          'h-5 w-5 shrink-0',
                          selected ? 'text-dacoda-orange' : 'text-dacoda-gray',
                        )}
                      />
                      {tt.label}
                    </button>
                  );
                })}
              </div>
            )}
          />
          {errors.tipTransport && (
            <p className="mt-1 text-xs text-red-500">
              {errors.tipTransport.message}
            </p>
          )}
        </div>

        <div>
          <Label>Descriere marfă *</Label>
          <Textarea
            className="mt-1"
            rows={3}
            placeholder="Ce transportăm? (ex. piese auto, mobilă, echipamente industriale)"
            {...register('descriereMarfa')}
          />
          {errors.descriereMarfa && (
            <p className="mt-1 text-xs text-red-500">
              {errors.descriereMarfa.message}
            </p>
          )}
        </div>

        <div>
          <Label>Cerințe speciale</Label>
          <Textarea
            className="mt-1"
            rows={2}
            placeholder="ex. temperatură specifică, documente vamale, escortă..."
            {...register('cerinteSpeciale')}
          />
        </div>
      </fieldset>

      {/* ── Grup 4: Date ── */}
      <fieldset className="space-y-4">
        <legend className="text-dacoda-navy text-lg font-bold">
          Perioadă transport
        </legend>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label>Data încărcare *</Label>
            <Input
              type="date"
              className="mt-1"
              {...register('dataIncarcare')}
            />
            {errors.dataIncarcare && (
              <p className="mt-1 text-xs text-red-500">
                {errors.dataIncarcare.message}
              </p>
            )}
          </div>

          <div>
            <Label>Flexibilitate livrare</Label>
            <Controller
              name="flexibilitateData"
              control={control}
              render={({ field }) => (
                <div className="mt-1 flex gap-1 rounded-lg border p-1">
                  {FLEX_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => field.onChange(opt.value)}
                      className={cn(
                        'flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                        field.value === opt.value
                          ? 'bg-dacoda-orange text-white'
                          : 'text-dacoda-gray hover:bg-gray-100',
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            />
          </div>
        </div>

        {flex !== 'flexibil' && (
          <div className="sm:w-1/2">
            <Label>
              Data livrare{flex === 'fix' ? ' (exactă)' : ' (până la)'}
            </Label>
            <Input type="date" className="mt-1" {...register('dataLivrare')} />
          </div>
        )}
      </fieldset>

      {/* ── Grup 5: Buget ── */}
      <fieldset className="space-y-4">
        <legend className="text-dacoda-navy text-lg font-bold">
          Buget estimat
        </legend>
        <p className="text-dacoda-gray -mt-2 text-xs">
          Informația ne ajută să oferim soluția potrivită
        </p>
        <div className="flex gap-3">
          <Input
            className="flex-1"
            placeholder="ex. 2500"
            {...register('buget')}
          />
          <Controller
            name="moneda"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="h-11 w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="RON">RON</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </fieldset>

      {/* ── Grup 6: Contact ── */}
      <fieldset className="space-y-4">
        <legend className="text-dacoda-navy text-lg font-bold">
          Date de contact
        </legend>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label>Nume și prenume *</Label>
            <Input
              className="mt-1"
              placeholder="Ion Popescu"
              {...register('numePrenume')}
            />
            {errors.numePrenume && (
              <p className="mt-1 text-xs text-red-500">
                {errors.numePrenume.message}
              </p>
            )}
          </div>
          <div>
            <Label>Firma *</Label>
            <Input
              className="mt-1"
              placeholder="SC Exemplu SRL"
              {...register('firma')}
            />
            {errors.firma && (
              <p className="mt-1 text-xs text-red-500">
                {errors.firma.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label>Telefon *</Label>
            <div className="mt-1 flex">
              <span className="border-input flex items-center rounded-l border border-r-0 bg-gray-50 px-3 text-sm text-gray-500">
                +40
              </span>
              <Input
                className="rounded-l-none"
                placeholder="785 225 446"
                {...register('telefon')}
              />
            </div>
            {errors.telefon && (
              <p className="mt-1 text-xs text-red-500">
                {errors.telefon.message}
              </p>
            )}
          </div>
          <div>
            <Label>Email *</Label>
            <Input
              type="email"
              className="mt-1"
              placeholder="email@firma.ro"
              {...register('email')}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
      </fieldset>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitStatus === 'loading'}
        className="flex w-full items-center justify-center gap-3 rounded-xl px-8 py-4 text-base font-semibold text-white transition-all disabled:cursor-not-allowed disabled:opacity-60"
        style={{
          backgroundColor:
            submitStatus === 'loading'
              ? 'var(--dacoda-orange-dark)'
              : 'var(--dacoda-orange)',
        }}
      >
        {submitStatus === 'loading' ? (
          <>
            <svg
              className="h-5 w-5 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Se trimite cererea...
          </>
        ) : (
          'Trimite cererea'
        )}
      </button>
    </form>
  );
}
