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
        return <Shield className="w-7 h-7" />;
      case "Public Institution":
        return <Landmark className="w-7 h-7" />;
      case "Academic Collaboration":
        return <GraduationCap className="w-7 h-7" />;
      default:
        return <Building2 className="w-7 h-7" />;
    }
  };

  return (
    <Section background="grey" spacing="xl" className="border-b border-academic-grey-border">
      <Container size="xl">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-20 items-start">
          
          <div className="contents xl:block xl:w-5/12 xl:sticky xl:top-24">
            {/* Sticky Title */}
            <div className="sticky top-20 z-20 bg-academic-grey/95 backdrop-blur-md pt-5 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 xl:static xl:bg-transparent xl:backdrop-blur-none xl:p-0 xl:z-auto border-b border-academic-grey-border/50 xl:border-none shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] xl:shadow-none transition-all">
              <Heading
                level={2}
                className="text-3xl sm:text-4xl"
              >
                Trusted Experience Across Public, Defense & Academic Sectors.
              </Heading>
            </div>
            
            <div className="space-y-6 mt-4 xl:mt-8 relative z-10">
              <p className="text-academic-ink-secondary text-base sm:text-lg leading-relaxed">
                Since 2012, Arena Web Security has conducted specialized technical security seminars,
                defensive training, and awareness workshops for national institutions and defense bodies.
              </p>
            </div>
          </div>

          <div className="xl:w-7/12 grid grid-cols-1 gap-6 mt-4 xl:mt-0 relative z-10">
            {INSTITUTIONAL_ENGAGEMENTS.map((engagement, idx) => {
              return (
                <div 
                  key={idx} 
                  className="group bg-white p-6 sm:p-8 rounded-2xl border border-academic-grey-border shadow-sm hover:shadow-xl hover:border-academic-blue/30 transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-8 items-start hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 shrink-0 rounded-xl bg-academic-grey border border-academic-grey-border flex items-center justify-center text-academic-blue group-hover:bg-academic-blue group-hover:text-white transition-colors duration-300">
                    {getCategoryIcon(engagement.category)}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-3 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-2">
                      <div className="space-y-1">
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-academic-navy leading-snug group-hover:text-academic-blue transition-colors duration-300">
                          {engagement.organization}
                        </h3>
                        <p className="text-sm font-semibold text-academic-blue">
                          {engagement.engagementType}
                        </p>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-academic-ink-muted bg-academic-grey border border-academic-grey-border/50 px-3 py-1.5 rounded-full whitespace-nowrap shrink-0">
                        {engagement.category}
                      </span>
                    </div>

                    <p className="text-academic-ink-secondary text-base leading-relaxed">
                      {engagement.description}
                    </p>

                    <div className="pt-4 mt-4 border-t border-academic-grey-border flex items-center gap-2 text-xs font-semibold text-emerald-600">
                      <CheckCircle2 className="w-4 h-4" />
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
