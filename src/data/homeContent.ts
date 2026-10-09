/**
 * Genuine institutional content for the Arena Web Security homepage.
 *
 * Rules:
 * - Only verified historical facts, genuine programs, and documented faculty.
 * - Zero fabricated student counts, fake corporate testimonials, or unsupported claims.
 * - Centralized for maintainability and type safety.
 */

export interface ProgramItem {
  id: string;
  code: string;
  title: string;
  level: string;
  duration: string;
  mode: string;
  description: string;
  topics: string[];
  slug: string;
  isFlagship?: boolean;
}

export const ACADEMIC_PROGRAMS: ProgramItem[] = [
  {
    id: "diploma-cyber-security",
    code: "DCS-101",
    title: "Professional Diploma in Cyber Security",
    level: "Flagship Professional Diploma",
    duration: "1 Year · 52 Weeks",
    mode: "Hybrid (Online Live + Practical Labs)",
    description:
      "Comprehensive year-long curriculum encompassing foundational systems, advanced vulnerability assessment, ethical hacking, digital forensics, and defensive perimeter engineering.",
    topics: [
      "Vulnerability Assessment & Pentesting (VAPT)",
      "Web Application Security & OWASP Top 10",
      "Network Infrastructure Defense",
      "Open Source Intelligence (OSINT)",
      "Digital Forensics & Incident Response",
    ],
    slug: "/academics/diploma-cyber-security",
    isFlagship: true,
  },
  {
    id: "cehf-ethical-hacking",
    code: "CEHF-201",
    title: "Certified Ethical Hacking & Defense",
    level: "Professional Certification",
    duration: "4 Months · Intensive",
    mode: "Online Interactive + Lab Pods",
    description:
      "Rigorous offensive security methodology focusing on reconnaissance, footprinting, system exploitation, privilege escalation, and enterprise defensive countermeasures.",
    topics: [
      "Footprinting & Active Reconnaissance",
      "Network Scanning & Enumeration",
      "System Exploitation & Post-Exploitation",
      "Wireless & Perimeter Security",
    ],
    slug: "/academics/cehf-ethical-hacking",
  },
  {
    id: "cosint-intelligence",
    code: "COSINT-301",
    title: "Certified Open Source Intelligence (C|OSINT)",
    level: "Specialized Intelligence Certification",
    duration: "2 Months",
    mode: "Online Interactive",
    description:
      "Advanced intelligence tradecraft covering deep web investigative techniques, digital identity tracing, threat actor profiling, and verification methodologies.",
    topics: [
      "Deep & Dark Web Investigation",
      "Social Footprint & Metadata Analysis",
      "Threat Intelligence Correlation",
      "Investigative Reporting & Evidence Integrity",
    ],
    slug: "/academics/cosint-intelligence",
  },
  {
    id: "linux-security",
    code: "KLIN-202",
    title: "Penetration Testing with Kali Linux",
    level: "Technical Practicum",
    duration: "2.5 Months",
    mode: "Hands-on Virtual Labs",
    description:
      "Deep dive into the Linux operating system, command-line architecture, security tooling customization, and exploit execution in isolated target environments.",
    topics: [
      "Linux System Internals & Bash Scripting",
      "Metasploit & Custom Payload Delivery",
      "Network Protocol Exploitation",
      "Privilege Escalation Techniques",
    ],
    slug: "/academics/linux-security",
  },
  {
    id: "python-security",
    code: "PYSEC-302",
    title: "Security Scripting & Automation with Python",
    level: "Technical Certification",
    duration: "2.5 Months",
    mode: "Online Interactive + Code Labs",
    description:
      "Custom security tooling development in Python: building port scanners, banner grabbers, vulnerability scanners, socket servers, and exploit automation.",
    topics: [
      "Socket Programming & Packet Manipulation",
      "Custom Exploit & Payload Scripting",
      "Automated Web Crawling & Parameter Fuzzing",
      "API Security Auditing & Scrapers",
    ],
    slug: "/academics/python-security",
  },
  {
    id: "network-security",
    code: "NSS-203",
    title: "Network Security & Infrastructure Assessment",
    level: "Technical Practicum",
    duration: "2 Months",
    mode: "Lab Practicum",
    description:
      "Structural network defense, firewall rule inspection, packet analysis with Wireshark, secure architecture design, and segmentation auditing.",
    topics: [
      "Packet Inspection & Protocol Dissection",
      "Firewall & IDS/IPS Configuration Review",
      "VPN & Cryptographic Tunneling",
      "Subnet Hardening & Zero Trust Concepts",
    ],
    slug: "/academics",
  },
];

