'use client';

import { Loader2, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Textarea } from '@/components/ui/textarea';

import DacodaFormStandard, { type FormData } from './dacoda-form-standard';

export default function DacodaFormPaste() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [extracted, setExtracted] = useState<Partial<FormData> | null>(null);
  const [error, setError] = useState('');

  const { setValue } = useForm<FormData>();

  const analyze = async () => {
    if (text.trim().length < 10) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: 'extract', text }),
      });
      const data = await res.json();
      if (data.fields && Object.keys(data.fields).length > 0) {
        setExtracted(data.fields);
        // populate react-hook-form in child
        Object.entries(data.fields).forEach(([key, val]) => {
          setValue(key as keyof FormData, val as string);
        });
      } else {
        setError(
          'Nu am reușit să extragem informații. Încearcă un text mai detaliat.',
        );
      }
    } catch {
      setError('Eroare de conexiune. Încearcă din nou.');
    } finally {
      setLoading(false);
    }
  };

  if (extracted) {
    return (
      <div className="space-y-6">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-dacoda-navy text-sm font-medium">
            Am extras aceste informații din textul tău. Verifică și completează
            ce lipsește.
          </p>
        </div>
        <DacodaFormStandard defaultValues={extracted} />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
        placeholder={`Lipește aici orice text care descrie transportul: un email, un mesaj WhatsApp, o specificație internă.\n\nExemplu: "Am nevoie de transport 15 tone mobilă din București la Hamburg, săptămâna viitoare, nu urgent"`}
        className="text-base"
      />

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        onClick={analyze}
        disabled={loading || text.trim().length < 10}
        className="bg-dacoda-orange hover:bg-dacoda-orange-dark flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white transition-colors disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Se analizează...
          </>
        ) : (
          <>
            <Sparkles className="h-4 w-4" />
            Analizează textul
          </>
        )}
      </button>
    </div>
  );
}
