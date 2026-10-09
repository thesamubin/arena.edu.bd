import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { PARTNERS_CONTENT } from "@/data/institutionalContent";

export const metadata: Metadata = {
  title: "Partners | Arena Web Security",
  description: "Distinguishing our formal academic partners, training recipients, and vendors.",
};

export default function PartnersPage() {
  return (
    <>
      <Section background="warm" spacing="md">
        <Container>
          <Breadcrumbs items={[{ label: "Partners & Engagements" }]} className="mb-8" />
          <Heading level={1} kicker="Institution">
            Partners & Engagements
          </Heading>
          <p className="mt-6 max-w-3xl text-lg text-academic-ink-secondary leading-relaxed">
            {PARTNERS_CONTENT.intro}
          </p>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="space-y-16">
            <section>
              <Heading level={2} className="mb-6">Formal Academic Partners</Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PARTNERS_CONTENT.academicPartners.map((partner, idx) => (
                  <Card key={idx} variant="outline">
                    <CardHeader>
                      <CardTitle>{partner.organization}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <span className="text-xs font-semibold uppercase text-academic-blue mb-2 block">{partner.engagementType}</span>
                      <p className="text-sm text-academic-ink-secondary">{partner.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <Heading level={2} className="mb-6">Government & Public Sector Engagements (Training Recipients)</Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PARTNERS_CONTENT.trainingRecipients.map((recipient, idx) => (
                  <Card key={idx} variant="grey">
                    <CardHeader>
                      <CardTitle className="text-base">{recipient.organization}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <span className="text-xs font-semibold uppercase text-academic-blue mb-2 block">{recipient.engagementType}</span>
                      <p className="text-sm text-academic-ink-secondary">{recipient.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <section>
                <Heading level={2} className="mb-6">Technology Vendors</Heading>
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-md">
                  <span className="text-xs font-bold text-yellow-800 uppercase tracking-wider block mb-2">Content Gap (TODO)</span>
                  <p className="text-sm text-yellow-900">Verified technology or certification vendor partners to be added here.</p>
                </div>
              </section>

              <section>
                <Heading level={2} className="mb-6">Corporate Clients</Heading>
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-md">
                  <span className="text-xs font-bold text-yellow-800 uppercase tracking-wider block mb-2">Content Gap (TODO)</span>
                  <p className="text-sm text-yellow-900">Verified corporate consulting clients to be added here.</p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
