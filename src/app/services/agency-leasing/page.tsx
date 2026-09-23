import type { Metadata } from "next";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { agencyLeasingContent } from "@/content/service-pages";

export const metadata: Metadata = {
  title: "Agency Leasing",
  description:
    "Landlord representation and agency leasing to fill vacancies and strengthen tenant mix across Central California retail.",
};

export default function AgencyLeasingPage() {
  return <ServiceDetailLayout {...agencyLeasingContent} />;
}
