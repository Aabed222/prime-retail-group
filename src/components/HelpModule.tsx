import Image from "next/image";
import Link from "next/link";
import { helpCards } from "@/content/help-cards";

export function HelpModule() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-prg">
        <h2 className="text-center font-serif text-3xl text-navy md:text-4xl">
          How can we help you today?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate md:text-base">
          Choose a path — we&apos;ll take it from there with clear next steps for
          Central California retail.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {helpCards.map((card) => (
            <Link
              key={card.href + card.title}
              href={card.href}
              className="group flex flex-col border border-border bg-cream p-5 transition hover:border-gold"
            >
              <span className="font-serif text-lg text-navy group-hover:text-gold-deep">
                {card.title}
              </span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                {card.body}
              </span>
              <span className="mt-4 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-navy group-hover:text-gold">
                Continue →
              </span>
            </Link>
          ))}
        </div>

        <div className="relative mt-12 min-h-[280px] overflow-hidden md:min-h-[340px]">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
            alt="Brokers reviewing retail property materials"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 72rem"
          />
          <div className="absolute inset-0 bg-navy/35" />
          <div className="relative flex h-full min-h-[280px] items-center p-6 md:min-h-[340px] md:p-10">
            <div className="max-w-sm border border-border bg-white p-6 shadow-sm md:p-8">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-navy">
                Find a property
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                Find a retail property for sale or lease across Bakersfield and
                Central California.
              </p>
              <Link href="/listings" className="btn-outline-dark mt-6 !text-[0.65rem]">
                Property finder
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
