import { VERIFIED_FACULTY, INSTITUTIONAL_ENGAGEMENTS } from "./homeContent";

export const ABOUT_CONTENT = {
  mission: "TODO: Define the official mission statement of Arena Web Security.",
  history: "TODO: Outline the verified history of the institute since 2012.",
  vision: "TODO: Define the vision for future academic and professional cybersecurity growth.",
};

export const LEADERSHIP_CONTENT = {
  overview: "TODO: Provide an overview of the leadership structure and governance of the institute.",
  members: [
    {
      name: "Tanjim Al Fahim",
      role: "CEO & Founder",
      bio: "Pioneer in technical cybersecurity training in Bangladesh since 2012. Conducted corporate assessments and specialized defense training across government and enterprise sectors.",
    },
    // TODO: Add other leadership members if verified
  ],
};

// Extend faculty data for the dedicated page to include qualifications & teaching responsibilities
export const FACULTY_PAGE_CONTENT = {
  intro: "Our instructional team comprises active practitioners and researchers who bridge the gap between academic theory and offensive security realities.",
  members: VERIFIED_FACULTY.map(f => ({
    ...f,
    qualifications: "TODO: List verified academic and professional qualifications.",
    teachingResponsibilities: "TODO: Define specific courses or modules this faculty member teaches.",
  })),
};

export const STUDENT_CONTENT = {
  demographics: "TODO: Verified student demographics and professional backgrounds.",
  outcomes: "TODO: Graduate employment rates, verified placements, or success metrics.",
  workExamples: [
    {
      title: "TODO: Example Student Project 1",
      description: "TODO: Description of the student project, research, or vulnerability disclosure.",
      author: "TODO: Student Name",
    }
  ]
};

export const PARTNERS_CONTENT = {
  intro: "Arena Web Security maintains strict distinctions between formal academic partnerships, training recipients, and vendor relationships.",
  // Grouping the engagements from homeContent
  academicPartners: INSTITUTIONAL_ENGAGEMENTS.filter(e => e.category === "Academic Collaboration"),
  trainingRecipients: INSTITUTIONAL_ENGAGEMENTS.filter(e => e.category === "Government / Defense" || e.category === "Public Institution"),
  vendors: [
    // TODO: Add verified technology or certification vendor partners (e.g. CompTIA, EC-Council) if applicable
  ],
  clients: [
    // TODO: Add verified corporate consulting clients
  ]
};
