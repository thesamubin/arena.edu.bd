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
      quarter: "Semester 1",
      title: "Basic Cybersecurity & Ethical Hacking",
    },
    {
      quarter: "Semester 2",
      title: "Core Development & Python Automation",
    },
    {
      quarter: "Semester 3",
      title: "Advanced Cybersecurity & Defensive Operations",
    },
    {
      quarter: "Semester 4",
      title: "Cybersecurity Internship & Capstone",
    },
  ];

  return (
    <Section background="navy" spacing="xl" className="relative overflow-hidden border-b border-academic-navy-light/40">
      {/* Subtle background grid & glowing orb for depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#FAFAF7_1px,transparent_1px)] [background-size:20px_20px]"
        aria-hidden="true"
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-academic-blue/10 blur-[120px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-academic-blue/5 blur-[100px] rounded-full pointer-events-none transform -translate-x-1/2 translate-y-1/2" />

      <Container size="xl" className="relative z-10">
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
                className="group"
              >
                <span>Explore the Diploma Curriculum</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive Timeline */}
          <div className="lg:pl-12 lg:border-l lg:border-white/10 relative">
            <h3 className="text-sm font-mono uppercase tracking-wider text-academic-blue-light mb-10">
              Curriculum Trajectory · 4 Semesters
            </h3>
            
            <div className="space-y-8 relative">
              {/* Timeline connecting line */}
              <div className="absolute left-[7px] top-4 bottom-4 w-px bg-white/10" />

              {quarters.map((q, qIdx) => (
                <div 
                  key={qIdx} 
                  className="relative pl-8 group cursor-default"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-white/20 bg-academic-navy group-hover:border-academic-blue group-hover:bg-academic-blue/20 transition-colors duration-300 z-10" />
                  
                  {/* Phase Content */}
                  <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                    <span className="text-xs font-mono text-academic-blue/70 group-hover:text-academic-blue block mb-1 transition-colors duration-300">
                      {q.quarter}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-serif text-white/80 group-hover:text-white transition-colors duration-300">
                      {q.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
