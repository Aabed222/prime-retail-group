import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service retail commercial brokerage — sales, business opportunities, leasing, and investment advisory.",
};

const icons = [
  "M4 20V8l8-5 8 5v12H4zm4-2h2v-4h4v4h2v-7l-5-3-5 3v7z",
  "M3 10l1-5h16l1 5v10H3V10zm2 2v6h4v-4h6v4h4v-6H5z",
  "M12 2a5 5 0 00-1 9.9V22l3-2 2 2 2-2 2 2v-6.1A5 5 0 0012 2zm0 2a3 3 0 110 6 3 3 0 010-6z",
  "M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z",
  "M4 19h16v2H4v-2zm2-2V9h3v8H6zm5 0V5h3v12h-3zm5 0v-6h3v6h-3z",
  "M4 4h16v12H7l-3 3V4zm3 4v2h10V8H7zm0 4v2h7v-2H7z",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tone="cream"
        eyebrow="Services"
        title="Full-service commercial brokerage — nothing outsourced."
        description="Every engagement is worked directly with our team. Below is how we help retail owners, operators, and investors across Central California."
      />
      <section className="border-t border-border bg-cream pb-20">
        <div className="container-prg grid gap-x-12 gap-y-14 md:grid-cols-2">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className="flex gap-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-gold/50 text-gold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d={icons[i % icons.length]} />
                </svg>
              </span>
              <div>
                <h2 className="font-serif text-2xl text-navy">{s.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-slate">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="container-prg mt-16 text-center">
          <Link href="/contact" className="btn-gold">
            Start a conversation →
          </Link>
        </div>
      </section>
    </>
  );
}
