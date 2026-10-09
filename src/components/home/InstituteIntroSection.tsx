import React from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import {
  INSTITUTION_NAME,
  INSTITUTION_FOUNDED,
  CONTACT_ADDRESS,
} from "@/lib/contact";

/**
 * Section 4: Institute Introduction (Phase 3B Redesign)
 *
 * Sets the academic tone and explains the pedagogical foundation of Arena Web Security.
 * Simplified editorial layout replacing the previous heavy cards.
 */
export function InstituteIntroSection() {
  return (
    <Section background="white" spacing="xl" className="border-b border-academic-grey-border">
      <Container size="md">
        <div className="flex flex-col items-center text-center space-y-6">
          <Heading
            level={2}
            className="text-3xl sm:text-4xl"
          >
            Cybersecurity Education Built on Practical Experience.
          </Heading>
          
          <div className="space-y-6 text-academic-ink-secondary text-base sm:text-lg leading-relaxed">
            <p>
              Established in {INSTITUTION_FOUNDED} in Dhaka, {INSTITUTION_NAME} was founded to address
              the critical deficit of specialized technical cybersecurity professionals in Bangladesh.
              Over more than a decade of focused academic instruction, we have cultivated a rigorous,
              practical training environment designed for real-world defense.
            </p>
            <p>
              Our curriculum rejects superficial shortcuts and automated scanner reliance. We train
              students, software engineers, and defense personnel to understand vulnerabilities at the
              code and network level, write custom security scripts, and document technical audits with
              professional precision.
            </p>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Button href="/about" variant="secondary" size="md">
              <span>Read the Institutional Charter</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
            <span className="text-xs font-mono text-academic-ink-muted">
              Campus: {CONTACT_ADDRESS.short}
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
