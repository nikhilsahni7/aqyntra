"use client";

import { Mail, Phone, MapPin, Download, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-deep text-petal pt-16 pb-8 relative overflow-hidden">
      {/* Subtle leaf decoration */}
      <div className="absolute -right-16 -bottom-16 w-64 h-64 text-petal/[0.02] pointer-events-none">
        <svg fill="currentColor" viewBox="0 0 100 100" className="w-full h-full">
          <path d="M10,90 C40,90 80,70 90,10 C70,30 30,40 10,90 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <svg
              className="w-7 h-7 text-spring"
              viewBox="0 0 100 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="42" y="8" width="16" height="8" rx="1.5" fill="currentColor" />
              <path
                d="M44 16 H56 V30 L66 52 V100 C66 104.4 62.4 108 58 108 H42 C37.6 108 34 104.4 34 100 V52 L44 30 Z"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M50 40 L62 90 H54 L50 72 H40 M50 40 L38 90 H46 L50 72"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M32 78 C32 66 38 62 44 62 C38 70 42 78 32 78 Z" fill="#5DBA72" />
              <path
                d="M50 78 C52 78 54 80 54 82 C54 84 50 87 50 87 C50 87 46 84 46 82 C46 80 48 78 50 78 Z"
                fill="#38bdf8"
              />
            </svg>
            <span className="font-display font-bold text-lg tracking-wider text-petal">
              AQYNTRA
            </span>
          </div>
          <p className="text-petal/50 text-[13px] leading-relaxed mt-1">
            Biodegradable water bottles designed to reduce environmental impact.
            Nature-aligned hydration solutions worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-display font-semibold text-[14px] text-spring mb-1">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2 text-[13px] text-petal/50">
            {["Home", "About", "Products", "Sustainability", "Export"].map((name) => (
              <li key={name}>
                <a
                  href={`#${name.toLowerCase()}`}
                  className="hover:text-petal transition-colors"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Downloads */}
        <div className="flex flex-col gap-3">
          <h4 className="font-display font-semibold text-[14px] text-spring mb-1">
            Downloads
          </h4>
          <ul className="flex flex-col gap-2.5 text-[13px] text-petal/50">
            <li>
              <a
                href="/docs/AQYNTRA_Product_Catalogue.pdf"
                download
                onClick={(e) => {
                  e.preventDefault();
                  alert("Downloading AQYNTRA Product Catalogue...");
                }}
                className="flex items-center gap-2 hover:text-petal transition-colors group"
              >
                <Download className="w-3.5 h-3.5 text-spring/60 group-hover:text-spring transition-colors" />
                Product Catalogue
              </a>
            </li>
            <li>
              <a
                href="/docs/AQYNTRA_Company_Profile.pdf"
                download
                onClick={(e) => {
                  e.preventDefault();
                  alert("Downloading AQYNTRA Company Profile...");
                }}
                className="flex items-center gap-2 hover:text-petal transition-colors group"
              >
                <Download className="w-3.5 h-3.5 text-spring/60 group-hover:text-spring transition-colors" />
                Company Profile
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h4 className="font-display font-semibold text-[14px] text-spring mb-1">
            Contact
          </h4>
          <ul className="flex flex-col gap-3 text-[13px] text-petal/50">
            <li className="flex gap-2.5 items-center">
              <Phone className="w-3.5 h-3.5 text-spring/60 shrink-0" />
              <a href="tel:+918059596425" className="hover:text-petal transition-colors">
                +91 8059596425
              </a>
            </li>
            <li className="flex gap-2.5 items-center">
              <Mail className="w-3.5 h-3.5 text-spring/60 shrink-0" />
              <a href="mailto:info@aqyntra.com" className="hover:text-petal transition-colors">
                info@aqyntra.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-6 border-t border-petal/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-petal/30">
        <p>© 2026 AQYNTRA. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-petal/60 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-petal/60 transition-colors">
            Terms of Service
          </a>
          <button
            onClick={scrollToTop}
            className="bg-spring/15 hover:bg-spring/25 text-spring p-2 rounded-full transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
