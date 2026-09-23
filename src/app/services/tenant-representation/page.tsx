import type { Metadata } from "next";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { tenantRepContent } from "@/content/service-pages";

export const metadata: Metadata = {
  title: "Tenant Representation",
  description:
    "Retail site selection and lease advocacy for operators expanding or relocating in Bakersfield and Central California.",
};

export default function TenantRepresentationPage() {
  return <ServiceDetailLayout {...tenantRepContent} />;
}
