import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Admissions | Arena Web Security",
  description: "Information regarding admissions criteria, tuition fees, and application procedures for our academic programs.",
};

export default function AdmissionsPage() {
  return (
    <>
      <Section background="warm" spacing="md">
        <Container>
          <Breadcrumbs 
            items={[
              { label: "Academics", href: "/academics" },
              { label: "Admissions" }
            ]} 
            className="mb-8" 
          />
          <Heading level={1}>
            Admissions
          </Heading>
          <p className="mt-6 max-w-3xl text-lg text-academic-ink-secondary leading-relaxed">
            Detailed information regarding enrollment criteria, intake schedules, and the application process for Arena Web Security programs.
          </p>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-md">
                <Heading level={3} className="text-yellow-900 mb-2">TODO: Admissions Content Required</Heading>
                <p className="text-sm text-yellow-800">
                  The admissions guidelines, prerequisites, selection process, and application forms are pending formal publication. Content must be verified by the administration before displaying.
                </p>
              </div>

              <section>
                <Heading level={2} className="mb-6">Application Process</Heading>
                <p className="text-academic-ink-secondary mb-6">
                  Candidates are required to follow a structured admissions procedure to ensure they meet the technical prerequisites for our rigorous academic programs.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-academic-navy text-white flex items-center justify-center font-bold">1</div>
                    <div>
                      <Heading level={4} className="mb-2">Initial Review</Heading>
                      <p className="text-sm text-academic-ink-secondary">TODO: Define initial review process and required documentation.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-academic-navy text-white flex items-center justify-center font-bold">2</div>
                    <div>
                      <Heading level={4} className="mb-2">Technical Assessment</Heading>
                      <p className="text-sm text-academic-ink-secondary">TODO: Define technical assessment or interview requirements.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-academic-navy text-white flex items-center justify-center font-bold">3</div>
                    <div>
                      <Heading level={4} className="mb-2">Enrollment Finalization</Heading>
                      <p className="text-sm text-academic-ink-secondary">TODO: Define final enrollment steps, tuition deposits, and orientation.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <Card variant="grey">
                <CardHeader>
                  <CardTitle>Upcoming Intakes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-academic-ink-secondary mb-4">
                    TODO: List upcoming intake dates, deadlines, and seat availability for the Professional Diploma and individual certifications.
                  </p>
                </CardContent>
              </Card>

              <Card variant="warm">
                <CardHeader>
                  <CardTitle>Tuition & Financial Aid</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-academic-ink-secondary mb-4">
                    TODO: Detail the tuition fees for each program, installment options, and any available merit-based scholarships or financial aid.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
