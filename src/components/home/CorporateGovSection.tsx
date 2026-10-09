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
    "Secure Software Development Lifecycle (SSDLC) & Code Review",
    "Web API Vulnerability Assessment for Banking & Fintech",
    "Employee Social Engineering & Phishing Simulation Drills",
    "Red vs Blue Team Table-Top Incident Response",
    "Critical Information Infrastructure Protection (CIIP)",
    "Digital Evidence Handling & Cyber Forensics",
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
              <Button href="/corporate" variant="accent" size="lg">
                <span>Request Institutional Training</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>

          <div className="bg-[#1C1C1E] p-8 rounded-xl border border-white/5 shadow-2xl">
            <div className="flex items-center gap-4 mb-6 text-[#4FA1FF]">
              <Building2 className="w-6 h-6" />
              <Landmark className="w-6 h-6" />
            </div>
            
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-4">
              Specialized Curricula
            </h3>
            
            <ul className="space-y-3 text-sm sm:text-base text-slate-300">
              {tracks.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4FA1FF] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </Section>
  );
}
