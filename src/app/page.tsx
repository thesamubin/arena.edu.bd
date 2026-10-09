/**
 * arena.edu.bd — Root Homepage
 *
 * Phase 3 placeholder. The production homepage will be implemented in Phase 3.
 * See src/app/_design/page.tsx for the design-system component showcase (non-production).
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Arena Web Security — Applied Cybersecurity Institute",
  description:
    "Official academic portal of Arena Web Security (arena.edu.bd). Professional diplomas, hands-on penetration testing laboratories, corporate cyber defense, and applied security research.",
};

export default function HomePage() {
  return (
    <Section background="warm" spacing="lg">
      <Container size="xl">
        {/* TODO [Phase 3]: Replace with full homepage sections:
              — InstitutionalHero
              — TrustBar
              — FeaturedPrograms
              — WhyArena
              — PartnerLogos
              — AdmissionsCallToAction
        */}
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4 py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-academic-ink-muted">
            arena.edu.bd · Phase 3 Pending
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-academic-navy max-w-2xl">
            Arena Web Security
          </h1>
          <p className="text-sm text-academic-ink-secondary max-w-md leading-relaxed">
            Applied Cybersecurity Institute. Homepage content will be implemented in Phase 3.
          </p>
        </div>
      </Container>
    </Section>
  );
}
