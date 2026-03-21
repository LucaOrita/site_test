'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { value: '32 ani', label: 'de activitate' },
  { value: '~8.400 curse/an', label: 'organizate' },
  { value: '1.100+', label: 'clienți activi' },
  { value: '3.500+', label: 'transportatori parteneri' },
  { value: '40+', label: 'țări acoperite' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.2,
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  }),
};

export default function DacodaHero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: 'var(--dacoda-navy)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-opacity='0.05' stroke-width='1'%3E%3Cpath d='M0 0l60 60M60 0L0 60'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=75"
          alt="Autostradă transport rutier internațional"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container flex min-h-screen flex-col justify-center px-4 pt-20 pb-32 lg:px-6">
        <motion.p
          className="text-dacoda-orange/80 mb-4 text-xs font-medium tracking-widest uppercase md:text-sm"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Din 1993 &middot; Capital 100% rom&acirc;nesc &middot; 32 de ani
          &icirc;n transporturi
        </motion.p>

        <motion.h1
          className="mb-6 max-w-3xl text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          style={{ lineHeight: 1.1 }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Partenerul tău de{' '}
          <span className="text-dacoda-orange">transport rutier</span>{' '}
          internațional
        </motion.h1>

        <motion.p
          className="mb-8 max-w-2xl text-lg text-white/80 md:text-xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          De 32 de ani organizăm transporturi sigure și predictibile în Europa,
          CSI și Asia. Știm rutele, legislația și riscurile — ca să nu
          trebuiești tu să le știi.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <Link
            href="/cerere-oferta"
            className="bg-dacoda-orange hover:bg-dacoda-orange-dark inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white transition-colors"
          >
            Cere o ofertă
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/servicii"
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Vezi serviciile
          </Link>
        </motion.div>
      </div>

      {/* Bottom stats bar */}
      <motion.div
        className="absolute right-0 bottom-0 left-0 border-t border-white/10 bg-white/5 backdrop-blur-sm"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={4}
      >
        <div className="container px-4 py-6 lg:px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 md:gap-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-dacoda-orange text-xl font-bold md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/60">{stat.label}</p>
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden h-8 w-px bg-white/10 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
