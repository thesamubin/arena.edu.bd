import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, ShieldCheck, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_PRIMARY,
  CONTACT_PHONE_SECONDARY,
  CONTACT_ADDRESS,
  VERIFICATION_PORTAL_URL,
  INSTITUTION_NAME,
  INSTITUTION_DOMAIN,
} from "@/lib/contact";

/**
 * Section 13: Final Institutional Call to Action
 *
 * Provides clear pathways to enroll, explore diplomas, and submit corporate
 * or government training inquiries, backed by official contact channels.
 */
export function FinalCTASection() {
  return (
    <Section background="navy" spacing="xl" className="py-24 sm:py-32 relative overflow-hidden border-t border-academic-navy-light/40">
      {/* Dynamic Background Effects */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#FAFAF7_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#4FA1FF]/10 blur-[120px] rounded-[100%] pointer-events-none" />

      <Container size="md" className="relative z-10">
        <div className="text-center space-y-8">

          <div className="space-y-6">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.15]">
              Advance Your Cybersecurity Capability with Academic Rigor.
            </h2>
            <p className="text-slate-300 font-sans text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Whether preparing for specialized security certifications, enrolling in our flagship
              one-year diploma, or commissioning institutional defense workshops, {INSTITUTION_NAME}{" "}
              provides structured, disciplined instruction.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
            <Button href="/academics" variant="accent" size="lg" className="w-full sm:w-auto group shadow-[0_0_40px_-10px_rgba(79,161,255,0.3)]">
              <span>Explore All Programs</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              href="/contact"
              variant="outline-light"
              size="lg"
              className="w-full sm:w-auto hover:bg-white/5"
            >
              <span>Contact Admissions</span>
            </Button>
          </div>

        </div>
      </Container>
    </Section>
  );
}
