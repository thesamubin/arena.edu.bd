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
      title: "Comprehensive Audit Reports",
      description: "Drafting full-scale VAPT reports with executive risk analyses and CVSS v3 scoring.",
    },
    {
      icon: Code2,
      title: "Security Tool Development",
      description: "Developing specialized utilities for network reconnaissance and automated parameter fuzzing.",
    },
    {
      icon: ShieldCheck,
      title: "Responsible Disclosure",
      description: "Applying rules of engagement (RoE) to document vulnerabilities ethically without unauthorized disclosure.",
    },
  ];

  return (
    <Section background="warm" spacing="xl" className="border-b border-academic-grey-border">
      <Container size="xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          <div className="lg:w-1/3 space-y-6">
            <Heading
              level={2}
              className="text-3xl sm:text-4xl"
            >
              Verified Technical Deliverables.
            </Heading>
            <p className="text-academic-ink-secondary text-base leading-relaxed">
              Student achievement is measured through defensible technical deliverables and an institutional 
              credential database accessible to employers worldwide.
            </p>
            <div className="pt-2">
              <Button href="/academics" variant="secondary" size="md">
                <span>View Grading Criteria</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mb-16">
              {projectTypes.map((project, idx) => {
                const Icon = project.icon;
                return (
                  <div key={idx} className="space-y-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-sm bg-academic-navy text-white flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-academic-warm" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-academic-navy leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-academic-ink-secondary text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Credential Verification Notice */}
            <div className="border-t border-academic-grey-border/60 pt-10">
              <div className="bg-academic-navy p-8 rounded-md text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">
                    Credential Verification Desk
                  </h3>
                  <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
                    Every certificate and diploma issued carries a unique serial identifier. 
                    Employers can verify authenticity directly through our dedicated portal.
                  </p>
                </div>
                <div className="shrink-0">
                  <Button
                    href={VERIFICATION_PORTAL_URL}
                    external
                    variant="accent"
                    size="md"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-4 h-4 ml-1.5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
