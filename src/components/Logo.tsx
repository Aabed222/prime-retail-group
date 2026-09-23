import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden
        className="flex h-9 w-9 shrink-0 items-center justify-center bg-navy"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="10" width="6" height="10" fill="#D4AB63" />
          <rect x="10" y="6" width="5" height="14" fill="#F7F1E7" />
          <rect x="16" y="8" width="5" height="12" fill="#D4AB63" />
          <path d="M2 10 L12 3 L22 10" stroke="#F7F1E7" strokeWidth="1.5" fill="none" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block text-[0.95rem] font-bold tracking-wide text-navy">
          PRIME RETAIL
        </span>
        <span className="block text-[0.65rem] font-medium tracking-[0.2em] text-slate uppercase">
          Group
        </span>
      </span>
    </Link>
  );
}
