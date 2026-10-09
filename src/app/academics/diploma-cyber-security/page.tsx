import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { DIPLOMA_CONTENT } from "@/data/diplomaContent";

export const metadata: Metadata = {
  title: "Professional Diploma in Cyber Security | Arena Web Security Institute of Technology",
  description: "Comprehensive year-long curriculum encompassing foundational systems, advanced vulnerability assessment, ethical hacking, digital forensics, and defensive perimeter engineering.",
};

export default function DiplomaPage() {
  return (
    <>
      <Section background="navy" spacing="xl">
        <Container>
          <Breadcrumbs 
            items={[
              { label: "Academics", href: "/academics" },
              { label: "Diploma in Cyber Security" }
            ]} 
            className="mb-8 [&_a]:text-academic-warm/80 [&_a:hover]:text-academic-warm [&_span]:text-white [&_svg]:text-academic-warm/50" 
          />
          <Heading level={1} className="text-white">
            Professional Diploma in Cyber Security
          </Heading>
          <p className="mt-6 max-w-3xl text-lg text-academic-warm/90 leading-relaxed">
            {DIPLOMA_CONTENT.overview}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="accent" size="lg" href="/academics/admissions">
              Apply for Admission
            </Button>
            <Button variant="outline-light" size="lg" href="#curriculum">
              View Curriculum
            </Button>
          </div>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <Heading level={2} className="mb-4">Program Overview</Heading>
                <p className="text-academic-ink-secondary leading-relaxed mb-6">
                  {DIPLOMA_CONTENT.intendedLearners}
                </p>

                <Heading level={3} className="mb-4">Learning Outcomes</Heading>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {DIPLOMA_CONTENT.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-academic-grey p-4 rounded-md border border-academic-grey-border">
                      <span className="text-academic-blue mt-0.5">•</span>
                      <span className="text-sm text-academic-ink-secondary">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section id="curriculum">
                <Heading level={2} className="mb-6">Four-Semester Structure</Heading>
                <p className="text-academic-ink-secondary leading-relaxed mb-6">
                  {DIPLOMA_CONTENT.curriculumAndModules}
                </p>
                <div className="space-y-6">
                  {DIPLOMA_CONTENT.semesters.map((sem, idx) => (
                    <Card key={idx} variant="warm">
                      <CardHeader>
                        <CardTitle>{sem.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-academic-ink-secondary mb-4 text-sm">{sem.description}</p>
                        <ul className="space-y-2">
                          {sem.modules.map((mod, i) => (
                            <li key={i} className="text-sm text-academic-ink flex items-start gap-2">
                              <span className="text-academic-blue mt-0.5">•</span>
                              {mod}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section>
                <Heading level={2} className="mb-4">Assessment & Practical Work</Heading>
                <p className="text-academic-ink-secondary leading-relaxed bg-academic-warm p-6 rounded-md border border-academic-grey-border">
                  {DIPLOMA_CONTENT.assessment}
                </p>
              </section>

              <section>
                <Heading level={2} className="mb-4">Tuition & Applications</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card variant="outline">
                    <CardHeader>
                      <CardTitle className="text-lg">Tuition Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-academic-ink-secondary text-sm">
                        {DIPLOMA_CONTENT.tuition}
                      </p>
                    </CardContent>
                  </Card>
                  <Card variant="outline">
                    <CardHeader>
                      <CardTitle className="text-lg">Application Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-academic-ink-secondary text-sm">
                        {DIPLOMA_CONTENT.applicationInfo}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <Heading level={2} className="mb-6">Frequently Asked Questions</Heading>
                <div className="space-y-4">
                  {DIPLOMA_CONTENT.faqs.map((faq, idx) => (
                    <div key={idx} className="border border-academic-grey-border rounded-md overflow-hidden">
                      <div className="bg-academic-grey p-4 font-semibold text-academic-navy">
                        {faq.question}
                      </div>
                      <div className="p-4 bg-white text-sm text-academic-ink-secondary">
                        {faq.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <Card variant="grey">
                <CardHeader>
                  <CardTitle>Program Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-xs font-semibold text-academic-ink-muted uppercase tracking-wider mb-1">Duration</div>
                    <div className="text-academic-navy font-medium">{DIPLOMA_CONTENT.duration}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-academic-ink-muted uppercase tracking-wider mb-1">Delivery Mode</div>
                    <div className="text-academic-navy font-medium">{DIPLOMA_CONTENT.mode}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-academic-ink-muted uppercase tracking-wider mb-1">Certification</div>
                    <div className="text-academic-navy font-medium">{DIPLOMA_CONTENT.certification}</div>
                  </div>
                </CardContent>
              </Card>

              <div>
                <Heading level={4} className="mb-4">Lead Faculty</Heading>
                <div className="space-y-4">
                  {DIPLOMA_CONTENT.faculty.map((member, idx) => (
                    <div key={idx} className="flex flex-col gap-1 border-b border-academic-grey-border pb-4 last:border-0">
                      <span className="font-semibold text-academic-navy">{member.name}</span>
                      <span className="text-xs text-academic-ink-secondary">{member.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
