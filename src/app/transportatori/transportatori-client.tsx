'use client';

import {
  ArrowRight,
  Check,
  ClipboardList,
  Handshake,
  Loader2,
  Package,
  Wallet,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { DACODA_CONFIG, submitToFormspree } from '@/lib/config';

const beneficii = [
  {
    icon: Wallet,
    title: 'Plăți la termen',
    text: 'Respectăm termenele de plată agreate. Colaboratorii noștri știu că își iau banii.',
  },
  {
    icon: Package,
    title: 'Mărfuri regulate',
    text: 'Cu ~8.400 curse pe an, avem flux constant de marfă pe rutele principale.',
  },
  {
    icon: Handshake,
    title: 'Relație pe termen lung',
    text: 'Nu căutăm șoferi pentru o cursă. Căutăm parteneri cu care să construim.',
  },
  {
    icon: ClipboardList,
    title: 'Proces simplu',
    text: 'Documentație clară, comunicare directă, fără birocrație inutilă.',
  },
];

const cerinte = [
  'Licență de transport valabilă',
  'CMR asigurare marfă',
  'Vehicule în stare tehnică bună',
  'Șoferi cu experiență internațională',
  'Disponibilitate și comunicare promptă',
];

const TRANSPORT_TYPES = [
  'Rutier standard',
  'ADR',
  'Frigorific',
  'Agabaritic',
  'Aerian / Maritim',
];

const CAPACITIES = ['3.5t', '7.5t', '20t', '24t', 'Agabaritic'];

export default function TransportatoriClient() {
  const [form, setForm] = useState({
    firma: '',
    cui: '',
    contact: '',
    phone: '',
    email: '',
    tipuri: [] as string[],
    zone: '',
    capacitate: '',
    mesaj: '',
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

  const handleCheckbox = (type: string) => {
    setForm((prev) => ({
      ...prev,
      tipuri: prev.tipuri.includes(type)
        ? prev.tipuri.filter((t) => t !== type)
        : [...prev.tipuri, type],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const result = await submitToFormspree(DACODA_CONFIG.formspree.contact, {
        _subject: `Partener nou: ${form.firma}`,
        _replyto: form.email,
        Firma: form.firma,
        CUI: form.cui,
        Contact: form.contact,
        Telefon: form.phone,
        Email: form.email,
        'Tipuri transport': form.tipuri.join(', '),
        Zone: form.zone,
        Capacitate: form.capacitate,
      });
      if (result.ok) {
        setStatus('sent');
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
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/agabaritic/4.jpg"
            alt="Transport agabaritic camion partener DACODA SRL"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 container px-4 pt-32 pb-16 text-center lg:px-6 lg:pt-40 lg:pb-24">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Devino Transportator Partener
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Colaborăm cu 3.500+ transportatori. Mărfuri regulate, plăți la
            termen, relație corectă.
          </p>
        </div>
      </section>

      {/* De ce să colaborezi */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <div className="mb-12 text-center">
            <h2 className="text-dacoda-navy mb-4 text-3xl font-bold md:text-4xl">
              De ce să colaborezi cu DACODA
            </h2>
            <div className="bg-dacoda-orange mx-auto h-0.5 w-12" />
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {beneficii.map((b) => (
              <div
                key={b.title}
                className="border-dacoda-orange rounded-lg border border-l-[3px] bg-white p-6 transition-shadow hover:shadow-md"
              >
                <b.icon className="text-dacoda-orange mb-3 h-6 w-6" />
                <h3 className="text-dacoda-navy mb-2 text-base font-bold">
                  {b.title}
                </h3>
                <p className="text-dacoda-gray text-sm leading-relaxed">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce îți cerem */}
      <section style={{ backgroundColor: 'var(--dacoda-light)' }}>
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-dacoda-navy mb-8 text-center text-3xl font-bold md:text-4xl">
              Ce îți cerem
            </h2>

            <div className="space-y-4">
              {cerinte.map((c) => (
                <div key={c} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-dacoda-navy text-base font-medium">
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formular înregistrare */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-dacoda-navy mb-8 text-center text-3xl font-bold md:text-4xl">
              Înregistrează-te ca partener
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
                  Datele tale au fost transmise.
                </p>
                <p className="mt-1 text-sm text-green-700">
                  Te contactăm în maxim 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="firma"
                    placeholder="Firma *"
                    required
                    value={form.firma}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    type="text"
                    name="cui"
                    placeholder="CUI *"
                    required
                    value={form.cui}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <input
                  type="text"
                  name="contact"
                  placeholder="Nume contact *"
                  required
                  value={form.contact}
                  onChange={handleChange}
                  className={inputClass}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefon *"
                    required
                    value={form.phone}
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

                {/* Transport types checkboxes */}
                <div>
                  <p className="text-dacoda-navy mb-3 text-sm font-medium">
                    Tipuri de transport disponibile:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {TRANSPORT_TYPES.map((type) => (
                      <label
                        key={type}
                        className={`cursor-pointer rounded-lg border px-4 py-2 text-sm transition-colors ${
                          form.tipuri.includes(type)
                            ? 'border-dacoda-orange bg-dacoda-orange/10 text-dacoda-orange font-medium'
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={form.tipuri.includes(type)}
                          onChange={() => handleCheckbox(type)}
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>

                <textarea
                  name="zone"
                  placeholder="Zone acoperite (ex. România, Germania, Franța...)"
                  rows={2}
                  value={form.zone}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />

                <select
                  name="capacitate"
                  value={form.capacitate}
                  onChange={handleChange}
                  className={`${inputClass} ${!form.capacitate ? 'text-gray-400' : ''}`}
                >
                  <option value="" disabled>
                    Capacitate camion
                  </option>
                  {CAPACITIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                <textarea
                  name="mesaj"
                  placeholder="Mesaj suplimentar (opțional)"
                  rows={3}
                  value={form.mesaj}
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
                      Trimite înregistrarea
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
