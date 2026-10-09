import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

/**
 * Section 6: Professional Diploma Spotlight (Phase 3B Redesign)
 *
 * Cleaned up to focus on typography and whitespace. Removed excessive
 * badges, nested cards, and metadata.
 */
export function DiplomaSpotlightSection() {
  const quarters = [
    {
      quarter: "Phase 1",
      title: "Foundations & Operating Systems",
    },
    {
      quarter: "Phase 2",
      title: "Offensive Assessment & VAPT",
    },
    {
      quarter: "Phase 3",
      title: "Web Security & Intelligence",
    },
    {
      quarter: "Phase 4",
      title: "Forensics, Defense & Capstone",
    },
  ];

  return (
    <Section background="navy" spacing="xl" className="relative overflow-hidden border-b border-academic-navy-light/40">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#FAFAF7_1px,transparent_1px)] [background-size:20px_20px]"
        aria-hidden="true"
      />

      <Container size="xl" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Core Message */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              1-Year Professional Diploma in Cyber Security.
            </h2>
            <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
              The Institute’s premier academic program. Engineered for individuals seeking complete,
              disciplined mastery of modern cybersecurity. Over 52 weeks, students progress through
              a cumulative syllabus designed around authentic enterprise attack and defense scenarios.
            </p>

            <ul className="space-y-3 pt-4 text-slate-200 font-sans text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-academic-blue mt-0.5 shrink-0" />
                <span>Supervised laboratory access with isolated multi-subnet topologies.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-academic-blue mt-0.5 shrink-0" />
                <span>Cumulative Capstone: Produce industry-standard VAPT audit reports.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-academic-blue mt-0.5 shrink-0" />
                <span>Certificate backing with unique online verification ID.</span>
              </li>
            </ul>

            <div className="pt-6">
              <Button
                href="/academics/diploma-cyber-security"
                variant="accent"
                size="lg"
              >
                <span>Explore the Diploma Curriculum</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* Right Column: Clean List of Quarters */}
          <div className="lg:pl-10 lg:border-l lg:border-white/10">
            <h3 className="text-sm font-mono uppercase tracking-wider text-academic-blue-light mb-8">
              Curriculum Trajectory · 4 Quarters
            </h3>
            
            <div className="space-y-8">
              {quarters.map((q, qIdx) => (
                <div key={qIdx} className="relative">
                  <span className="text-xs font-mono text-slate-400 block mb-1">
                    {q.quarter}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-serif text-white">
                    {q.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
