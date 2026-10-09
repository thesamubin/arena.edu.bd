import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ACADEMIC_PROGRAMS } from "@/data/homeContent";

export function generateStaticParams() {
  // Generate static routes for all programs except the flagship which has its own page
  return ACADEMIC_PROGRAMS
    .filter(p => !p.isFlagship && p.slug.startsWith("/academics/") && p.slug !== "/academics")
    .map((p) => ({
      slug: p.slug.replace("/academics/", ""),
    }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  // Using Promise handling for Next.js 15
  return params.then(({ slug }) => {
    const program = ACADEMIC_PROGRAMS.find((p) => p.slug === `/academics/${slug}`);
    
    if (!program) {
      return { title: "Program Not Found" };
    }

    return {
      title: `${program.title} | Arena Web Security`,
      description: program.description,
    };
  });
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = ACADEMIC_PROGRAMS.find((p) => p.slug === `/academics/${slug}`);

  if (!program) {
    notFound();
  }

  // Determine parent category based on level
  const isCertification = program.level.toLowerCase().includes("certification");
  const parentLabel = isCertification ? "Certifications" : "Courses & Practicums";
  const parentHref = isCertification ? "/academics/certifications" : "/academics/courses";

  return (
    <>
      <Section background="navy" spacing="lg">
        <Container>
          <Breadcrumbs 
            items={[
              { label: "Academics", href: "/academics" },
              { label: parentLabel, href: parentHref },
              { label: program.title }
            ]} 
            className="mb-8 [&_a]:text-academic-warm/80 [&_a:hover]:text-academic-warm [&_span]:text-white [&_svg]:text-academic-warm/50" 
          />
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-sm bg-academic-warm/10 text-academic-warm text-sm font-semibold uppercase tracking-wider border border-academic-warm/20">
              {program.code}
            </span>
          </div>
          <Heading level={1} className="text-white">
            {program.title}
          </Heading>
          <p className="mt-6 max-w-3xl text-lg text-academic-warm/90 leading-relaxed">
            {program.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="accent" size="lg" href="/academics/admissions">
              Apply Now
            </Button>
          </div>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <Heading level={2} className="mb-6">Curriculum & Topics</Heading>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {program.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-academic-grey p-4 rounded-md border border-academic-grey-border">
                      <span className="text-academic-blue mt-0.5">•</span>
                      <span className="text-sm text-academic-ink-secondary">{topic}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <Heading level={2} className="mb-4">Prerequisites & Target Audience</Heading>
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-md">
                  <Heading level={4} className="text-yellow-900 mb-2">TODO: Target Audience</Heading>
                  <p className="text-sm text-yellow-800">
                    Specific prerequisites, intended learners, and software requirements for this particular course are pending from the faculty.
                  </p>
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
                    <div className="text-xs font-semibold text-academic-ink-muted uppercase tracking-wider mb-1">Level</div>
                    <div className="text-academic-navy font-medium">{program.level}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-academic-ink-muted uppercase tracking-wider mb-1">Duration</div>
                    <div className="text-academic-navy font-medium">{program.duration}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-academic-ink-muted uppercase tracking-wider mb-1">Delivery Mode</div>
                    <div className="text-academic-navy font-medium">{program.mode}</div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="warm">
                <CardHeader>
                  <CardTitle>Need Guidance?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-academic-ink-secondary mb-4">
                    Not sure if this program is right for you? Contact our academic advisors for a consultation.
                  </p>
                  <Button variant="secondary" size="sm" className="w-full">
                    Contact Advisor
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
