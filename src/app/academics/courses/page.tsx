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
  title: "Short Courses & Technical Practicums | Arena Web Security Institute of Technology",
  description: "Focused, intensive short courses and technical practicums for hands-on skill development in specific cybersecurity domains.",
};

export default function CoursesPage() {
  // Filter for programs that are generally considered courses/practicums (excluding the flagship and certifications)
  const courses = ACADEMIC_PROGRAMS.filter(p => !p.isFlagship && !p.level.toLowerCase().includes("certification"));

  return (
    <>
      <Section background="warm" spacing="md">
        <Container>
          <Breadcrumbs 
            items={[
              { label: "Academics", href: "/academics" },
              { label: "Courses & Practicums" }
            ]} 
            className="mb-8" 
          />
          <Heading level={1}>
            Short Courses & Practicums
          </Heading>
          <p className="mt-6 max-w-3xl text-lg text-academic-ink-secondary leading-relaxed">
            Intensive, hands-on modules focusing on specific technical domains, from Linux internals to specialized network security operations.
          </p>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Card key={course.id} hoverable className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-sm bg-academic-warm text-academic-navy text-xs font-semibold uppercase tracking-wider">
                      {course.code}
                    </span>
                  </div>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.level}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-academic-ink-secondary text-sm leading-relaxed mb-4">
                    {course.description}
                  </p>
                  <div className="space-y-2 border-t border-academic-grey-border/50 pt-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-academic-ink-muted">Key Topics</span>
                    <ul className="space-y-1.5">
                      {course.topics.map((topic, i) => (
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
                    {course.duration} | {course.mode}
                  </div>
                  <Button variant="ghost" size="sm" href={course.slug}>
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
