"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileDrawer } from "./MobileDrawer";
import { VERIFICATION_PORTAL_URL } from "@/lib/contact";

const navigationItems = [
  {
    label: "Academics",
    href: "/academics",
    subItems: [
      { label: "Diploma in Cyber Security", href: "/academics/diploma-cyber-security" },
      { label: "Short Courses", href: "/academics/courses" },
      { label: "Certifications", href: "/academics/certifications" },
      { label: "Admissions", href: "/academics/admissions" },
    ]
  },
  {
    label: "Training",
    href: "/training",
    subItems: [
      { label: "Corporate Training", href: "/training/corporate" },
      { label: "Government & Defense", href: "/training/government" },
      { label: "Request Inquiry", href: "/training/request" },
    ]
  },
  {
    label: "Community",
    href: "/students",
    subItems: [
      { label: "Our Students", href: "/students" },
      { label: "Student Work", href: "/student-work" },
    ]
  },
  {
    label: "Institution",
    href: "/about",
    subItems: [
      { label: "About Profile", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Faculty", href: "/faculty" },
      { label: "Partners", href: "/partners" },
    ]
  },
  { label: "Contact", href: "/contact" },
];

export function InstitutionalHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-academic-grey-border">
        <Container size="xl" className="flex items-center justify-between h-20">
          {/* Institutional Crest / Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm bg-academic-navy text-academic-warm flex items-center justify-center font-serif font-bold text-lg sm:text-xl shadow-academic border border-academic-navy-light/30 transition-transform group-hover:scale-[1.02] shrink-0">
              A
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif font-bold text-base sm:text-xl text-academic-navy tracking-tight leading-tight group-hover:text-academic-blue transition-colors truncate">
                Arena Web Security
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-wide sm:tracking-wider text-academic-blue uppercase leading-none mt-0.5 truncate">
                <span className="sm:hidden">Institute · .edu.bd</span>
                <span className="hidden sm:inline">Applied Cybersecurity Institute · .edu.bd</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 font-sans text-sm font-medium">
            {navigationItems.map((item, idx) => (
              <div 
                key={item.label} 
                className="relative"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-sm text-academic-ink-primary hover:text-academic-blue hover:bg-academic-grey/60 transition-colors inline-block"
                >
                  {item.label}
                </Link>
                {item.subItems && (
                  <div 
                    className={`absolute top-full left-0 mt-0 w-56 bg-white border border-academic-grey-border rounded-sm shadow-lg transition-all duration-200 z-50 ${
                      hoveredIndex === idx ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                    }`}
                  >
                    <div className="py-2">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-academic-ink-secondary hover:text-academic-blue hover:bg-academic-grey transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions & Verification */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={VERIFICATION_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-academic-blue hover:text-academic-blue-dark transition-colors"
              title="Verify Student Credentials Online"
            >
              <ShieldCheck className="w-4 h-4 text-academic-blue" />
              <span>Verify</span>
            </a>

            <Button href="/contact" variant="primary" size="sm">
              Admissions
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Admissions
            </Button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-sm text-academic-navy hover:bg-academic-grey transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-academic-navy"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Accessible Mobile Drawer Component */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
