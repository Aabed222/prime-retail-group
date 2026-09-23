/**
 * Crexi & LoopNet marketplace configuration
 * ==========================================
 * Paste official embed codes here when you receive them from Crexi / LoopNet.
 * Leave strings empty ("") so the site shows “Browse on Crexi / LoopNet” links
 * instead of blank iframes.
 */

export const CREXI_BROWSE_URL =
  "https://www.crexi.com/properties?query=Bakersfield%2C%20CA";

export const LOOPNET_BROWSE_URL =
  "https://www.loopnet.com/search/commercial-real-estate/bakersfield-ca/for-sale/";

export const LOOPNET_LEASE_BROWSE_URL =
  "https://www.loopnet.com/search/commercial-real-estate/bakersfield-ca/for-lease/";

export const CREXI_FUSE_SALE_HTML = "";
export const CREXI_FUSE_LEASE_HTML = "";
export const LOOPLINK_HTML = "";

export function getCrexiFuseSaleEmbed(): string {
  const fromFile = CREXI_FUSE_SALE_HTML.trim();
  if (fromFile) return fromFile;
  return (process.env.NEXT_PUBLIC_CREXI_FUSE_SALE_EMBED ?? "").trim();
}

export function getCrexiFuseLeaseEmbed(): string {
  const fromFile = CREXI_FUSE_LEASE_HTML.trim();
  if (fromFile) return fromFile;
  return (process.env.NEXT_PUBLIC_CREXI_FUSE_LEASE_EMBED ?? "").trim();
}

export function getLoopLinkEmbed(): string {
  const fromFile = LOOPLINK_HTML.trim();
  if (fromFile) return fromFile;
  return (process.env.NEXT_PUBLIC_LOOPLINK_EMBED ?? "").trim();
}

export function getCrexiBrokerUrl(): string {
  return (process.env.NEXT_PUBLIC_CREXI_BROKER_URL ?? "").trim();
}

export function getLoopnetBrokerUrl(): string {
  return (process.env.NEXT_PUBLIC_LOOPNET_BROKER_URL ?? "").trim();
}

export function hasAnyLiveEmbed(): boolean {
  return Boolean(
    getCrexiFuseSaleEmbed() || getCrexiFuseLeaseEmbed() || getLoopLinkEmbed(),
  );
}
