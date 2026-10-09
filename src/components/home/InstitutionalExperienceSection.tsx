import React from "react";
import { CheckCircle2, Shield, Landmark, GraduationCap, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { INSTITUTIONAL_ENGAGEMENTS } from "@/data/homeContent";

/**
 * Section 11: Partners & Institutional Experience (Phase 3B Redesign)
 */
export function InstitutionalExperienceSection() {
  
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "Government / Defense":
        return <Shield className="w-8 h-8 text-academic-blue" />;
      case "Public Institution":
        return <Landmark className="w-8 h-8 text-academic-blue" />;
      case "Academic Collaboration":
        return <GraduationCap className="w-8 h-8 text-academic-blue" />;
      default:
        return <Building2 className="w-8 h-8 text-academic-blue" />;
    }
  };

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
                Trusted Experience Across Public, Defense & Academic Sectors.
              </Heading>
            </div>
            
            <div className="space-y-6 mt-4 lg:mt-6 relative z-10">
              <p className="text-academic-ink-secondary text-base leading-relaxed">
                Since 2012, Arena Web Security has conducted specialized technical security seminars,
                defensive training, and awareness workshops for national institutions and defense bodies.
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-12 mt-8 lg:mt-0 relative z-10">
            {INSTITUTIONAL_ENGAGEMENTS.map((engagement, idx) => {
              return (
                <div key={idx} className="group border-b border-academic-grey-border/60 pb-10 last:border-0 last:pb-0 flex flex-col sm:flex-row gap-6 sm:gap-8">
                  <div className="shrink-0 pt-1">
                    <div className="w-16 h-16 rounded-lg bg-academic-grey border border-academic-grey-border flex items-center justify-center">
                      {getCategoryIcon(engagement.category)}
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-academic-navy leading-snug">
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

        </div>
      </Container>
    </Section>
  );
}
