import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { VERIFIED_FACULTY } from "@/data/homeContent";

/**
 * Section 8: Faculty and Expertise (Phase 3B Redesign)
 */
export function FacultySection() {
  return (
    <Section background="warm" spacing="xl" className="border-b border-academic-grey-border">
      <Container size="xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-24">
            <Heading
              level={2}
              kicker="Academic Council"
              className="text-3xl sm:text-4xl"
            >
              Faculty with Active Field Experience.
            </Heading>
            <p className="text-academic-ink-secondary text-base leading-relaxed">
              Our instructors are active security consultants, penetration testers, and vulnerability
              researchers. Instruction is grounded in real enterprise engagements.
            </p>
            <div className="pt-2">
              <Button href="/faculty" variant="secondary" size="md">
                <span>View Full Registry</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-12">
            {VERIFIED_FACULTY.map((faculty, idx) => {
              const initials = faculty.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .substring(0, 2);

              return (
                <div key={idx} className="group border-b border-academic-grey-border/60 pb-10 last:border-0 last:pb-0 flex flex-col sm:flex-row gap-6 sm:gap-10">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-sm bg-academic-navy text-academic-warm flex items-center justify-center font-serif font-bold text-xl border border-academic-navy-light/40">
                      {initials}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-academic-navy">
                        {faculty.name}
                      </h3>
                      <span className="font-mono text-sm text-academic-ink-muted hidden sm:inline">
                        {faculty.experience}
                      </span>
                    </div>
                    
                    <p className="text-sm font-semibold text-academic-blue mb-4">
                      {faculty.role}
                    </p>
                    
                    <p className="text-academic-ink-secondary text-base leading-relaxed mb-6">
                      {faculty.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {faculty.specializations.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-sm bg-academic-grey text-academic-ink-secondary text-xs font-sans border border-academic-grey-border"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/faculty"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-academic-blue hover:text-academic-navy transition-colors"
                    >
                      <span>Read Bio & Credentials</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </Section>
  );
}
