'use client';

import { ArrowRight, Clock, Loader2, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

import { DACODA_CONFIG, submitToFormspree } from '@/lib/config';

const SUBJECTS = [
  'Cerere ofertă',
  'Informații transport',
  'Colaborare transportatori',
  'Altele',
];

export default function ContactClient() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const result = await submitToFormspree(DACODA_CONFIG.formspree.contact, {
        _subject: `Contact: ${form.subject} | ${form.name}`,
        _replyto: form.email,
        Nume: form.name,
        Email: form.email,
        Telefon: form.phone,
        Subiect: form.subject,
        Mesaj: form.message,
      });
      if (result.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-[var(--dacoda-orange)] focus:outline-none';

  return (
    <>
      {/* Hero */}
      <section
        className="relative"
        style={{ backgroundColor: 'var(--dacoda-navy)' }}
      >
        <div className="container px-4 pt-32 pb-16 lg:px-6 lg:pt-40 lg:pb-24">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Contactează-ne
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Suntem aici să te ajutăm cu orice întrebare legată de transporturi.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left — contact info (40%) */}
            <div className="lg:col-span-2">
              <h2 className="text-dacoda-navy mb-6 text-2xl font-bold">
                DACODA SRL
              </h2>

              {/* București */}
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                <h3
                  className="mb-3 font-semibold"
                  style={{ color: 'var(--dacoda-navy)' }}
                >
                  Sediu: București
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="text-dacoda-orange mt-0.5 h-4 w-4 shrink-0" />
                    <span>Str. Vespasian nr. 41A, et. 1, Sector 1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="text-dacoda-orange h-4 w-4 shrink-0" />
                    <a href="tel:+40785225446" className="hover:underline">
                      +40 785 225 446
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="text-dacoda-orange h-4 w-4 shrink-0" />
                    <a href="tel:+40213268658" className="hover:underline">
                      +40 21 326 86 58 (fix)
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="text-dacoda-orange h-4 w-4 shrink-0" />
                    <a
                      href="mailto:oritaluca@gmail.com"
                      className="hover:underline"
                    >
                      oritaluca@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="text-dacoda-orange h-4 w-4 shrink-0" />
                    <span>Luni–Vineri, 8:30–17:30</span>
                  </div>
                </div>
              </div>

              {/* Cluj */}
              <div className="mt-4 rounded-xl border border-gray-100 bg-gray-50 p-6">
                <h3
                  className="mb-3 font-semibold"
                  style={{ color: 'var(--dacoda-navy)' }}
                >
                  Punct de lucru: Cluj-Napoca
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="text-dacoda-orange mt-0.5 h-4 w-4 shrink-0" />
                    <span>Str. Croitorilor nr. 16, Cluj-Napoca</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="text-dacoda-orange h-4 w-4 shrink-0" />
                    <a href="tel:+40785225446" className="hover:underline">
                      +40 785 225 446
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="text-dacoda-orange h-4 w-4 shrink-0" />
                    <a
                      href="mailto:oritaluca@gmail.com"
                      className="hover:underline"
                    >
                      oritaluca@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="text-dacoda-orange h-4 w-4 shrink-0" />
                    <span>Luni–Vineri, 8:30–17:30</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp button */}
              <a
                href="https://wa.me/40785225446?text=Buna%20ziua%2C%20doresc%20informatii"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Scrie-ne pe WhatsApp
              </a>
            </div>

            {/* Right — form (60%) */}
            <div className="lg:col-span-3">
              <h2 className="text-dacoda-navy mb-6 text-2xl font-bold">
                Trimite-ne un mesaj
              </h2>

              {status === 'sent' ? (
                <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-green-800">
                    Mesajul tău a fost trimis.
                  </p>
                  <p className="mt-1 text-sm text-green-700">
                    Te contactăm în curând.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nume și Prenume"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Telefon"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    <select
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className={`${inputClass} ${!form.subject ? 'text-gray-400' : ''}`}
                    >
                      <option value="" disabled>
                        Subiect
                      </option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <textarea
                    name="message"
                    placeholder="Mesajul tău..."
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />

                  {status === 'error' && (
                    <p className="text-sm text-red-600">
                      A apărut o eroare. Încearcă din nou sau contactează-ne
                      telefonic.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="bg-dacoda-orange hover:bg-dacoda-orange-dark flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium text-white transition-colors disabled:opacity-60"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Se trimite...
                      </>
                    ) : (
                      <>
                        Trimite
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
