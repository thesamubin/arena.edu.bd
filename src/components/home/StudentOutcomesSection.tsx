import React from "react";
import Link from "next/link";
import { FileCheck, Code2, ShieldCheck, ExternalLink, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { VERIFICATION_PORTAL_URL } from "@/lib/contact";

/**
 * Section 10: Student Projects & Verified Outcomes (Phase 3B Redesign)
 */
export function StudentOutcomesSection() {
  const projectTypes = [
    {
      icon: FileCheck,
      title: "Practical Audit Reports",
      description: "Students write full-scale Penetration Testing (VAPT) reports identical to those delivered to real corporate clients.",
    },
    {
      icon: Code2,
      title: "Custom Security Tools",
      description: "Instead of just running existing software, students build their own tools for network reconnaissance and automated testing.",
    },
    {
      icon: ShieldCheck,
      title: "Real-World Bug Hunting",
      description: "Applying ethical hacking rules to safely find and report live vulnerabilities through responsible disclosure programs.",
    },
  ];

  return (
    <Section background="white" spacing="xl" className="border-b border-academic-grey-border">
      <Container size="xl">
        <div className="flex flex-col gap-12">
          
          {/* Header Area */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-academic-grey-border/50 pb-8">
            <div className="max-w-2xl space-y-4">
              <Heading level={2} className="text-3xl sm:text-4xl lg:text-5xl">
                Real-World Assessment & Certification.
              </Heading>
              <p className="text-academic-ink-secondary text-lg leading-relaxed">
                We evaluate students based on practical execution, not written exams. You earn your certificate by completing real cybersecurity tasks, and every certificate we issue is globally verifiable by employers.
              </p>
            </div>
            <div className="shrink-0">
              <Button href="/academics" variant="secondary" size="md">
                <span>View Grading Criteria</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* 3-Column Grid for Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTypes.map((project, idx) => {
              const Icon = project.icon;
              return (
                <div key={idx} className="bg-academic-grey/30 rounded-xl p-6 sm:p-8 border border-academic-grey-border">
                  <div className="w-12 h-12 rounded-lg bg-academic-navy text-white flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-academic-warm" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-academic-navy mb-3">
                    {project.title}
                  </h3>
                  <p className="text-academic-ink-secondary text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Full-width Certificate Verification Notice */}
          <div className="mt-4">
            <div className="bg-academic-navy p-8 sm:p-10 rounded-xl text-white flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-xl relative overflow-hidden">
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full pointer-events-none" />
              
              <div className="relative z-10 max-w-2xl">
                <h3 className="font-serif text-2xl font-bold mb-3 text-academic-warm">
                  Certificate Verification Desk
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  Every certificate and diploma issued by Arena Web Security carries a unique serial identifier. 
                  Employers and HR teams can verify the authenticity of a student&apos;s graduation directly through our dedicated portal.
                </p>
              </div>
              
              <div className="relative z-10 shrink-0">
                <Button
                  href={VERIFICATION_PORTAL_URL}
                  external
                  variant="accent"
                  size="md"
                >
                  <span>Verify Certificate</span>
                  <ExternalLink className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
