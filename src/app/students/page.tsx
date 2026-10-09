import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { STUDENT_CONTENT } from "@/data/institutionalContent";

export const metadata: Metadata = {
  title: "Students | Arena Web Security",
  description: "Verified student demographics, professional backgrounds, and outcomes.",
};

export default function StudentsPage() {
  return (
    <>
      <Section background="warm" spacing="md">
        <Container>
          <Breadcrumbs items={[{ label: "Students" }]} className="mb-8" />
          <Heading level={1}>
            Our Students
          </Heading>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container size="md">
          <div className="space-y-12">
            <section>
              <Heading level={2} className="mb-4">Demographics & Backgrounds</Heading>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-md">
                <span className="text-xs font-bold text-yellow-800 uppercase tracking-wider block mb-2">Content Gap (TODO)</span>
                <p className="text-sm text-yellow-900">{STUDENT_CONTENT.demographics}</p>
              </div>
            </section>
            
            <section>
              <Heading level={2} className="mb-4">Graduate Outcomes</Heading>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-md">
                <span className="text-xs font-bold text-yellow-800 uppercase tracking-wider block mb-2">Content Gap (TODO)</span>
                <p className="text-sm text-yellow-900">{STUDENT_CONTENT.outcomes}</p>
              </div>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
