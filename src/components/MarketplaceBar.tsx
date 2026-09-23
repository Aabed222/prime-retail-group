import {
  CREXI_BROWSE_URL,
  LOOPNET_BROWSE_URL,
  JOBAH_INVENTORY_REF_URL,
} from "@/lib/site";

export function MarketplaceBar() {
  return (
    <div className="border-b border-border bg-white">
      <div className="container-prg flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate">
          Browse live marketplace inventory for Bakersfield commercial:
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={CREXI_BROWSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark !py-2 !text-[0.65rem]"
          >
            Browse on Crexi
          </a>
          <a
            href={LOOPNET_BROWSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark !py-2 !text-[0.65rem]"
          >
            Browse on LoopNet
          </a>
          <a
            href={JOBAH_INVENTORY_REF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate hover:text-gold"
          >
            Full inventory (ref) →
          </a>
        </div>
      </div>
    </div>
  );
}
