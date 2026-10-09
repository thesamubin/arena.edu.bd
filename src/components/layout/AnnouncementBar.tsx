import React from "react";
import Link from "next/link";
import { ArrowRight, BellRing } from "lucide-react";
import { Container } from "@/components/ui/Container";

/**
 * Section 1: Optional Institutional Announcement Bar
 *
 * Sits directly above main navigation. Displays timely academic admissions,
 * intake notices, or statutory institutional updates.
 */
export function AnnouncementBar() {
  return (
    <aside
      aria-label="Institutional Announcement"
      className="bg-academic-navy-deep text-academic-grey-light border-b border-white/10 text-xs font-sans py-2"
    >
      <Container size="xl" className="flex items-center justify-between gap-3 overflow-hidden">
        <div className="flex items-center gap-2 min-w-0">
          <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-sm bg-academic-blue/20 text-academic-blue-light border border-academic-blue/30 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase shrink-0">
            <BellRing className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            <span>2026 Intake</span>
          </span>
          <p className="truncate text-slate-300 text-xs">
            <span className="hidden sm:inline font-medium text-white">
              Admissions Open:
            </span>{" "}
            1-Year Professional Diploma in Cyber Security
          </p>
        </div>

        <Link
          href="/academics"
          className="inline-flex items-center gap-1 font-semibold text-white hover:text-academic-blue-light transition-colors shrink-0 group text-xs whitespace-nowrap"
        >
          <span className="hidden sm:inline">Explore Programs</span>
          <span className="sm:hidden">Explore</span>
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </Container>
    </aside>
  );
}
