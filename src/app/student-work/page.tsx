import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { STUDENT_CONTENT } from "@/data/institutionalContent";

export const metadata: Metadata = {
  title: "Student Work | Arena Web Security",
  description: "Verified projects, research, and vulnerability disclosures by our students.",
};

export default function StudentWorkPage() {
  return (
    <>
      <Section background="warm" spacing="md">
        <Container>
          <Breadcrumbs items={[{ label: "Student Work" }]} className="mb-8" />
          <Heading level={1} kicker="Community">
            Student Projects & Research
          </Heading>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STUDENT_CONTENT.workExamples.map((work, idx) => (
              <Card key={idx} variant="grey">
                <CardHeader>
                  <div className="bg-yellow-50 border border-yellow-200 p-2 rounded-md mb-3 inline-block">
                     <span className="text-xs font-bold text-yellow-800 uppercase tracking-wider">TODO: Example Work</span>
                  </div>
                  <CardTitle>{work.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-academic-ink-secondary text-sm leading-relaxed">{work.description}</p>
                  <p className="text-xs font-semibold text-academic-navy">Author: {work.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
