import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  CONTACT_EMAIL,
  INSTITUTION_NAME,
} from "@/lib/contact";

export function InstitutionalFooter() {
  return (
    <footer className="bg-[#0a0f18] text-slate-300 font-sans">
      <div className="pt-20 pb-12">
        <Container size="xl">
          
          {/* Top Links Section - 3 Columns (Harvard Style: center-aligned items) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-20 max-w-5xl mx-auto text-center">
            
            {/* Column 1 */}
            <div className="space-y-6">
              <h4 className="font-bold text-white text-base sm:text-lg tracking-wide">
                Academics & Training
              </h4>
              <ul className="space-y-4 text-sm text-slate-300/90 font-light">
                <li>
                  <Link href="/academics/diploma-cyber-security" className="hover:text-white transition-colors">
                    Professional Diploma
                  </Link>
                </li>
                <li>
                  <Link href="/academics/cehf-ethical-hacking" className="hover:text-white transition-colors">
                    Ethical Hacking (CEHF)
                  </Link>
                </li>
                <li>
                  <Link href="/academics/cosint-intelligence" className="hover:text-white transition-colors">
                    Threat Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="/training/corporate" className="hover:text-white transition-colors">
                    Corporate Training
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <h4 className="font-bold text-white text-base sm:text-lg tracking-wide">
                Institution
              </h4>
              <ul className="space-y-4 text-sm text-slate-300/90 font-light">
                <li>
                  <Link href="/faculty" className="hover:text-white transition-colors">
                    Faculty & Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/student-work" className="hover:text-white transition-colors">
                    Student Projects
                  </Link>
                </li>
                <li>
                  <a href="https://verify.arenawebsecurity.edu.bd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Verification Portal
                  </a>
                </li>
                <li>
                  <Link href="/legal/accreditation-disclosure" className="hover:text-white transition-colors">
                    Statutory Disclosure
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-6">
              <h4 className="font-bold text-white text-base sm:text-lg tracking-wide">
                Get In Touch
              </h4>
              <ul className="space-y-4 text-sm text-slate-300/90 font-light">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Institute
                  </Link>
                </li>
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <a href="tel:+8801310333444" className="hover:text-white transition-colors">
                    +880 1310-333444
                  </a>
                </li>
                <li>
                  <a href="https://maps.google.com/?q=Arena+Web+Security" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1.5 justify-center">
                    View Campus Location
                    <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar Section (Harvard Style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-end pt-10">
            
            {/* Left: Copyright */}
            <div className="text-slate-400 text-sm font-light text-center md:text-left order-3 md:order-1 pb-1">
              Copyright © {new Date().getFullYear()} {INSTITUTION_NAME}
            </div>

            {/* Center: Logo */}
            <div className="flex flex-col items-center justify-end order-1 md:order-2 mb-4">
              <Link href="/" className="inline-flex flex-col items-center group">
                <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-white tracking-[0.12em] uppercase leading-none mb-2">
                  Arena Web Security
                </h2>
                <span className="block font-sans text-[10px] tracking-[0.2em] text-slate-400 uppercase mb-4 font-medium">
                  Institute of Technology
                </span>
                
                {/* Shield Graphic */}
                <div 
                  className="relative w-11 h-14 bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-600/50 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105"
                  style={{ 
                    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)',
                    borderRadius: '1px 1px 0 0'
                  }}
                >
                  <div className="absolute inset-0 border-[1.5px] border-slate-700/50 m-0.5" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 78%, 50% 100%, 0 78%)' }} />
                  <span className="font-serif font-bold text-white text-[22px] drop-shadow-md pb-[2px]">
                    A
                  </span>
                </div>
              </Link>
            </div>

            {/* Right: Socials */}
            <div className="flex justify-center md:justify-end gap-6 text-slate-400 order-2 md:order-3 pb-1 mb-2 md:mb-0">
              <a href="https://instagram.com/arenawebsecurity" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all hover:-translate-y-0.5" aria-label="Instagram">
                <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://linkedin.com/company/arenawebsecurity" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all hover:-translate-y-0.5" aria-label="LinkedIn">
                <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://facebook.com/arenawebsecurity" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all hover:-translate-y-0.5" aria-label="Facebook">
                <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://youtube.com/arenawebsecurity" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all hover:-translate-y-0.5" aria-label="YouTube">
                <svg className="w-[24px] h-[24px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.498 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.498-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

          </div>
        </Container>
      </div>
    </footer>
  );
}
