import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { insights } from "@/lib/site";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Market briefs and practical notes on retail real estate in Bakersfield, Kern County, and the Central Valley.",
};

const bodies: Record<string, string[]> = {
  "kern-county-retail-corridor-watch": [
    "Retail performance in Kern County still hinges on corridor fundamentals: daily traffic, access geometry, and whether the surrounding rooftops support everyday spending.",
    "Landlords should watch vacancy duration on secondary pads, renewal spreads for local-serving tenants, and any shift in co-tenancy that changes how shoppers use a center.",
    "A practical operating habit: review each vacancy against three alternatives—re-lease as-is, reconfigure, or reposition the marketing story—before defaulting to rent cuts.",
  ],
  "tenant-mix-that-holds-up": [
    "Secondary-market centers rarely win by stacking national brands alone. Durable mixes lean on grocery-adjacent services, medical outpatient, quick-serve, and neighborhood essentials.",
    "Underwriting should stress-test tenancy against local wage cycles and commute patterns—not only national retail headlines.",
    "Owners who document use clauses and co-tenancy carefully tend to protect both NOI and the center's long-term story.",
  ],
  "site-selection-for-growing-brands": [
    "Brands entering the Central Valley should treat rooftops, visibility, and left-turn access as first-class filters—before negotiating free rent.",
    "Ask for true competitor maps, not just radius demographics. In Bakersfield, corridor choice can matter more than citywide averages.",
    "Lease structure, TI reality, and landlord responsiveness should be scored alongside rent. A cheaper deal with weak delivery is rarely cheaper.",
  ],
};

export default function InsightsPage() {
  return (
    <>
      <section className="border-b border-charcoal/10 bg-cream-deep/50 py-16 md:py-20">
        <div className="container-prg max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            Insights
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal md:text-5xl">
            Notes from the Central Valley market
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            Short, practical articles for landlords, tenants, and investors working
            retail and commercial assets in Kern County.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-prg max-w-3xl space-y-14">
          {insights.map((item) => (
            <article
              key={item.slug}
              id={item.slug}
              className="scroll-mt-24 border-b border-charcoal/10 pb-14 last:border-0"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-sage">
                <span>{item.category}</span>
                <span aria-hidden>·</span>
                <time dateTime={item.date}>{formatDate(item.date)}</time>
                <span aria-hidden>·</span>
                <span>{item.readTime}</span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-charcoal md:text-3xl">
                {item.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate">{item.excerpt}</p>
              <div className="prose-prg mt-6">
                {(bodies[item.slug] ?? []).map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex text-sm font-semibold text-terracotta hover:text-terracotta-deep"
              >
                Talk through this topic →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
