import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface TrainingDetailProps {
  title: string;
  description: string;
  deliveryOptions: string[];
  exampleTopics: string[];
  inquiryProcess: string;
  type: "Corporate" | "Government";
}

export function TrainingDetail({ title, description, deliveryOptions, exampleTopics, inquiryProcess, type }: TrainingDetailProps) {
  return (
    <>
      <Section background="navy" spacing="xl">
        <Container>
          <Breadcrumbs 
            items={[
              { label: "Institutional Training", href: "/training" },
              { label: type }
            ]} 
            className="mb-8 [&_a]:text-academic-warm/80 [&_a:hover]:text-academic-warm [&_span]:text-white [&_svg]:text-academic-warm/50" 
          />
          <Heading level={1} className="text-white">
            {title}
          </Heading>
          <p className="mt-6 max-w-3xl text-lg text-academic-warm/90 leading-relaxed">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="accent" size="lg" href="/training/request">
              Submit Inquiry
            </Button>
          </div>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <Heading level={2} className="mb-6">Example Topics & Capabilities</Heading>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {exampleTopics.map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-academic-grey p-4 rounded-md border border-academic-grey-border">
                      <span className="text-academic-blue mt-0.5">•</span>
                      <span className="text-sm text-academic-ink-secondary">{topic}</span>
                    </div>
                  ))}
                </div>
              </section>
              
              <section>
                <Heading level={2} className="mb-4">Inquiry Process</Heading>
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-md">
                  <span className="text-xs font-bold text-yellow-800 uppercase tracking-wider block mb-2">Content Gap (TODO)</span>
                  <p className="text-sm text-yellow-900">{inquiryProcess}</p>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <Card variant="grey">
                <CardHeader>
                  <CardTitle>Delivery Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {deliveryOptions.map((opt, i) => (
                      <li key={i} className="text-sm text-academic-ink-secondary flex items-start gap-2">
                        <span className="text-academic-blue mt-0.5">•</span>
                        {opt}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
