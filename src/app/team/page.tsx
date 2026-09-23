import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { siteConfig, teamMembers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description: `Meet the ${siteConfig.name} advisory team — boutique retail brokerage in Bakersfield.`,
};

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] ?? "" : "";
  return (first + last).toUpperCase();
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        tone="cream"
        eyebrow="Team"
        title="A small desk. Direct access."
        description="Boutique Bakersfield desk covering retail, multifamily, and gas stations — direct access to the brokers who work your deal."
      />
      <section className="border-t border-border bg-cream pb-20">
        <div className="container-prg grid gap-6 md:grid-cols-3">
          {teamMembers.map((m) => (
            <article
              key={m.name}
              className="border border-border bg-white p-6 md:p-8"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center bg-navy font-serif text-2xl text-gold">
                {initials(m.name)}
              </div>
              <h2 className="font-serif text-2xl text-navy">{m.name}</h2>
              <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold">
                {m.focus}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate">{m.blurb}</p>
            </article>
          ))}
        </div>
        <div className="container-prg mt-12 text-center">
          <Link href="/contact" className="btn-gold">
            Speak with a broker →
          </Link>
        </div>
      </section>
    </>
  );
}
