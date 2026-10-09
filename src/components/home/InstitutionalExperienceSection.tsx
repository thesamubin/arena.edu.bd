import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { INSTITUTIONAL_ENGAGEMENTS } from "@/data/homeContent";

/**
 * Section 11: Partners & Institutional Experience (Phase 3B Redesign)
 */
export function InstitutionalExperienceSection() {
  return (
    <Section background="white" spacing="xl" className="border-b border-academic-grey-border">
      <Container size="lg">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <Heading
            level={2}
            className="text-3xl sm:text-4xl"
          >
            Trusted Experience Across Public, Defense & Academic Sectors.
          </Heading>
          <p className="text-academic-ink-secondary text-base sm:text-lg leading-relaxed">
            Since 2012, Arena Web Security has conducted specialized technical security seminars,
            defensive training, and awareness workshops for national institutions and defense bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-4xl mx-auto">
          {INSTITUTIONAL_ENGAGEMENTS.map((engagement, idx) => {
            return (
              <div key={idx} className="group border-t border-academic-grey-border/60 pt-8 mt-2 first:mt-0 first:border-0 md:first:pt-0 md:[&:nth-child(2)]:pt-0 md:[&:nth-child(2)]:border-0 md:[&:nth-child(2)]:mt-0">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-academic-navy leading-snug">
                      {engagement.organization}
                    </h3>
                    <p className="text-sm font-semibold text-academic-blue mt-1">
                      {engagement.engagementType}
                    </p>
                  </div>
                  
                  <p className="text-academic-ink-secondary text-base leading-relaxed">
                    {engagement.description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm text-academic-ink-muted">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Technical Session Delivered</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
