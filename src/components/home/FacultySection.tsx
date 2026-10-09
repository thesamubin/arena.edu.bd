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

          <div className="lg:w-2/3 space-y-6 mt-8 lg:mt-0 relative z-10">
            {VERIFIED_FACULTY.map((faculty, idx) => {
              return (
                <div 
                  key={idx} 
                  className="group bg-white rounded-2xl p-6 sm:p-8 border border-academic-grey-border shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row gap-6 sm:gap-8 relative overflow-hidden"
                >
                  {/* Subtle Accent background on hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-academic-navy/5 rounded-bl-[100px] -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="shrink-0 relative z-10">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-academic-grey overflow-hidden relative shadow-sm ring-1 ring-academic-grey-border group-hover:ring-academic-blue/30 transition-all duration-300">
                      <Image src="/images/faculty/demo_avatar.jpg" alt={faculty.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                  
                  <div className="flex-1 relative z-10 flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-academic-navy mb-1">
                          {faculty.name}
                        </h3>
                        <p className="text-sm font-bold text-academic-blue">
                          {faculty.role}
                        </p>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-academic-blue/10 text-academic-blue whitespace-nowrap self-start">
                        {faculty.experience}
                      </span>
                    </div>
                    
                    <p className="text-academic-ink-secondary text-sm sm:text-base leading-relaxed mb-6 mt-3">
                      {faculty.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {faculty.specializations.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded bg-academic-grey text-academic-navy text-[11px] font-bold tracking-wide border border-academic-grey-border group-hover:border-academic-blue/20 transition-colors"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-2">
                      <Link
                        href="/faculty"
                        className="inline-flex items-center gap-2 text-sm font-bold text-academic-navy hover:text-academic-blue transition-colors group/link"
                      >
                        <span>Read Bio & Credentials</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
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
