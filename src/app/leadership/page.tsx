import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { LEADERSHIP_CONTENT } from "@/data/institutionalContent";

export const metadata: Metadata = {
  title: "Leadership | Arena Web Security",
  description: "Meet the leadership team driving the vision and strategy of Arena Web Security.",
};

export default function LeadershipPage() {
  return (
    <>
      <Section background="warm" spacing="md">
        <Container>
          <Breadcrumbs items={[{ label: "Leadership" }]} className="mb-8" />
          <Heading level={1} kicker="Institution">
            Institutional Leadership
          </Heading>
          <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded-md max-w-3xl">
             <span className="text-xs font-bold text-yellow-800 uppercase tracking-wider">TODO</span>
             <p className="text-sm text-yellow-900 mt-1">{LEADERSHIP_CONTENT.overview}</p>
          </div>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEADERSHIP_CONTENT.members.map((leader, idx) => (
              <Card key={idx} variant="grey">
                <CardHeader>
                  <CardTitle>{leader.name}</CardTitle>
                  <CardDescription className="text-academic-blue font-medium">{leader.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-academic-ink-secondary text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
