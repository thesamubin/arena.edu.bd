import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { InstituteIntroSection } from "@/components/home/InstituteIntroSection";
import { AcademicPathwaysSection } from "@/components/home/AcademicPathwaysSection";
import { DiplomaSpotlightSection } from "@/components/home/DiplomaSpotlightSection";
import { OnlineLearningSection } from "@/components/home/OnlineLearningSection";
import { FacultySection } from "@/components/home/FacultySection";
import { CorporateGovSection } from "@/components/home/CorporateGovSection";
import { StudentOutcomesSection } from "@/components/home/StudentOutcomesSection";
import { InstitutionalExperienceSection } from "@/components/home/InstitutionalExperienceSection";
import { EducationalResourcesSection } from "@/components/home/EducationalResourcesSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export const metadata: Metadata = {
  title: "Arena Web Security Institute of Technology — Applied Cybersecurity Institute (arenawebsecurity.edu.bd)",
  description:
    "Official academic portal of Arena Web Security Institute of Technology (arenawebsecurity.edu.bd). Professional Diploma in Cyber Security, hands-on virtual laboratories, offensive security (VAPT), OSINT, and corporate/government defense training.",
  alternates: {
    canonical: "https://www.arenawebsecurity.edu.bd",
  },
  openGraph: {
    title: "Arena Web Security Institute of Technology — Applied Cybersecurity Institute",
    description:
      "Structured cybersecurity education, hands-on practical laboratories, and verifiable credentials on arenawebsecurity.edu.bd. Founded 2012 in Dhaka, Bangladesh.",
    url: "https://www.arenawebsecurity.edu.bd",
    siteName: "Arena Web Security Institute of Technology",
    locale: "en_US",
    type: "website",
  },
};

/**
 * Phase 3B Production Homepage - Full Coverage Restored
 *
 * Section order:
 * 1. Optional announcement bar (rendered in layout.tsx above header)
 * 2. Main navigation (rendered in layout.tsx)
 * 3. Institutional hero (HeroSection)
 * 4. Institute introduction (InstituteIntroSection)
 * 5. Academic pathways (AcademicPathwaysSection)
 * 6. Professional Diploma spotlight (DiplomaSpotlightSection)
 * 7. Online learning and practical lab experience (OnlineLearningSection)
 * 8. Faculty and expertise (FacultySection)
 * 9. Corporate and government training (CorporateGovSection)
 * 10. Student projects and verified outcomes (StudentOutcomesSection)
 * 11. Partners and institutional experience (InstitutionalExperienceSection)
 * 12. Educational resources (EducationalResourcesSection)
 * 13. Final CTA (FinalCTASection)
 * 14. Footer (rendered in layout.tsx)
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <InstituteIntroSection />
      <AcademicPathwaysSection />
      <DiplomaSpotlightSection />
      <OnlineLearningSection />
      <FacultySection />
      <CorporateGovSection />
      <StudentOutcomesSection />
      <InstitutionalExperienceSection />
      <EducationalResourcesSection />
      <FinalCTASection />
    </>
  );
}
