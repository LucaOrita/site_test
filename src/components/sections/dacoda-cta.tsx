'use client';

import { ArrowRight, Clock, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

import { DACODA_CONFIG, submitToFormspree } from '@/lib/config';

const CARGO_TYPES = [
  'Rutier Standard',
  'ADR',
  'Frigorific',
  'Agabaritic',
  'Aerian',
  'Maritim',
];

export default function DacodaCta() {
  const [form, setForm] = useState({
    origin: '',
    destination: '',
    cargoType: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const result = await submitToFormspree(DACODA_CONFIG.formspree.cerere, {
      _subject: `Cerere rapida: ${formData.get('origin')} → ${formData.get('destination')}`,
      Origine: String(formData.get('origin') ?? ''),
      Destinatie: String(formData.get('destination') ?? ''),
      'Tip transport': String(formData.get('cargoType') ?? ''),
      Telefon: String(formData.get('phone') ?? ''),
      Sursa: 'Formular rapid homepage',
    });

    setLoading(false);
    if (result.ok) {
      setSuccess(true);
      formEl.reset();
    }
  };

  return (
    <section style={{ backgroundColor: 'var(--dacoda-navy)' }}>
      <div className="container px-4 py-16 lg:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — text */}
          <div>
            <p className="text-dacoda-orange mb-3 text-xs font-medium tracking-widest uppercase">
              Hai să discutăm
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ai un transport de organizat? Suntem aici.
            </h2>
            <p className="mb-8 max-w-md text-base leading-relaxed text-white/70">
              Completează formularul alăturat sau contactează-ne direct.
              Răspundem în maxim 2 ore în zilele lucrătoare.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+40785225446"
                className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
              >
                <Phone className="text-dacoda-orange h-4 w-4" />
                +40 785 225 446
              </a>
              <a
                href="mailto:comercial@dacoda.ro"
                className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
              >
                <Mail className="text-dacoda-orange h-4 w-4" />
                comercial@dacoda.ro
              </a>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Clock className="text-dacoda-orange h-4 w-4" />
                Luni–Vineri, 8:00–18:00
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {success ? (
              <p className="text-center font-medium text-white">
                ✅ Cererea a fost trimisă! Te contactăm în 2 ore.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="origin"
                  placeholder="De unde pleacă marfa?"
                  value={form.origin}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 transition-colors focus:border-[var(--dacoda-orange)] focus:outline-none"
                />
                <input
                  type="text"
                  name="destination"
                  placeholder="Unde ajunge marfa?"
                  value={form.destination}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 transition-colors focus:border-[var(--dacoda-orange)] focus:outline-none"
                />
                <select
                  name="cargoType"
                  value={form.cargoType}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/50 transition-colors focus:border-[var(--dacoda-orange)] focus:outline-none"
                  style={form.cargoType ? { color: 'white' } : undefined}
                >
                  <option value="" disabled>
                    Tip transport
                  </option>
                  {CARGO_TYPES.map((type) => (
                    <option key={type} value={type} className="text-gray-900">
                      {type}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon de contact"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 transition-colors focus:border-[var(--dacoda-orange)] focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-dacoda-orange hover:bg-dacoda-orange-dark flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? 'Se trimite...' : 'Trimite cererea'}
                  {!loading && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>
            )}

            <p className="mt-4 text-center text-xs text-white/50">
              Sau scrie-ne direct pe{' '}
              <a
                href="https://wa.me/40785225446?text=Buna%20ziua%2C%20doresc%20o%20oferta%20pentru%20transport"
                target="_blank"
                rel="noreferrer"
                className="text-dacoda-orange underline underline-offset-2"
              >
                WhatsApp &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
