import React from "react";
import { ShieldCheck, BookOpen, Building2, Award, Terminal, ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { AcademicLink } from "@/components/ui/AcademicLink";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export default function Phase2DesignSystemPage() {
  return (
    <div>
      {/* Pattern 1: Academic Page Header / Hero Shell */}
      <Section background="warm" spacing="md" className="border-b border-academic-grey-border">
        <Container size="xl">
          <Breadcrumbs
            items={[
              { label: "Design System & Architecture", href: "/" },
              { label: "Phase 2 Specification" },
            ]}
            className="mb-4"
          />

          <div className="max-w-3xl space-y-4">
            <Badge variant="blue" size="md">
              PHASE 2 FOUNDATIONAL ARCHITECTURE
            </Badge>

            <Heading level={1}>
              Design System & Shared Component Architecture
            </Heading>

            <p className="text-base sm:text-lg text-academic-ink-secondary leading-relaxed font-sans">
              Foundational tokens, typography scale, responsive navigation, and reusable UI primitives engineered for an online-first academic cybersecurity institute.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button href="#tokens" variant="primary" size="md">
                View Design Tokens
              </Button>
              <Button href="#layout-patterns" variant="secondary" size="md">
                Layout Patterns
              </Button>
              <Button
                href="https://admission.arenawebsecurity.net/"
                external
                variant="ghost"
                size="md"
              >
                <span>Verification Portal</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pattern 2: Multi-Column Responsive Grid (Design Tokens Specification) */}
      <Section id="tokens" background="white" spacing="lg">
        <Container size="xl">
          <div className="max-w-2xl mb-10">
            <Heading level={2}>
              Institutional Design System Tokens
            </Heading>
            <p className="text-sm text-academic-ink-secondary mt-2">
              Color tokens derived from the editorial academic direction: Deep Navy (#142B45), Warm White (#FAFAF7), Light Grey (#F1F3F5), and Muted Oxford Blue (#4778A8).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Token Card 1 */}
            <Card variant="white" className="border-t-4 border-t-academic-navy">
              <CardHeader>
                <div className="flex items-center justify-between mb-1">
                  <Badge variant="navy" size="sm">Primary</Badge>
                  <span className="font-mono text-xs text-academic-ink-muted">#142B45</span>
                </div>
                <CardTitle>Deep Navy</CardTitle>
                <CardDescription>
                  Anchors authority, navigation header, and footer. Communicates mature academic gravity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-12 rounded-sm bg-academic-navy flex items-center justify-center text-xs text-academic-warm font-mono font-medium">
                  bg-academic-navy
                </div>
              </CardContent>
            </Card>

            {/* Token Card 2 */}
            <Card variant="white" className="border-t-4 border-t-academic-warm-dark">
              <CardHeader>
                <div className="flex items-center justify-between mb-1">
                  <Badge variant="outline" size="sm">Canvas</Badge>
                  <span className="font-mono text-xs text-academic-ink-muted">#FAFAF7</span>
                </div>
                <CardTitle>Warm White</CardTitle>
                <CardDescription>
                  Editorial warm background replacing cold digital glare. High-contrast readability.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-12 rounded-sm bg-academic-warm border border-academic-grey-border flex items-center justify-center text-xs text-academic-ink-primary font-mono font-medium">
                  bg-academic-warm
                </div>
              </CardContent>
            </Card>

            {/* Token Card 3 */}
            <Card variant="white" className="border-t-4 border-t-academic-grey-dark">
              <CardHeader>
                <div className="flex items-center justify-between mb-1">
                  <Badge variant="muted" size="sm">Panel</Badge>
                  <span className="font-mono text-xs text-academic-ink-muted">#F1F3F5</span>
                </div>
                <CardTitle>Light Grey</CardTitle>
                <CardDescription>
                  Secondary structural panels, syllabus accordions, and background alternation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-12 rounded-sm bg-academic-grey border border-academic-grey-border flex items-center justify-center text-xs text-academic-ink-primary font-mono font-medium">
                  bg-academic-grey
                </div>
              </CardContent>
            </Card>

            {/* Token Card 4 */}
            <Card variant="white" className="border-t-4 border-t-academic-blue">
              <CardHeader>
                <div className="flex items-center justify-between mb-1">
                  <Badge variant="blue" size="sm">Accent</Badge>
                  <span className="font-mono text-xs text-academic-ink-muted">#4778A8</span>
                </div>
                <CardTitle>Muted Oxford Blue</CardTitle>
                <CardDescription>
                  Subtle link highlights, badge indicators, active borders, and focus rings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-12 rounded-sm bg-academic-blue flex items-center justify-center text-xs text-white font-mono font-medium">
                  bg-academic-blue
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Pattern 3: Two-Column Reading Pane with Sidebar Pattern */}
      <Section id="layout-patterns" background="grey" spacing="lg">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Primary Content Column */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-md border border-academic-grey-border shadow-academic space-y-6">
                <Heading level={2}>
                  Two-Column Reading & Specification Layout
                </Heading>

                <p className="text-academic-ink-primary leading-relaxed text-sm sm:text-base">
                  Designed for curriculum overviews, syllabus modules, research bulletins, and institutional statements. Restrained typography ensures sustained reading comprehension without commercial distraction.
                </p>

                {/* Sub-component Demonstration: Buttons */}
                <div className="pt-4 border-t border-academic-grey-border/60">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-academic-ink-muted mb-3">
                    Button Variants & Accessible Focus Targets
                  </h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button variant="primary" size="sm">Primary Navy</Button>
                    <Button variant="secondary" size="sm">Secondary Outline</Button>
                    <Button variant="accent" size="sm">Accent Blue</Button>
                    <Button variant="ghost" size="sm">Ghost Action</Button>
                  </div>
                </div>

                {/* Sub-component Demonstration: Badge Tokens */}
                <div className="pt-4 border-t border-academic-grey-border/60">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-academic-ink-muted mb-3">
                    Academic Status & Course Code Badges
                  </h4>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="navy">SEC-501</Badge>
                    <Badge variant="blue">1-Year Diploma</Badge>
                    <Badge variant="outline">Hybrid Delivery</Badge>
                    <Badge variant="muted">267 Modules</Badge>
                    <Badge variant="success">Admissions Open</Badge>
                    <Badge variant="warning">Upcoming Intake</Badge>
                  </div>
                </div>

                {/* Typographic Scale Demonstration */}
                <div className="pt-4 border-t border-academic-grey-border/60 space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-academic-ink-muted">
                    Academic Typography Pairing
                  </h4>
                  <p className="font-serif text-xl sm:text-2xl font-bold text-academic-navy">
                    Playfair Display / Newsreader Heading Scale
                  </p>
                  <p className="font-sans text-sm text-academic-ink-secondary">
                    Plus Jakarta Sans body copy optimized for crisp technical reading on mobile and high-DPI desktop screens.
                  </p>
                  <p className="font-mono text-xs text-academic-blue bg-academic-grey p-2.5 rounded-sm border border-academic-grey-border">
                    AWCP-CERT-2026-DCS :: Applied Digital Forensics & VAPT Lab Protocol
                  </p>
                </div>
              </div>

              {/* Component Pattern: Content Integrity Disclosure Card */}
              <div className="bg-academic-navy text-academic-warm p-6 sm:p-8 rounded-md shadow-academic-md space-y-4">
                <div className="flex items-center gap-2 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-xs uppercase font-semibold tracking-wider font-sans">
                    Academic Integrity Guarantee
                  </span>
                </div>
                <Heading level={3} as="h3" className="text-white">
                  Content Governance & Institutional Transparency
                </Heading>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  All institutional claims on <span className="font-mono text-slate-100">arenawebsecurity.edu.bd</span> reflect confirmed history since 2012. We deliberately omit fabricated UGC university degrees, fake student dollar counters, and synthetic testimonials.
                </p>
                <div className="pt-2 text-xs text-slate-400 italic">
                  Note: Any pending certifications or accreditation citations are strictly tracked as TODO items prior to final publishing.
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Sidebar Card 1: Reusable Quick Info Card */}
              <Card variant="white">
                <CardHeader>
                  <div className="w-10 h-10 rounded-sm bg-academic-navy text-white flex items-center justify-center mb-2">
                    <Award className="w-5 h-5 text-academic-blue-light" />
                  </div>
                  <CardTitle>Program Profile Card</CardTitle>
                  <CardDescription>
                    Example sidebar component for duration, delivery format, and credentialing.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-academic-grey-border">
                    <span className="text-academic-ink-muted">Duration</span>
                    <span className="font-semibold text-academic-navy">1 Year (52 Weeks)</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-academic-grey-border">
                    <span className="text-academic-ink-muted">Delivery</span>
                    <span className="font-semibold text-academic-navy">Hybrid (Online + Lab)</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-academic-grey-border">
                    <span className="text-academic-ink-muted">Modules</span>
                    <span className="font-semibold text-academic-navy">267 Hands-on Labs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-academic-ink-muted">Official Portal</span>
                    <span className="font-mono text-academic-blue font-medium">arenawebsecurity.edu.bd</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button href="/contact" variant="primary" size="sm" className="w-full">
                    Admissions Desk
                  </Button>
                </CardFooter>
              </Card>

              {/* Sidebar Card 2: Campus Dispatch Card */}
              <Card variant="warm">
                <CardHeader>
                  <CardTitle>Physical Campus Dispatch</CardTitle>
                  <CardDescription>
                    Registered headquarters in Dhaka, Bangladesh.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-xs text-academic-ink-secondary">
                  <p className="font-medium text-academic-navy">
                    Arena Web Security (Est. 2012)
                  </p>
                  <p>House No: 1, Block: B, Banasree Main Road, Rampura, Dhaka - 1219</p>
                  <p className="pt-2">Hotline: +880 1310 333 444</p>
                  <p>Inquiries: info@arenawebsecurity.net</p>
                </CardContent>
                <CardFooter>
                  <AcademicLink href="/contact" variant="standalone" showExternalIcon>
                    View Campus Directions
                  </AcademicLink>
                </CardFooter>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
