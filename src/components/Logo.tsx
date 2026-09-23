import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex flex-col items-center text-center leading-none ${className}`}
      aria-label="Prime Retail Group"
    >
      <span className="text-[0.95rem] font-bold tracking-[0.12em] text-navy uppercase sm:text-[1.05rem]">
        Prime Retail
      </span>
      <span className="mt-1 text-[0.62rem] font-medium tracking-[0.28em] text-slate uppercase">
        Group
      </span>
    </Link>
  );
}
