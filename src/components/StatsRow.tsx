import { stats } from "@/lib/site";

export function StatsRow() {
  return (
    <section className="bg-charcoal text-cream" aria-label="Market snapshot">
      <div className="container-prg grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:gap-6 md:py-14">
        {stats.map((stat) => (
          <div key={stat.label} className="border-l border-cream/20 pl-4 md:pl-5">
            <p className="text-3xl font-semibold tracking-tight text-gold md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-cream/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
