'use client';

import { ArrowRight, Loader2 } from 'lucide-react';
import { useState } from 'react';

import { DACODA_CONFIG, submitToFormspree } from '@/lib/config';

export default function CariereClient() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    pozitie: '',
    mesaj: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const result = await submitToFormspree(DACODA_CONFIG.formspree.contact, {
        _subject: `Aplicatie: ${form.pozitie || 'General'} — ${form.name}`,
        _replyto: form.email,
        Nume: form.name,
        Email: form.email,
        Pozitie: form.pozitie,
        Mesaj: form.mesaj ?? '',
      });
      if (result.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', pozitie: '', mesaj: '' });
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
        style={{
          backgroundColor: 'var(--dacoda-navy)',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-opacity='0.05' stroke-width='1'%3E%3Cpath d='M0 0l60 60M60 0L0 60'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="container px-4 pt-32 pb-16 text-center lg:px-6 lg:pt-40 lg:pb-24">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Cariere la DACODA
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Fă parte din echipa care organizează transporturi în toată Europa.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <div className="mx-auto max-w-2xl">
            {/* Status text */}
            <div className="mb-12 rounded-xl border border-gray-100 bg-[var(--dacoda-light)] p-8 text-center">
              <p className="text-dacoda-navy text-lg font-semibold">
                Momentan nu avem poziții deschise.
              </p>
              <p className="text-dacoda-gray mt-2 text-base leading-relaxed">
                Dacă ești pasionat de domeniul transporturilor și vrei să faci
                parte din echipa noastră, trimite-ne CV-ul tău folosind
                formularul de mai jos.
              </p>
            </div>

            {/* Form */}
            <h2 className="text-dacoda-navy mb-6 text-center text-2xl font-bold">
              Trimite-ne CV-ul tău
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
                  Aplicația ta a fost trimisă.
                </p>
                <p className="mt-1 text-sm text-green-700">
                  Te contactăm dacă apare o oportunitate potrivită.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nume și Prenume *"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <input
                  type="text"
                  name="pozitie"
                  placeholder="Poziția dorită (ex. Dispecer, Agent vânzări...)"
                  value={form.pozitie}
                  onChange={handleChange}
                  className={inputClass}
                />

                <div>
                  <label
                    htmlFor="cv-upload"
                    className="text-dacoda-navy mb-2 block text-sm font-medium"
                  >
                    Atașează CV (PDF, DOC)
                  </label>
                  <input
                    id="cv-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="text-dacoda-gray w-full text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-[var(--dacoda-light)] file:px-4 file:py-2 file:text-sm file:font-medium"
                  />
                </div>

                <textarea
                  name="mesaj"
                  placeholder="Spune-ne pe scurt de ce vrei să lucrezi la DACODA"
                  rows={4}
                  value={form.mesaj}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />

                {status === 'error' && (
                  <p className="text-sm text-red-600">
                    A apărut o eroare. Încearcă din nou sau trimite CV-ul la
                    comercial@dacoda.ro.
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
                      Trimite aplicația
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
