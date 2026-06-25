"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, Download, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, StaggerContainer } from "./AnimationUtils";

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
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-spring/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <StaggerContainer
        delayChildren={0.05}
        staggerChildren={0.08}
        className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10"
      >
        {/* Brand */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
          }}
          className="flex flex-col gap-4 md:col-span-1"
        >
          {/* Logo block */}
          <div className="flex flex-col gap-3">
            <div className="relative w-[72px] h-[72px] rounded-2xl overflow-hidden bg-white shadow-[0_4px_24px_rgba(0,0,0,0.35)] ring-1 ring-white/20 flex-shrink-0">
              <Image
                src="/logo-bg-removed.png"
                alt="AQYNTRA Logo"
                fill
                className="object-contain p-1.5"
                sizes="72px"
              />
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-[0.1em] text-petal block leading-none">
                AQYNTRA
              </span>
              <span className="text-[9px] tracking-[0.22em] font-semibold text-spring/70 uppercase mt-1 block">
                Pure Nature · Pure Future
              </span>
            </div>
          </div>
          <p className="text-petal/45 text-[13px] leading-[1.7]">
            Biodegradable water bottles designed to reduce environmental impact.
            Nature-aligned hydration solutions worldwide.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
          }}
          className="flex flex-col gap-3"
        >
          <h4 className="font-display font-semibold text-[14px] text-spring mb-1">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2 text-[13px] text-petal/50">
            {["Home", "About", "Products", "Sustainability", "Export"].map((name) => (
              <li key={name}>
                <a
                  href={`#${name.toLowerCase()}`}
                  className="hover:text-petal transition-colors duration-200 hover:translate-x-0.5 inline-block"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Downloads */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
          }}
          className="flex flex-col gap-3"
        >
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
                <Download className="w-3.5 h-3.5 text-spring/60 group-hover:text-spring transition-colors group-hover:-translate-y-0.5 transition-transform duration-200" />
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
                <Download className="w-3.5 h-3.5 text-spring/60 group-hover:text-spring transition-colors group-hover:-translate-y-0.5 transition-transform duration-200" />
                Company Profile
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
          }}
          className="flex flex-col gap-3"
        >
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
        </motion.div>
      </StaggerContainer>

      {/* Bottom bar */}
      <FadeUp delay={0.3}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-6 border-t border-petal/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-petal/30">
          <p>© 2026 AQYNTRA. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-petal/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-petal/60 transition-colors">
              Terms of Service
            </a>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-spring/15 hover:bg-spring/25 text-spring p-2 rounded-full transition-colors duration-300 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>
      </FadeUp>
    </footer>
  );
}
