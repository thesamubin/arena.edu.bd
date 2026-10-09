import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AnimatedMetrics } from "./AnimatedMetrics";
import {
  INSTITUTION_NAME,
  INSTITUTION_FOUNDED,
  INSTITUTION_DOMAIN,
} from "@/lib/contact";

/**
 * Section 3: Institutional Hero Section (Phase 3B Redesign)
 *
 * A calm, premium, center-aligned 1-column layout with strong typography
 * and ample whitespace. Removed the complex multi-tiered card.
 */
export function HeroSection() {
  return (
    <Section
      background="white"
      spacing="xl"
      className="relative overflow-hidden border-b border-academic-grey-border"
    >
      {/* Subtle abstract background image - darker and higher contrast */}
      <div className="absolute inset-0 pointer-events-none opacity-100 mix-blend-multiply contrast-[1.3] brightness-90">
        <Image
          src="/images/hero-bg.jpg"
          alt="Abstract architectural mesh background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-black/10" />
      {/* Fade out gradient at the bottom so it blends with the next section */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/50 to-white" />

      <Container size="xl" className="relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 py-10 sm:py-16">
          
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge variant="navy" size="md">
              Applied Cybersecurity Institute
            </Badge>
            <span className="text-xs font-mono text-academic-ink-muted hidden sm:inline">
              Est. {INSTITUTION_FOUNDED} · Dhaka
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-academic-navy tracking-tight leading-[1.1]">
              Structured Cybersecurity Education Engineered for Practical Defense.
            </h1>
            <p className="font-sans text-base sm:text-lg md:text-xl text-academic-ink-secondary leading-relaxed max-w-3xl mx-auto">
              {INSTITUTION_NAME} delivers university-level rigor in applied offensive security,
              vulnerability assessment, and defensive engineering. We bridge academic pedagogy 
              with intensive hands-on laboratory practicums.
            </p>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button href="/academics" variant="primary" size="lg">
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button
              href="/academics/diploma-cyber-security"
              variant="secondary"
              size="lg"
            >
              <span>Explore the Diploma</span>
            </Button>
          </div>

          {/* Tertiary Institutional Links */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm font-medium text-academic-ink-secondary">
            <Link
              href="/about"
              className="hover:text-academic-navy underline underline-offset-4 decoration-academic-grey-border hover:decoration-academic-navy transition-colors inline-flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-academic-blue" />
              <span>About the Institute</span>
            </Link>
            <span className="hidden sm:inline text-academic-grey-border" aria-hidden="true">
              •
            </span>
            <Link
              href="/training/corporate"
              className="hover:text-academic-navy underline underline-offset-4 decoration-academic-grey-border hover:decoration-academic-navy transition-colors inline-flex items-center gap-1.5"
            >
              <Building2 className="w-4 h-4 text-academic-blue" />
              <span>Corporate & Government Training</span>
            </Link>
          </div>
        </div>

        <AnimatedMetrics />

      </Container>
    </Section>
  );
}

