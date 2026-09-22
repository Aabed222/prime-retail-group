"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-cream/95 backdrop-blur-md">
      <div className="container-prg flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.filter((l) => l.href !== "/").map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-sm px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
                  active
                    ? "text-terracotta"
                    : "text-charcoal/80 hover:text-charcoal"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/properties"
            className="rounded-sm border border-charcoal/20 px-3 py-2 text-sm font-medium text-charcoal transition hover:border-charcoal/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
          >
            View Properties
          </Link>
          <Link
            href="/contact"
            className="rounded-sm bg-terracotta px-3.5 py-2 text-sm font-semibold text-cream shadow-sm transition hover:bg-terracotta-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
          >
            Schedule a Consultation
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-charcoal/15 p-2 text-charcoal lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-charcoal/10 bg-cream lg:hidden"
        >
          <nav className="container-prg flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-2.5 text-base font-medium text-charcoal hover:bg-cream-deep"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-terracotta px-3 py-3 text-center text-sm font-semibold text-cream"
            >
              Schedule a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
