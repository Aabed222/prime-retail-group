import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/listings",
  "/leasing",
  "/future-dev",
  "/services",
  "/services/tenant-representation",
  "/services/agency-leasing",
  "/insights",
  "/sba-calculator",
  "/team",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path.startsWith("/services/") || path === "/insights" ? 0.8 : 0.7,
  }));
}
