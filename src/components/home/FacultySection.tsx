import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    <Section background="grey" spacing="xl" className="border-b border-academic-grey-border">
      <Container size="xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          <div className="contents lg:block lg:w-1/3 lg:sticky lg:top-24">


            {/* Sticky Title */}
            <div className="sticky top-20 z-20 bg-academic-grey/95 backdrop-blur-md pt-5 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 lg:static lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:z-auto border-b border-academic-grey-border/50 lg:border-none shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] lg:shadow-none transition-all">

              <Heading
                level={2}
                className="text-2xl sm:text-3xl lg:text-4xl"
              >
                Faculty with Active Field Experience.
              </Heading>
            </div>
            
            <div className="space-y-6 mt-4 lg:mt-6 relative z-10">
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
          </div>

          <div className="lg:w-2/3 space-y-12 mt-8 lg:mt-0 relative z-10">
            {VERIFIED_FACULTY.map((faculty, idx) => {
              const initials = faculty.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .substring(0, 2);

              return (
                <div key={idx} className="group border-b border-academic-grey-border/60 pb-10 last:border-0 last:pb-0 flex flex-col sm:flex-row gap-6 sm:gap-10">
                  <div className="shrink-0">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg bg-academic-grey-border/30 overflow-hidden relative border border-academic-grey-border/60">
                      {faculty.image ? (
                        <Image src={faculty.image} alt={faculty.name} fill className="object-cover" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-academic-navy text-academic-warm font-serif font-bold text-3xl">
                          {initials}
                        </div>
                      )}
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
