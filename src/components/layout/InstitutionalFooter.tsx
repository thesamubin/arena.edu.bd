import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_PRIMARY,
  CONTACT_ADDRESS,
  INSTITUTION_NAME,
} from "@/lib/contact";

export function InstitutionalFooter() {
  return (
    <footer className="bg-[#0a0f18] text-slate-300 font-sans">
      <div className="py-20 sm:py-24">
        <Container size="xl">
          
          {/* Top Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 lg:gap-8 mb-24 max-w-5xl mx-auto text-center">
            
            {/* Column 1 */}
            <div className="space-y-5">
              <h4 className="font-bold text-white text-base sm:text-lg tracking-wide">
                Academics & Training
              </h4>
              <ul className="space-y-3.5 text-sm font-light">
                <li>
                  <Link href="/academics/diploma-cyber-security" className="hover:text-white hover:underline underline-offset-4 transition-all">
                    Professional Diploma
                  </Link>
                </li>
                <li>
                  <Link href="/academics/cehf-ethical-hacking" className="hover:text-white hover:underline underline-offset-4 transition-all">
                    Ethical Hacking (CEHF)
                  </Link>
                </li>
                <li>
                  <Link href="/academics/cosint-intelligence" className="hover:text-white hover:underline underline-offset-4 transition-all">
                    Threat Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="/training/corporate" className="hover:text-white hover:underline underline-offset-4 transition-all">
                    Corporate Training
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-5">
              <h4 className="font-bold text-white text-base sm:text-lg tracking-wide">
                Institution
              </h4>
              <ul className="space-y-3.5 text-sm font-light">
                <li>
                  <Link href="/faculty" className="hover:text-white hover:underline underline-offset-4 transition-all">
                    Faculty & Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/student-work" className="hover:text-white hover:underline underline-offset-4 transition-all">
                    Student Projects
                  </Link>
                </li>
                <li>
                  <a href="https://verify.arenawebsecurity.edu.bd" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline underline-offset-4 transition-all">
                    Verification Portal
                  </a>
                </li>
                <li>
                  <Link href="/legal/accreditation-disclosure" className="hover:text-white hover:underline underline-offset-4 transition-all">
                    Statutory Disclosure
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-5">
              <h4 className="font-bold text-white text-base sm:text-lg tracking-wide">
                Get In Touch
              </h4>
              <ul className="space-y-3.5 text-sm font-light">
                <li>
                  <Link href="/contact" className="hover:text-white hover:underline underline-offset-4 transition-all">
                    Contact Institute
                  </Link>
                </li>
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white hover:underline underline-offset-4 transition-all">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <a href={`tel:${CONTACT_PHONE_PRIMARY.replace(/\s+/g, '')}`} className="hover:text-white hover:underline underline-offset-4 transition-all">
                    {CONTACT_PHONE_PRIMARY}
                  </a>
                </li>
                <li>
                  <span className="block px-6 sm:px-0 max-w-[250px] mx-auto leading-relaxed">
                    {CONTACT_ADDRESS.full}
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Middle Logo Section */}
          <div className="flex flex-col items-center text-center mb-20">
            <Link href="/" className="inline-flex flex-col items-center group">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-bold text-white tracking-[0.1em] sm:tracking-[0.15em] uppercase leading-tight mb-2">
                Arena Web Security Institute of Technology
              </h2>
              <span className="block font-sans text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-slate-400 uppercase mb-8 font-medium">
                Applied Cybersecurity Institute
              </span>
              
              {/* Shield/Crest Graphic */}
              <div 
                className="relative w-14 h-16 sm:w-16 sm:h-20 bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-600/50 flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-105"
                style={{ 
                  clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)',
                  borderRadius: '2px 2px 0 0'
                }}
              >
                <div className="absolute inset-0 border-[2px] border-slate-700/50 m-1" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 78%, 50% 100%, 0 78%)' }} />
                <span className="font-serif font-bold text-white text-3xl sm:text-4xl drop-shadow-md pb-1">
                  A
                </span>
              </div>
            </Link>
          </div>

          {/* Bottom Bar Section */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-10 border-t border-slate-800/80 text-[13px]">
            <div className="text-slate-400 text-center md:text-left flex flex-col sm:flex-row sm:gap-1.5 font-light">
              <span>Copyright © {new Date().getFullYear()} {INSTITUTION_NAME}.</span>
              <span className="hidden sm:inline">All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-7">
              <a href="https://instagram.com/arenawebsecurity" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all hover:-translate-y-0.5" aria-label="Instagram">
                <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://linkedin.com/company/arenawebsecurity" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all hover:-translate-y-0.5" aria-label="LinkedIn">
                <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://facebook.com/arenawebsecurity" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all hover:-translate-y-0.5" aria-label="Facebook">
                <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://youtube.com/arenawebsecurity" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all hover:-translate-y-0.5" aria-label="YouTube">
                <svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

        </Container>
      </div>
    </footer>
  );
}
