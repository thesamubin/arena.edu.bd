import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TRAINING_OVERVIEW, CORPORATE_TRAINING, GOVERNMENT_TRAINING } from "@/data/trainingContent";

export const metadata: Metadata = {
  title: "Institutional Training | Arena Web Security",
  description: "Specialized capability-building programs for corporate enterprises and government institutions.",
};

export default function TrainingPage() {
  return (
    <>
      <Section background="warm" spacing="md">
        <Container>
          <Breadcrumbs items={[{ label: "Training" }]} className="mb-8" />
          <Heading level={1} kicker="B2B & G2G Programs">
            Institutional Training
          </Heading>
          <p className="mt-6 max-w-3xl text-lg text-academic-ink-secondary leading-relaxed">
            {TRAINING_OVERVIEW.intro}
          </p>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-md mb-12 max-w-3xl">
            <span className="text-xs font-bold text-yellow-800 uppercase tracking-wider block mb-2">TODO: Pedagogical Approach</span>
            <p className="text-sm text-yellow-900">{TRAINING_OVERVIEW.approach}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card hoverable className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{CORPORATE_TRAINING.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <p className="text-academic-ink-secondary text-sm leading-relaxed">
                  {CORPORATE_TRAINING.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline-light" className="w-full !border-academic-navy !text-academic-navy hover:!bg-academic-navy hover:!text-white" size="sm" href="/training/corporate">
                  View Corporate Offerings
                </Button>
              </CardFooter>
            </Card>

            <Card hoverable className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{GOVERNMENT_TRAINING.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <p className="text-academic-ink-secondary text-sm leading-relaxed">
                  {GOVERNMENT_TRAINING.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline-light" className="w-full !border-academic-navy !text-academic-navy hover:!bg-academic-navy hover:!text-white" size="sm" href="/training/government">
                  View Defense Programs
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
