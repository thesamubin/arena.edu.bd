"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, Shield, ExternalLink, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_PRIMARY,
  CONTACT_ADDRESS,
  VERIFICATION_PORTAL_URL,
} from "@/lib/contact";

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const navSections = [
  {
    title: "Academics",
    links: [
      { label: "Academic Programs", href: "/academics" },
      { label: "Diploma in Cyber Security", href: "/academics/diploma-cyber-security" },
      { label: "Short Courses", href: "/academics/courses" },
      { label: "Certifications", href: "/academics/certifications" },
    ]
  },
  {
    title: "Institutional Training",
    links: [
      { label: "Corporate Training", href: "/training/corporate" },
      { label: "Government & Defense", href: "/training/government" },
      { label: "Request Inquiry", href: "/training/request" },
    ]
  },
  {
    title: "Institution & Community",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Faculty Registry", href: "/faculty" },
      { label: "Student Work", href: "/student-work" },
      { label: "Partners & Engagements", href: "/partners" },
      { label: "Contact", href: "/contact" },
    ]
  }
];

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  // Close on escape key and lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
      className="fixed inset-0 z-50 lg:hidden"
    >
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-academic-navy-deep/70 backdrop-blur-sm transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer slide-out panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-academic-warm shadow-2xl flex flex-col z-10 border-l border-academic-grey-border">
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-academic-grey-border bg-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm bg-academic-navy text-academic-warm flex items-center justify-center font-serif font-bold text-base shadow-sm">
              A
            </div>
            <div>
              <span className="font-serif font-bold text-sm tracking-tight text-academic-navy block leading-none">
                Arena Web Security Institute of Technology
              </span>
              <span className="text-[10px] uppercase tracking-wider text-academic-blue font-sans font-medium block mt-0.5">
                arenawebsecurity.edu.bd
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-sm text-academic-ink-muted hover:text-academic-navy hover:bg-academic-grey transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-academic-navy"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-6 font-sans">
          
          {navSections.map((section, idx) => (
            <div key={idx} className="space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-academic-ink-muted mb-2 px-3">
                {section.title}
              </p>
              {section.links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-3 py-2.5 rounded-sm text-sm font-medium text-academic-navy hover:bg-academic-grey hover:text-academic-blue transition-colors"
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          ))}

          <div className="pt-4 border-t border-academic-grey-border mt-4">
            <a
              href={VERIFICATION_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center justify-between px-3 py-2.5 rounded-sm text-sm font-medium text-academic-blue hover:bg-academic-blue/10 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Verify Student Certificate</span>
              </span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          {/* Quick Contact Info */}
          <div className="pt-6 border-t border-academic-grey-border mt-6 text-xs text-academic-ink-secondary space-y-2.5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-academic-ink-muted px-1">
              Campus Dispatch
            </p>
            <div className="flex items-start gap-2 text-academic-ink-secondary">
              <MapPin className="w-3.5 h-3.5 text-academic-blue flex-shrink-0 mt-0.5" />
              <span>{CONTACT_ADDRESS.short}</span>
            </div>
            <div className="flex items-center gap-2 text-academic-ink-secondary">
              <Phone className="w-3.5 h-3.5 text-academic-blue flex-shrink-0" />
              <a href={`tel:${CONTACT_PHONE_PRIMARY.replace(/\s/g, "")}`} className="hover:text-academic-navy">
                {CONTACT_PHONE_PRIMARY}
              </a>
            </div>
            <div className="flex items-center gap-2 text-academic-ink-secondary">
              <Mail className="w-3.5 h-3.5 text-academic-blue flex-shrink-0" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-academic-navy">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </nav>

        {/* Drawer Action Footer */}
        <div className="p-6 border-t border-academic-grey-border bg-white">
          <Button
            href="/contact"
            variant="primary"
            size="md"
            className="w-full text-center"
            onClick={onClose}
          >
            Admissions Inquiry
          </Button>
        </div>
      </div>
    </div>
  );
}
