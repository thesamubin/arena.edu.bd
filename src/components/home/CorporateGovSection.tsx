import React from "react";
import Image from "next/image";
import { Building2, Landmark, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

/**
 * Section 9: Corporate and Government Training (Phase 3B Redesign)
 *
 * Simplified to a clean editorial layout.
 */
export function CorporateGovSection() {
  const tracks = [
    "Secure Software Development Lifecycle (SSDLC)",
    "Web API Vulnerability Assessment",
    "Social Engineering & Phishing Simulations",
    "Red vs Blue Team Incident Response",
    "Critical Information Infrastructure (CIIP)",
    "Digital Evidence & Cyber Forensics",
  ];

  return (
    <Section background="navy" spacing="xl" className="border-b border-academic-navy-light/40 relative overflow-hidden">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-luminosity">
        <Image
          src="/images/corporate-bg.jpg"
          alt="Corporate boardroom"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[#111111]/60" />
      
      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <div className="space-y-6">
            <Heading
              level={2}
              className="text-3xl sm:text-4xl text-white"
            >
              Customized Training for Enterprise & Public Sector.
            </Heading>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Beyond individual diplomas, Arena Web Security delivers tailored technical training
              curricula for corporate development teams, financial security operations centers, and
              government defense organizations.
            </p>
            <div className="pt-4">
              <Button href="/corporate" variant="accent" size="lg" className="group">
                <span>Request Institutional Training</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="bg-[#1C1C1E] p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl">
            
            <h3 className="font-serif text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
              Specialized Curricula
            </h3>
            
            <ul className="space-y-4 text-base text-slate-300">
              {tracks.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4FA1FF] shrink-0" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </Section>
  );
}
