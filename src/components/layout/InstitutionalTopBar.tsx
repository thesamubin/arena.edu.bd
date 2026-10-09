import React from "react";
import { ShieldCheck, Phone, Mail, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_PRIMARY,
  VERIFICATION_PORTAL_URL,
} from "@/lib/contact";

export function InstitutionalTopBar() {
  return (
    <div className="bg-academic-navy-deep text-academic-grey-dark text-xs font-sans border-b border-academic-navy-light/40 py-1.5 hidden md:block">
      <Container size="xl" className="flex items-center justify-between">
        {/* Official Domain & Institutional Verification Statement */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Official Portal: arena.edu.bd
          </span>
          <span className="text-academic-navy-light">•</span>
          <span className="text-slate-300">
            Applied Cybersecurity Institute · Established 2012
          </span>
        </div>

        {/* Quick Contacts & Online Verification Desk */}
        <div className="flex items-center gap-5">
          <a
            href={`tel:${CONTACT_PHONE_PRIMARY.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-academic-blue" />
            <span>{CONTACT_PHONE_PRIMARY}</span>
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3 h-3 text-academic-blue" />
            <span>{CONTACT_EMAIL}</span>
          </a>

          <a
            href={VERIFICATION_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-slate-200 hover:text-white font-medium transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-academic-blue" />
            <span>Verify Certificate</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
          </a>
        </div>
      </Container>
    </div>
  );
}
