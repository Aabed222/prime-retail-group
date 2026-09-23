import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} in Bakersfield — phone, mailing address, and message form.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        tone="cream"
        eyebrow="Contact"
        title="Let's talk about what you're building."
        description="Retail property, leasing, or a business opportunity — send a note and we'll follow up."
      />
      <section className="border-t border-border bg-cream pb-20">
        <div className="container-prg grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-navy">Office</h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="label-prg">Address</dt>
                <dd className="text-base text-navy">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </dd>
              </div>
              <div>
                <dt className="label-prg">Phone</dt>
                <dd>
                  <a
                    href={siteConfig.phoneHref}
                    className="text-base text-navy hover:text-gold"
                  >
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label-prg">Email</dt>
                <dd>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base text-navy hover:text-gold"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label-prg">Hours</dt>
                <dd className="text-base text-navy">{siteConfig.hours}</dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
