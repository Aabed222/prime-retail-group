import Image from "next/image";
import Link from "next/link";

type Differentiator = { title: string; body: string };
type Metric = { value: string; label: string };
type Related = { title: string; subtitle: string; href: string };

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  thesisImage: string;
  thesisAlt: string;
  thesis: string;
  thesisBody: readonly string[];
  differentiators: readonly Differentiator[];
  deliveringResults: string;
  metrics: readonly Metric[];
  related: readonly Related[];
};

export function ServiceDetailLayout({
  eyebrow,
  title,
  subtitle,
  heroImage,
  heroAlt,
  thesisImage,
  thesisAlt,
  thesis,
  thesisBody,
  differentiators,
  deliveringResults,
  metrics,
  related,
}: Props) {
  return (
    <>
      {/* Hero with overlay card */}
      <section className="relative min-h-[420px] overflow-hidden md:min-h-[480px]">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/45" />
        <div className="container-prg relative flex min-h-[420px] items-end py-12 md:min-h-[480px] md:py-16">
          <div className="max-w-xl border border-white/20 bg-white/95 p-6 backdrop-blur-sm md:p-8">
            <p className="eyebrow mb-2">{eyebrow}</p>
            <h1 className="font-serif text-3xl uppercase tracking-wide text-navy md:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-slate">{subtitle}</p>
            <p className="mt-4 text-xs text-slate-soft">
              <Link href="/" className="hover:text-gold">
                Home
              </Link>
              {" · "}
              <Link href="/services" className="hover:text-gold">
                Services
              </Link>
              {" · "}
              <span className="text-navy">{title}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Thesis split */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container-prg grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={thesisImage}
              alt={thesisAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl leading-snug text-navy md:text-3xl">
              {thesis}
            </h2>
            {thesisBody.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 text-base leading-relaxed text-slate">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-prg">
          <div className="mb-12 flex items-center justify-center gap-4">
            <span className="hidden h-px flex-1 bg-border sm:block" />
            <h2 className="text-center text-[0.72rem] font-bold uppercase tracking-[0.2em] text-navy">
              What sets us apart
            </h2>
            <span className="hidden h-px flex-1 bg-border sm:block" />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="border border-border border-t-[3px] border-t-navy bg-cream/40 p-6"
              >
                <h3 className="font-serif text-xl text-navy">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivering results */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container-prg max-w-3xl text-center">
          <div className="mb-8 flex items-center justify-center gap-4">
            <span className="hidden h-px flex-1 bg-border sm:block" />
            <h2 className="text-center text-[0.72rem] font-bold uppercase tracking-[0.2em] text-navy">
              Delivering results
            </h2>
            <span className="hidden h-px flex-1 bg-border sm:block" />
          </div>
          <p className="text-base leading-relaxed text-slate md:text-lg">
            {deliveringResults}
          </p>
        </div>
      </section>

      {/* By the numbers — honest boutique metrics */}
      <section className="border-y border-border bg-cream-deep py-14">
        <div className="container-prg">
          <p className="mb-8 text-center text-[0.72rem] font-bold uppercase tracking-[0.2em] text-navy">
            By the numbers
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="font-serif text-2xl text-navy md:text-3xl">{m.value}</p>
                <p className="mt-2 text-sm text-slate">{m.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs italic text-slate-soft">
            Qualitative proof points for a boutique Central California retail desk —
            not national transaction volume figures.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 text-center">
        <div className="container-prg max-w-2xl">
          <p className="font-serif text-2xl text-navy md:text-3xl">
            Better outcomes come from local insight, real relationships, and a partner
            who sees the full retail picture.
          </p>
          <Link href="/contact" className="btn-gold mt-8">
            Contact us →
          </Link>
        </div>
      </section>

      {/* Related services */}
      <section className="border-t border-border bg-cream py-16">
        <div className="container-prg">
          <div className="mb-10 flex items-center justify-center gap-4">
            <span className="hidden h-px flex-1 bg-border sm:block" />
            <h2 className="text-center text-[0.72rem] font-bold uppercase tracking-[0.2em] text-navy">
              Related services
            </h2>
            <span className="hidden h-px flex-1 bg-border sm:block" />
          </div>
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
            {related.map((r) => (
              <div
                key={r.href}
                className="flex flex-col border border-border bg-white p-6"
              >
                <h3 className="font-serif text-xl text-navy">{r.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate">{r.subtitle}</p>
                <Link href={r.href} className="btn-outline-dark mt-6 w-full !text-[0.65rem]">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy hover:text-gold"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
