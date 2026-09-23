"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { navLinks, type NavLink } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const renderDesktopLink = (link: NavLink) => {
    if (link.children) {
      return (
        <div key={link.href} className="relative" ref={dropdownRef}>
          <button
            type="button"
            className="nav-link inline-flex items-center gap-1"
            data-active={isActive(link.href) ? "true" : "false"}
            aria-expanded={servicesOpen}
            aria-haspopup="true"
            onClick={(e) => {
              e.stopPropagation();
              setServicesOpen((v) => !v);
            }}
          >
            {link.label}
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="currentColor"
              className={`transition ${servicesOpen ? "rotate-180" : ""}`}
              aria-hidden
            >
              <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </button>
          {servicesOpen && (
            <div className="absolute left-0 top-full z-50 mt-2 min-w-[200px] border border-border bg-white py-2 shadow-sm">
              {link.children.map((child) => (
                <Link
                  key={child.href + child.label}
                  href={child.href}
                  className="block px-4 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-navy hover:bg-cream hover:text-gold-deep"
                  data-active={isActive(child.href) && child.href !== "/services" ? "true" : "false"}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={link.href}
        href={link.href}
        className="nav-link"
        data-active={isActive(link.href) ? "true" : "false"}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="container-prg flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-3 xl:flex 2xl:gap-4">
          {navLinks.map(renderDesktopLink)}
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
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="nav-link block border-b-0 py-3"
                  data-active={isActive(link.href) ? "true" : "false"}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="mb-2 ml-3 flex flex-col border-l border-border pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href + child.label}
                        href={child.href}
                        className="py-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-slate hover:text-navy"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
