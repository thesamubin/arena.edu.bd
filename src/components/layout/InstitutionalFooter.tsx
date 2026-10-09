import React from "react";
import Link from "next/link";
import { ShieldCheck, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_PRIMARY,
  CONTACT_PHONE_SECONDARY,
  CONTACT_ADDRESS,
  INSTITUTION_NAME,
  INSTITUTION_DOMAIN,
  VERIFICATION_PORTAL_URL,
} from "@/lib/contact";

export function InstitutionalFooter() {
  return (
    <footer className="bg-academic-navy text-slate-300 font-sans border-t border-academic-navy-light/40">
      {/* Main Academic Footer Columns */}
      <div className="py-14 sm:py-16">
        <Container size="xl" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Identity & Campus Coordinates */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-white text-academic-navy flex items-center justify-center font-serif font-bold text-lg shadow-sm">
                A
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-white block leading-tight">
                  Arena Web Security
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium block">
                  arena.edu.bd
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Applied cybersecurity institute established in 2012. Dedicated to practical digital defense, vulnerability research, and workforce development.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-white/10">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-academic-blue flex-shrink-0 mt-0.5" />
                <span>{CONTACT_ADDRESS.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-academic-blue flex-shrink-0" />
                <span>{CONTACT_PHONE_PRIMARY}, {CONTACT_PHONE_SECONDARY}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-academic-blue flex-shrink-0" />
                <span>{CONTACT_EMAIL}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Academic Programs */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-white text-base tracking-tight">
              Academic Programs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/academics/diploma-cyber-security"
                  className="hover:text-white hover:underline underline-offset-2 transition-colors"
                >
                  Professional Diploma in Cyber Security (1 Year)
                </Link>
              </li>
              <li>
                <Link
                  href="/academics/cehf-ethical-hacking"
                  className="hover:text-white hover:underline underline-offset-2 transition-colors"
                >
                  Certified Ethical Hacking & Defense (CEHF)
                </Link>
              </li>
              <li>
                <Link
                  href="/academics/cosint-intelligence"
                  className="hover:text-white hover:underline underline-offset-2 transition-colors"
                >
                  Certified Open Source Intelligence (C|OSINT)
                </Link>
              </li>
              <li>
                <Link
                  href="/academics/linux-security"
                  className="hover:text-white hover:underline underline-offset-2 transition-colors"
                >
                  Penetration Testing with Kali Linux (KLIN)
                </Link>
              </li>
              <li>
                <Link
                  href="/academics/python-security"
                  className="hover:text-white hover:underline underline-offset-2 transition-colors"
                >
                  Security Scripting & Automation with Python
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-academic-blue-light hover:text-white font-medium inline-flex items-center gap-1 pt-1"
                >
                  View All Curriculum Tracks →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutional Solutions & Governance */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-white text-base tracking-tight">
              Institutional Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/corporate"
                  className="hover:text-white hover:underline underline-offset-2 transition-colors"
                >
                  Corporate & Financial Sector Upskilling
                </Link>
              </li>
              <li>
                <Link
                  href="/government"
                  className="hover:text-white hover:underline underline-offset-2 transition-colors"
                >
                  Government & Public Sector Training
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white hover:underline underline-offset-2 transition-colors"
                >
                  Vulnerability Assessment & Penetration Testing (VAPT)
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="hover:text-white hover:underline underline-offset-2 transition-colors"
                >
                  Security Advisories & Research Bulletins
                </Link>
              </li>
              <li>
                <Link
                  href="/faculty"
                  className="hover:text-white hover:underline underline-offset-2 transition-colors"
                >
                  Faculty & Academic Advisory Registry
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white hover:underline underline-offset-2 transition-colors"
                >
                  Institutional Profile & Ethics Charter
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verification & Institutional Disclosure */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-white text-base tracking-tight">
              Institutional Credential
            </h4>

            {/* Direct Verification Badge */}
            <div className="p-3 bg-academic-navy-deep rounded-sm border border-academic-navy-light/60 text-xs space-y-2">
              <div className="flex items-center gap-1.5 font-medium text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Certificate Verification</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                Authorized employers and academic institutions can verify issued credentials directly through our digital registry.
              </p>
              <a
                href={VERIFICATION_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-academic-blue-light hover:text-white font-medium"
              >
                <span>Launch Verification Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Statutory Transparency Statement */}
            <div className="text-[11px] text-slate-400 leading-normal pt-1">
              <span className="font-semibold text-slate-300">Statutory Disclosure: </span>
              Arena Web Security operates on the official <code className="text-slate-300 font-mono">.edu.bd</code> domain as an applied technical training institute providing vocational certifications and laboratory-based defense programs. It does not award university degrees.
              <span className="block text-[10px] text-slate-500 mt-1 italic">
                {/* TODO: [Statutory Council Citation Confirmation] */}
                Official institute registration active since 2012.
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="py-5 bg-academic-navy-deep border-t border-academic-navy-light/30 text-xs">
        <Container size="xl" className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400">
          <p className="text-[11px] text-center sm:text-left">
            © {new Date().getFullYear()} {INSTITUTION_NAME}. All rights reserved. Official portal on{" "}
            <span className="text-slate-200 font-mono">{INSTITUTION_DOMAIN}</span>.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/legal/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/legal/terms" className="hover:text-white transition-colors">
              Enrollment Terms
            </Link>
            <span>•</span>
            <Link href="/legal/accreditation-disclosure" className="hover:text-white transition-colors">
              Institutional Status
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
