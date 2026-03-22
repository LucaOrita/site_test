const partners = [
  'John Deere',
  'GOWEIL',
  'FARMTECH',
  'Hydrog',
  'Strautmann',
  'REMAT',
];

export default function DacodaPartners() {
  return (
    <section className="border-y border-gray-100 bg-white py-12 lg:py-16">
      <div className="container px-4 lg:px-6">
        <div className="mb-8 text-center">
          <p className="text-dacoda-gray text-xs font-medium tracking-widest uppercase">
            Parteneri colaboratori
          </p>
          <h2 className="text-dacoda-navy mt-2 text-2xl font-bold md:text-3xl">
            Companii care ne-au acordat încrederea
          </h2>
        </div>

        <div className="grid grid-cols-3 items-center gap-6 md:grid-cols-6">
          {partners.map((name) => (
            <div
              key={name}
              className="border-dacoda-navy/10 flex h-20 items-center justify-center rounded-xl border bg-gray-50 px-4 transition-colors hover:border-[var(--dacoda-orange)]/30 hover:bg-[var(--dacoda-orange)]/5"
            >
              <span className="text-dacoda-navy text-center text-sm font-bold tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
