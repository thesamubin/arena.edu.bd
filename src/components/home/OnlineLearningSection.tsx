import React from "react";
import { Terminal, Video, Server, Lock, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

/**
 * Section 7: Online Learning & Practical Lab Experience (Phase 3B Redesign)
 */
export function OnlineLearningSection() {
  const labFeatures = [
    {
      icon: Terminal,
      title: "Isolated Virtual Labs",
      description: "Access segregated target subnets and vulnerable web servers in safe, sandbox environments.",
    },
    {
      icon: Video,
      title: "Live Interactive Sessions",
      description: "Lectures delivered live with screen sharing, terminal analysis, and real-time code review.",
    },
    {
      icon: Server,
      title: "Archived Repository",
      description: "Continuous access to session recordings, lab checklists, and technical setup guides.",
    },
    {
      icon: Lock,
      title: "Strict Ethical Rules",
      description: "Learn standard Rules of Engagement (RoE). All exploitation is restricted to assigned labs.",
    },
  ];

  return (
    <Section background="white" spacing="xl" className="border-b border-academic-grey-border">
      <Container size="lg">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <Heading
            level={2}
            kicker="Instructional Methodology"
            className="text-3xl sm:text-4xl"
          >
            Online Delivery Anchored in Practical Drills.
          </Heading>
          <p className="text-academic-ink-secondary text-base sm:text-lg leading-relaxed">
            Cybersecurity cannot be learned passively. Our online-first academic model couples scheduled 
            interactive seminars with supervised virtual lab environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-4xl mx-auto">
          {labFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="flex gap-4">
                <div className="mt-1">
                  <div className="w-10 h-10 rounded-sm bg-academic-navy text-white flex items-center justify-center">
                    <Icon className="w-5 h-5 text-academic-warm" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-academic-navy mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-academic-ink-secondary text-base leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button href="/academics" variant="secondary" size="md">
            <span>View Lab Curriculum</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
