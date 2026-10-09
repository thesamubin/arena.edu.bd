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
      {/* Subtle abstract background image - new dark premium image */}
      <div className="absolute inset-0 pointer-events-none opacity-100">
        <Image
          src="/images/hero-bg-institute.jpg"
          alt="Abstract architectural mesh background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      
      {/* Base dark overlay */}
      <div className="absolute inset-0 pointer-events-none bg-black/50" />
      
      {/* Radial gradient to specifically darken the center behind the text */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/70 via-black/20 to-transparent" />
      
      {/* Fade out gradient at the bottom so it blends with the next section */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-academic-navy/20 to-white" />

      <Container size="xl" className="relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 py-10 sm:py-16">
          
          <div className="flex flex-wrap items-center justify-center gap-2 animate-[fade-in-up_0.8s_ease-out]">
            <Badge variant="navy" size="md" className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl text-white">
              Applied Cybersecurity Institute
            </Badge>
            <span className="text-xs font-mono text-white/70 hidden sm:inline drop-shadow-md">
              Est. {INSTITUTION_FOUNDED} · Dhaka
            </span>
          </div>

          <div className="space-y-7 drop-shadow-2xl animate-[fade-in-up_1s_ease-out_0.2s_both]">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-white leading-[1.15] [text-shadow:_0_2px_15px_rgb(0_0_0_/_60%)]">
              Structured Cybersecurity Education Engineered for Practical Defense.
            </h1>
            <p className="font-sans text-base sm:text-lg md:text-xl text-white/90 leading-[1.7] max-w-3xl mx-auto font-medium [text-shadow:_0_2px_10px_rgb(0_0_0_/_60%)]">
              {INSTITUTION_NAME} delivers university-level rigor in applied offensive security,
              vulnerability assessment, and defensive engineering. We bridge academic pedagogy 
              with intensive hands-on laboratory practicums.
            </p>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6 animate-[fade-in-up_1s_ease-out_0.4s_both]">
            <Button 
              href="/academics" 
              variant="outline-light"
              className="group bg-white text-academic-navy hover:bg-white/90 hover:text-academic-navy border-transparent shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300"
              size="lg"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              href="/academics/diploma-cyber-security"
              variant="outline-light"
              className="hover:bg-white/10 transition-all duration-300"
              size="lg"
            >
              <span>Explore the Diploma</span>
            </Button>
          </div>
          {/* Scroll Indicator */}
          <div className="mt-12 flex justify-center animate-[bounce_2s_infinite_1s] hidden sm:flex text-white/40">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        </div>

        <AnimatedMetrics />

      </Container>
    </Section>
  );
}

