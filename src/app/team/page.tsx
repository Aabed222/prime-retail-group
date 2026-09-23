import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { siteConfig, teamMembers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description: `Meet the ${siteConfig.name} advisory team — boutique retail brokerage in Bakersfield.`,
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        tone="cream"
        eyebrow="Team"
        title="A small desk. Direct access."
        description="Boutique coverage for retail owners and operators — roles below reflect how we staff engagements. Names and bios can be added as the firm grows."
      />
      <section className="border-t border-border bg-cream pb-20">
        <div className="container-prg grid gap-6 md:grid-cols-3">
          {teamMembers.map((m) => (
            <article
              key={m.role}
              className="border border-border bg-white p-6 md:p-8"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center bg-navy font-serif text-2xl text-gold">
                {m.role.charAt(0)}
              </div>
              <h2 className="font-serif text-2xl text-navy">{m.role}</h2>
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
