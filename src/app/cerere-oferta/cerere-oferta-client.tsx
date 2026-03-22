'use client';

import { ClipboardList, Clock, Mail, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';

import DacodaFormAgent from '@/components/sections/dacoda-form-agent';
import DacodaFormPaste from '@/components/sections/dacoda-form-paste';
import DacodaFormStandard from '@/components/sections/dacoda-form-standard';
import { cn } from '@/lib/utils';

const TABS = [
  { id: 'standard', label: 'Formular standard', icon: ClipboardList },
  { id: 'paste', label: 'Lipește text', icon: ClipboardList },
  { id: 'agent', label: 'Conversație', icon: MessageCircle },
] as const;

type TabId = (typeof TABS)[number]['id'];

export default function CerereOfertaClient() {
  const [activeTab, setActiveTab] = useState<TabId>('standard');

  return (
    <>
      {/* Hero */}
      <section
        className="pt-28 pb-12 lg:pt-32 lg:pb-16"
        style={{ backgroundColor: 'var(--dacoda-navy)' }}
      >
        <div className="container px-4 text-center lg:px-6">
          <h1 className="mb-3 text-3xl font-bold text-white md:text-4xl">
            Cere o ofertă
          </h1>
          <p className="mx-auto max-w-xl text-base text-white/70">
            Completează formularul sau lasă agentul să te ghideze. Răspundem în
            maxim 2 ore în zilele lucrătoare.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ backgroundColor: 'var(--dacoda-light)' }}>
        <div className="container px-4 py-12 lg:px-6">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[3fr_2fr]">
            {/* Left column — tabs + form */}
            <div>
              {/* Tab selector */}
              <div className="mb-6 flex gap-1 rounded-xl bg-white p-1 shadow-sm">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      'flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                      activeTab === tab.id
                        ? 'bg-dacoda-orange text-white'
                        : 'text-dacoda-gray hover:text-dacoda-navy',
                    )}
                  >
                    <tab.icon className="hidden h-4 w-4 sm:block" />
                    <span className="text-xs sm:text-sm">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="rounded-xl bg-white p-6 shadow-sm md:p-8">
                {activeTab === 'standard' && <DacodaFormStandard />}
                {activeTab === 'paste' && <DacodaFormPaste />}
                {activeTab === 'agent' && <DacodaFormAgent />}
              </div>
            </div>

            {/* Right sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="text-dacoda-navy mb-4 text-lg font-bold">
                  Contact direct
                </h3>

                <div className="space-y-3">
                  <a
                    href="tel:+40785225446"
                    className="text-dacoda-navy flex items-center gap-3 text-sm hover:underline"
                  >
                    <Phone className="text-dacoda-orange h-4 w-4 shrink-0" />
                    +40 785 225 446
                  </a>
                  <a
                    href="mailto:comercial@dacoda.ro"
                    className="text-dacoda-navy flex items-center gap-3 text-sm hover:underline"
                  >
                    <Mail className="text-dacoda-orange h-4 w-4 shrink-0" />
                    comercial@dacoda.ro
                  </a>
                  <div className="text-dacoda-gray flex items-center gap-3 text-sm">
                    <Clock className="text-dacoda-orange h-4 w-4 shrink-0" />
                    Luni–Vineri, 8:00–18:00
                  </div>
                </div>

                {/* Separator */}
                <div className="my-6 h-px bg-gray-100" />

                {/* Process steps */}
                <h4 className="text-dacoda-navy mb-3 text-sm font-bold">
                  Ce se întâmplă după?
                </h4>
                <ol className="space-y-3">
                  {[
                    'Primești confirmarea cererii',
                    'Te contactăm în 2 ore',
                    'Primești oferta personalizată',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="bg-dacoda-orange flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-dacoda-gray text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
