import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { ACADEMIC_PROGRAMS } from "@/data/homeContent";

/**
 * Section 5: Academic Pathways (Refined for Phase 3B)
 *
 * Replaced heavy card grid with a clean typographic layout.
 */
export function AcademicPathwaysSection() {
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
                Cybersecurity Programs and Courses.
              </Heading>
            </div>
            
            <div className="space-y-6 mt-4 lg:mt-6 relative z-10">
              <p className="text-academic-ink-secondary text-base leading-relaxed">
                From our flagship diploma to intensive technical certifications, our curricula
                are engineered for systematic competence in offensive assessment, defensive engineering,
                and threat intelligence.
              </p>
              <div className="pt-2">
                <Button href="/academics" variant="primary" size="md">
                  <span>View Full Course Catalog</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Programs List */}
          <div className="lg:w-2/3 space-y-8 mt-8 lg:mt-0 relative z-10">
            {ACADEMIC_PROGRAMS.map((program) => (
              <div 
                key={program.id} 
                className="group relative bg-white rounded-xl border border-academic-grey-border border-t-4 border-t-academic-navy p-8 sm:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-academic-blue/5 rounded-bl-full -z-0 pointer-events-none transition-transform duration-500 group-hover:scale-150" />

                <div className="relative z-10">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-academic-grey text-academic-navy">
                      {program.duration}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-academic-blue/10 text-academic-blue">
                      {program.mode}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-academic-navy mb-4">
                    <Link href={program.slug} className="hover:text-academic-blue transition-colors">
                      {program.title}
                    </Link>
                  </h3>
                  
                  <p className="text-academic-ink-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                    {program.description}
                  </p>

                  <div className="pt-6 border-t border-academic-grey-border/60 flex flex-wrap items-center justify-between gap-4">
                    <Link
                      href={program.slug}
                      className="font-bold text-academic-navy hover:text-academic-blue transition-colors inline-flex items-center gap-2 group/link"
                    >
                      <span>Explore Curriculum</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <span className="text-xs font-semibold uppercase tracking-wider text-academic-ink-muted bg-academic-grey px-2 py-1 rounded">
                      {program.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </Container>
    </Section>
  );
}
