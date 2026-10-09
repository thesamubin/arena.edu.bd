import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ABOUT_CONTENT } from "@/data/institutionalContent";

export const metadata: Metadata = {
  title: "About Us | Arena Web Security",
  description: "Learn about the mission, verified history, and vision of Arena Web Security.",
};

export default function AboutPage() {
  return (
    <>
      <Section background="warm" spacing="md">
        <Container>
          <Breadcrumbs items={[{ label: "About" }]} className="mb-8" />
          <Heading level={1} kicker="Institution">
            About Arena Web Security
          </Heading>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container size="md">
          <div className="space-y-12">
            <section>
              <Heading level={2} className="mb-4">Our Mission</Heading>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-md mb-4">
                <span className="text-xs font-bold text-yellow-800 uppercase tracking-wider">Content Gap (TODO)</span>
                <p className="text-sm text-yellow-900 mt-1">{ABOUT_CONTENT.mission}</p>
              </div>
            </section>
            <section>
              <Heading level={2} className="mb-4">Institutional History</Heading>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-md mb-4">
                <span className="text-xs font-bold text-yellow-800 uppercase tracking-wider">Content Gap (TODO)</span>
                <p className="text-sm text-yellow-900 mt-1">{ABOUT_CONTENT.history}</p>
              </div>
            </section>
            <section>
              <Heading level={2} className="mb-4">Vision</Heading>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-md mb-4">
                <span className="text-xs font-bold text-yellow-800 uppercase tracking-wider">Content Gap (TODO)</span>
                <p className="text-sm text-yellow-900 mt-1">{ABOUT_CONTENT.vision}</p>
              </div>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
