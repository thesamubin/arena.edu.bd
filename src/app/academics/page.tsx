import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ACADEMIC_PROGRAMS } from "@/data/homeContent";

export const metadata: Metadata = {
  title: "Academics | Arena Web Security Institute of Technology",
  description: "Explore our academic pathways, professional diplomas, and specialized cybersecurity certifications.",
};

export default function AcademicsPage() {
  return (
    <>
      <Section background="warm" spacing="md">
        <Container>
          <Breadcrumbs items={[{ label: "Academics" }]} className="mb-8" />
          <Heading level={1}>
            Structured Cybersecurity Education
          </Heading>
          <p className="mt-6 max-w-3xl text-lg text-academic-ink-secondary leading-relaxed">
            From our flagship Professional Diploma to specialized certifications, our curriculum is designed to bridge the gap between academic theory and practical defense capability.
          </p>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACADEMIC_PROGRAMS.map((program) => (
              <Card key={program.id} hoverable className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-sm bg-academic-warm text-academic-navy text-xs font-semibold uppercase tracking-wider">
                      {program.code}
                    </span>
                    {program.isFlagship && (
                      <span className="px-2.5 py-1 rounded-sm bg-academic-blue/10 text-academic-blue text-xs font-semibold uppercase tracking-wider">
                        Flagship
                      </span>
                    )}
                  </div>
                  <CardTitle>{program.title}</CardTitle>
                  <CardDescription>{program.level}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-academic-ink-secondary text-sm leading-relaxed line-clamp-3">
                    {program.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {program.topics.slice(0, 3).map((topic, i) => (
                      <li key={i} className="text-xs text-academic-ink flex items-start gap-2">
                        <span className="text-academic-blue mt-0.5">•</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <div className="text-xs font-medium text-academic-ink-muted">
                    {program.duration}
                  </div>
                  <Button variant="ghost" size="sm" href={program.slug}>
                    View Details &rarr;
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
