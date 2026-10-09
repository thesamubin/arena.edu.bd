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
  title: "Professional Certifications | Arena Web Security",
  description: "Industry-aligned professional certifications in ethical hacking, intelligence tradecraft, and specialized security engineering.",
};

export default function CertificationsPage() {
  // Filter for programs that are certifications
  const certifications = ACADEMIC_PROGRAMS.filter(p => p.level.toLowerCase().includes("certification"));

  return (
    <>
      <Section background="warm" spacing="md">
        <Container>
          <Breadcrumbs 
            items={[
              { label: "Academics", href: "/academics" },
              { label: "Certifications" }
            ]} 
            className="mb-8" 
          />
          <Heading level={1}>
            Certifications
          </Heading>
          <p className="mt-6 max-w-3xl text-lg text-academic-ink-secondary leading-relaxed">
            Rigorous certification tracks designed to validate specific skillsets in offensive security, open-source intelligence, and defensive architecture.
          </p>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.id} hoverable className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-sm bg-academic-warm text-academic-navy text-xs font-semibold uppercase tracking-wider">
                      {cert.code}
                    </span>
                  </div>
                  <CardTitle>{cert.title}</CardTitle>
                  <CardDescription>{cert.level}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-academic-ink-secondary text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  <div className="space-y-2 border-t border-academic-grey-border/50 pt-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-academic-ink-muted">Exam Domains</span>
                    <ul className="space-y-1.5">
                      {cert.topics.map((topic, i) => (
                        <li key={i} className="text-xs text-academic-ink flex items-start gap-2">
                          <span className="text-academic-blue mt-0.5">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-xs font-medium text-academic-ink-muted">
                    {cert.duration} | {cert.mode}
                  </div>
                  <Button variant="ghost" size="sm" href={cert.slug}>
                    Details &rarr;
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
