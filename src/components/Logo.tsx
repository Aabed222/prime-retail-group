import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const text = variant === "light" ? "text-cream" : "text-charcoal";
  const mark = variant === "light" ? "bg-terracotta text-cream" : "bg-charcoal text-cream";
  const accent = variant === "light" ? "text-gold" : "text-terracotta";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 ${className}`}
      aria-label="Prime Retail Group home"
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-sm font-semibold tracking-tight ${mark}`}
        aria-hidden
      >
        <span className="text-sm leading-none">
          PR<span className={accent}>G</span>
        </span>
      </span>
      <span className={`hidden sm:flex flex-col leading-tight ${text}`}>
        <span className="text-sm font-semibold tracking-wide uppercase">
          Prime Retail
        </span>
        <span className="text-[11px] font-medium tracking-[0.18em] uppercase opacity-80">
          Group
        </span>
      </span>
    </Link>
  );
}
