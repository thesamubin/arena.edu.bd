import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { FACULTY_PAGE_CONTENT } from "@/data/institutionalContent";

export const metadata: Metadata = {
  title: "Faculty | Arena Web Security",
  description: "Verified qualifications, professional experience, and teaching responsibilities of our instructional faculty.",
};

export default function FacultyPage() {
  return (
    <>
      <Section background="warm" spacing="md">
        <Container>
          <Breadcrumbs items={[{ label: "Faculty" }]} className="mb-8" />
          <Heading level={1} kicker="Academics">
            Our Faculty
          </Heading>
          <p className="mt-6 max-w-3xl text-lg text-academic-ink-secondary leading-relaxed">
            {FACULTY_PAGE_CONTENT.intro}
          </p>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="space-y-12">
            {FACULTY_PAGE_CONTENT.members.map((member, idx) => (
              <Card key={idx} variant="outline" className="flex flex-col md:flex-row gap-8 items-start border-academic-grey-border">
                <div className="w-full md:w-1/3">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="text-academic-blue font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <div className="inline-block px-2.5 py-1 bg-academic-grey text-academic-navy text-xs font-semibold rounded-sm">
                    {member.experience}
                  </div>
                </div>
                
                <div className="w-full md:w-2/3 space-y-6">
                  <div>
                    <Heading level={4} className="mb-2 text-base">Professional Summary</Heading>
                    <p className="text-academic-ink-secondary text-sm leading-relaxed">{member.summary}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Heading level={4} className="mb-2 text-base">Specializations</Heading>
                      <ul className="space-y-1">
                        {member.specializations.map((spec, i) => (
                          <li key={i} className="text-xs text-academic-ink flex items-start gap-2">
                            <span className="text-academic-blue mt-0.5">•</span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-md">
                        <span className="text-xs font-bold text-yellow-800 uppercase tracking-wider block mb-1">TODO: Qualifications</span>
                        <span className="text-xs text-yellow-900">{member.qualifications}</span>
                      </div>
                      <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-md">
                        <span className="text-xs font-bold text-yellow-800 uppercase tracking-wider block mb-1">TODO: Teaching</span>
                        <span className="text-xs text-yellow-900">{member.teachingResponsibilities}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
