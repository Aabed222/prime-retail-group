import Link from "next/link";
import { Logo } from "./Logo";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-prg grid gap-10 py-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Logo variant="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/75">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-sm bg-terracotta px-4 py-2.5 text-sm font-semibold text-cream hover:bg-terracotta-deep"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/properties"
              className="rounded-sm border border-cream/30 px-4 py-2.5 text-sm font-medium text-cream hover:border-cream/60"
            >
              View Available Properties
            </Link>
          </div>
        </div>
        <div className="md:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Explore
          </h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/80 transition hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Contact
          </h2>
          <address className="mt-4 not-italic text-sm leading-relaxed text-cream/80">
            <p>{siteConfig.address.line1}</p>
            <p>{siteConfig.address.line2}</p>
            <p className="mt-3">
              <a href={siteConfig.phoneHref} className="hover:text-cream">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-cream">
                {siteConfig.email}
              </a>
            </p>
            <p className="mt-3 text-cream/60">{siteConfig.address.market}</p>
          </address>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-prg flex flex-col gap-2 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Original branding — not affiliated with any national CRE franchise.</p>
        </div>
      </div>
    </footer>
  );
}
