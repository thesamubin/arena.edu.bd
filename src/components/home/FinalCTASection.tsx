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
    <Section background="navy" spacing="xl" className="relative overflow-hidden border-t border-academic-navy-light/40">
      {/* Background radial dots */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#FAFAF7_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <Container size="xl" className="relative">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/10 text-slate-200 border border-white/15 text-xs font-mono">
            <span>Official Academic Portal</span>
            <span>·</span>
            <span className="text-emerald-400">{INSTITUTION_DOMAIN}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
            Advance Your Cybersecurity Capability with Academic Rigor.
          </h2>

          <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Whether preparing for specialized security certifications, enrolling in our flagship
            one-year diploma, or commissioning institutional defense workshops, {INSTITUTION_NAME}{" "}
            provides structured, disciplined instruction.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Button href="/academics" variant="accent" size="lg">
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>

            <Button
              href="/academics/diploma-cyber-security"
              variant="outline-light"
              size="lg"
            >
              <span>Explore the Diploma</span>
            </Button>

            <Button href="/contact" variant="ghost" size="lg" className="text-white hover:bg-white/10">
              <span>Contact Admissions</span>
            </Button>
          </div>

          {/* Institutional Contact Strip */}
          <div className="pt-10 mt-10 border-t border-white/15 grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-xs text-slate-300">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-academic-blue-light mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-white block font-sans">
                  Campus Admissions Desk
                </span>
                <span className="text-slate-400 leading-relaxed block mt-0.5">
                  {CONTACT_ADDRESS.full}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-academic-blue-light mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-white block font-sans">
                  Direct Telephone Lines
                </span>
                <div className="text-slate-400 space-y-0.5 mt-0.5">
                  <a
                    href={`tel:${CONTACT_PHONE_PRIMARY.replace(/\s/g, "")}`}
                    className="hover:text-white transition-colors block"
                  >
                    {CONTACT_PHONE_PRIMARY}
                  </a>
                  <a
                    href={`tel:${CONTACT_PHONE_SECONDARY.replace(/\s/g, "")}`}
                    className="hover:text-white transition-colors block"
                  >
                    {CONTACT_PHONE_SECONDARY}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-academic-blue-light mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-white block font-sans">
                  Credential Verification
                </span>
                <p className="text-slate-400 mt-0.5 leading-relaxed">
                  Verify authentic student certificates online.
                </p>
                <a
                  href={VERIFICATION_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-academic-blue-light hover:text-white font-medium mt-1 transition-colors"
                >
                  <span>Access Verification Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