export interface FacultyProfile {
  name: string;
  role: string;
  experience: string;
  specializations: string[];
  summary: string;
}

export const VERIFIED_FACULTY: FacultyProfile[] = [
  {
    name: "Tanjim Al Fahim",
    role: "CEO & Founder · Lead Security Instructor",
    experience: "15+ Years Experience",
    specializations: [
      "VAPT Methodology",
      "Ethical Hacking",
      "Cloud Infrastructure Security",
      "OSINT & Forensics",
    ],
    summary:
      "Pioneer in technical cybersecurity training in Bangladesh since 2012. Conducted corporate assessments and specialized defense training across government and enterprise sectors.",
  },
  {
    name: "Md Ashif Islam",
    role: "Senior Faculty · Penetration Testing & Bug Bounty",
    experience: "9+ Years Experience",
    specializations: [
      "Web Application VAPT",
      "Bug Bounty Methodology",
      "Network Penetration Testing",
      "OWASP Security Standards",
    ],
    summary:
      "Seasoned security researcher specializing in web application vulnerability discovery, secure architecture review, and offensive testing frameworks.",
  },
  {
    name: "Bijoy Mondal",
    role: "Faculty Member · Systems Security & Linux Defense",
    experience: "9+ Years Experience",
    specializations: [
      "Linux Security Architecture",
      "RedHat Enterprise Hardening",
      "Offensive Security Tooling",
      "System Auditing",
    ],
    summary:
      "Systems defense instructor focusing on enterprise Linux hardening, server administration security, and automated technical auditing.",
  },
];

export interface InstitutionalEngagement {
  organization: string;
  category: "Government / Defense" | "Public Institution" | "Academic Collaboration";
  engagementType: string;
  description: string;
}

export const INSTITUTIONAL_ENGAGEMENTS: InstitutionalEngagement[] = [
  {
    organization: "Ministry of Information & Communication Technology (ICT)",
    category: "Government / Defense",
    engagementType: "Cyber Defense Workshops",
    description:
      "Delivered technical cybersecurity capacity-building seminars and specialized training sessions on threat mitigation and digital sovereignty.",
  },
  {
    organization: "Bangladesh Air Force (BAF)",
    category: "Government / Defense",
    engagementType: "Technical Security Sessions",
    description:
      "Conducted specialized sessions on penetration testing principles, perimeter protection, and modern cyber threats.",
  },
  {
    organization: "Ministry of Defense",
    category: "Government / Defense",
    engagementType: "Information Defense Training",
    description:
      "Instructional engagements focused on organizational data protection, information assurance, and threat vectors.",
  },
  {
    organization: "Bangladesh Academy for Rural Development (BARD)",
    category: "Public Institution",
    engagementType: "Institutional Security Workshops",
    description:
      "Institutional cybersecurity literacy and defense training for public sector administrators and IT personnel.",
  },
  {
    organization: "Academic Collaborations (BUET & University of Dhaka)",
    category: "Academic Collaboration",
    engagementType: "Student Seminars & Technical Briefings",
    description:
      "Delivered educational seminars on cybersecurity career paths, ethical research standards, and practical lab skills.",
  },
];

export interface EducationalResource {
  title: string;
  category: "Technical Guide" | "Ethics & Standards" | "Reference" | "Advisory";
  description: string;
  slug: string;
  readTime: string;
}

export const EDUCATIONAL_RESOURCES: EducationalResource[] = [
  {
    title: "Institutional Ethical Hacking & Responsible Disclosure Charter",
    category: "Ethics & Standards",
    description:
      "Framework governing ethical boundaries, legal compliance, authorization protocols, and coordinated vulnerability disclosure.",
    slug: "/research",
    readTime: "6 min read",
  },
  {
    title: "Linux Command-Line Fundamentals for Security Auditors",
    category: "Technical Guide",
    description:
      "Essential command-line workflows, file permission auditing, network socket inspection, and shell manipulation for auditors.",
    slug: "/academics/linux-security",
    readTime: "8 min read",
  },
  {
    title: "OWASP Top 10 Web Application Vulnerabilities Primer",
    category: "Reference",
    description:
      "Structured analysis of contemporary web application security risks: injection, broken authentication, and security misconfigurations.",
    slug: "/academics/diploma-cyber-security",
    readTime: "10 min read",
  },
  {
    title: "Perimeter Security & Modern Ransomware Defense",
    category: "Advisory",
    description:
      "Architectural defense strategies for enterprises: multi-factor authentication, network segmentation, and backup integrity.",
    slug: "/research",
    readTime: "7 min read",
  },
];
