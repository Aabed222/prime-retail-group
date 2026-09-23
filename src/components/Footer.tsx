import Link from "next/link";
import { Logo } from "./Logo";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-prg grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="mb-4 [&_span]:!text-white [&_.text-slate]:!text-gold [&_.bg-navy]:!bg-navy-soft">
            <Logo />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            Retail commercial real estate and business opportunities across
            Bakersfield, Kern County, and Central California.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Visit</p>
          <p className="text-sm leading-relaxed text-white/80">
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.line2}
          </p>
          <p className="mt-3 text-sm text-white/60">Hours: {siteConfig.hours}</p>
        </div>

        <div>
          <p className="eyebrow mb-4">Contact</p>
          <p className="text-sm">
            <a href={siteConfig.phoneHref} className="text-white/90 hover:text-gold">
              {siteConfig.phone}
            </a>
          </p>
          <p className="mt-2 text-sm">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-white/90 hover:text-gold"
            >
              {siteConfig.email}
            </a>
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {navLinks.slice(0, 6).map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/50 hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-prg flex flex-col gap-2 py-5 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Retail CRE · Bakersfield / Central California</p>
        </div>
      </div>
    </footer>
  );
}
