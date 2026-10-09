import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { EDUCATIONAL_RESOURCES } from "@/data/homeContent";

/**
 * Section 12: Educational Resources (Phase 3B Redesign)
 */
export function EducationalResourcesSection() {
  return (
    <Section background="warm" spacing="xl" className="border-b border-academic-grey-border">
      <Container size="xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          <div className="lg:w-1/3 lg:sticky lg:top-24">
            <div className="sticky top-16 sm:top-[72px] z-20 bg-academic-warm py-3 -mx-4 px-4 sm:mx-0 sm:px-0 lg:static lg:bg-transparent lg:p-0 lg:z-auto border-b border-academic-grey-border/50 lg:border-none shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] lg:shadow-none transition-all">
              <Heading
                level={2}
                kicker="Publications & Resources"
                className="text-2xl sm:text-3xl lg:text-4xl"
              >
                Educational Guides & Security Standards.
              </Heading>
            </div>
            <div className="space-y-6 mt-4 lg:mt-6 relative z-10">
              <p className="text-academic-ink-secondary text-base leading-relaxed">
                Curated pedagogical references, technical primers, and institutional ethics guidelines
                published by the faculty to support sound security practices and responsible disclosure.
              </p>
              <div className="pt-2">
                <Button href="/research" variant="secondary" size="md">
                  <span>All Research & Guides</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-12 mt-8 lg:mt-0 relative z-10">
            {EDUCATIONAL_RESOURCES.map((resource, idx) => (
              <div key={idx} className="group border-b border-academic-grey-border/60 pb-10 last:border-0 last:pb-0">
                <div className="flex items-center gap-3 mb-4 text-academic-blue">
                  <BookOpen className="w-4 h-4" />
                  <span className="font-mono text-sm uppercase tracking-wider">
                    {resource.category}
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-academic-navy mb-3">
                  <Link href={resource.slug} className="hover:text-academic-blue transition-colors">
                    {resource.title}
                  </Link>
                </h3>
                
                <p className="text-academic-ink-secondary text-base leading-relaxed mb-6 max-w-2xl">
                  {resource.description}
                </p>

                <div className="flex items-center gap-4 text-sm">
                  <Link
                    href={resource.slug}
                    className="font-semibold text-academic-blue hover:text-academic-navy transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="text-academic-ink-muted hidden sm:inline">•</span>
                  <span className="text-academic-ink-muted">{resource.readTime}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
}
