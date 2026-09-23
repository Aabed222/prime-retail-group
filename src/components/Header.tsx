"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="container-prg flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-4 xl:flex 2xl:gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              data-active={isActive(link.href) ? "true" : "false"}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-navy/20 xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 bg-navy transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white xl:hidden">
          <nav className="container-prg flex flex-col py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link border-b-0 py-3"
                data-active={isActive(link.href) ? "true" : "false"}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
