import { VERIFIED_FACULTY } from "./homeContent";

export const DIPLOMA_CONTENT = {
  overview: "Comprehensive year-long curriculum encompassing foundational systems, advanced vulnerability assessment, ethical hacking, digital forensics, and defensive perimeter engineering.",
  intendedLearners: "Designed for IT professionals, recent graduates, and career transitioners seeking to master offensive security methodology and defensive engineering through hands-on practical application.",
  outcomes: [
    "Execute comprehensive vulnerability assessments and penetration tests.",
    "Design and implement secure network architectures.",
    "Conduct digital forensics and incident response procedures.",
  ],
  duration: "1 Year · 52 Weeks",
  mode: "Hybrid (Online Live + Practical Labs)",
  semesters: [
    {
      name: "Semester 1",
      description: "Foundational Systems & Networks",
      modules: ["Linux Administration", "Network Protocols & Security"],
    },
    {
      name: "Semester 2",
      description: "Offensive Security & VAPT",
      modules: ["Web Application Pentesting", "Infrastructure Assessment"],
    },
    {
      name: "Semester 3",
      description: "Advanced Engineering",
      modules: ["Python Security Automation", "Digital Forensics"],
    },
    {
      name: "Semester 4",
      description: "Practical Application & Capstone",
      modules: ["Capstone Project", "Live Target Assessment"],
    },
  ],
  curriculumAndModules: "The curriculum bridges academic pedagogy with intensive hands-on laboratory practicums.",
  assessment: "Assessment is based on practical lab deliverables, comprehensive audit reports, and a final capstone engagement.",
  certification: "Graduates are awarded a Professional Diploma in Cyber Security, verifiable via our cryptographic credential portal.",
  faculty: VERIFIED_FACULTY,
  tuition: "Please contact the admissions desk for current tuition rates, scholarship opportunities, and flexible payment plans.",
  applicationInfo: "Prerequisites include basic IT knowledge. Admissions are currently open for the upcoming intake.",
  faqs: [
    {
      question: "Is this program delivered fully online?",
      answer: "The program is delivered in a hybrid format, featuring online live sessions and remote access to our practical lab environments.",
    },
  ],
};
