"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "products", "sustainability", "export", "contact"];
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navItems = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Products", href: "/#products", id: "products" },
    { name: "Sustainability", href: "/#sustainability", id: "sustainability" },
    { name: "Export", href: "/#export", id: "export" },
    { name: "Contact", href: "/#contact", id: "contact" },
    { name: "Privacy", href: "/privacy", id: "privacy" },
  ];

  return (
    <>
      <style>{`
        @keyframes logo-in {
          from { opacity: 0; transform: translateX(-14px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .logo-animate { animation: logo-in 0.7s cubic-bezier(0.22,1,0.36,1) both; }

        .nav-link-active::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 12px; right: 12px;
          height: 2px; border-radius: 2px;
          background: currentColor;
          transform-origin: center;
        }
        .nav-link-hover {
          position: relative;
        }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 12px; right: 12px;
          height: 2px; border-radius: 2px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s ease;
          opacity: 0.5;
        }
        .nav-link-hover:hover::after { transform: scaleX(1); }

        /* Logo wrapper — background adapts so the green logo is always crisp */
        .logo-wrap-hero {
          background: rgba(255,255,255,0.95);
          border-radius: 10px;
          padding: 4px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.3);
          backdrop-filter: blur(4px);
        }
        .logo-wrap-scrolled {
          background: transparent;
          border-radius: 10px;
          padding: 0;
          box-shadow: none;
        }
        @keyframes glow-pulse {
          0%,100% { box-shadow: 0 4px 20px rgba(93,186,114,0.3); }
          50%      { box-shadow: 0 4px 32px rgba(93,186,114,0.55); }
        }
        .cta-glow:hover { animation: glow-pulse 1.4s ease-in-out infinite; }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]"
        }`}
      >
        <div className={`mx-auto transition-all duration-500 ${scrolled ? "max-w-6xl px-4" : "max-w-7xl px-6 lg:px-8"}`}>
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled
                ? "bg-white/92 backdrop-blur-2xl border border-white/70 shadow-[0_8px_40px_rgba(10,31,20,0.12)] rounded-2xl px-5 py-2.5"
                : ""
            }`}
          >
            {/* ── Brand ── */}
            <a href="/" className="flex items-center gap-3 group logo-animate flex-shrink-0" aria-label="AQYNTRA Home">
              {/* Logo icon — white-backed container so the green mark is crisp on any bg */}
              <div
                className={`relative flex-shrink-0 transition-all duration-300 ${
                  scrolled
                    ? "w-12 h-12 rounded-xl bg-transparent"
                    : "w-14 h-14 rounded-xl bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.3)] ring-1 ring-white/30"
                }`}
              >
                <Image
                  src="/logo-bg-removed.png"
                  alt="AQYNTRA logo mark"
                  fill
                  className="object-contain p-1"
                  sizes="56px"
                  priority
                />
              </div>

              <div className="flex flex-col leading-none">
                <span
                  className={`font-display font-bold tracking-[0.1em] leading-none transition-all duration-500 ${
                    scrolled ? "text-[#0A1F14] text-[17px]" : "text-white text-[18px]"
                  }`}
                >
                  AQYNTRA
                </span>
                <span
                  className={`text-[7px] tracking-[0.26em] font-semibold leading-none mt-1 uppercase transition-all duration-500 ${
                    scrolled ? "text-[#4A7C5C]" : "text-white/55"
                  }`}
                >
                  Pure Nature · Pure Future
                </span>
              </div>
            </a>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`nav-link-hover relative font-sans font-semibold text-[13.5px] px-3.5 py-2 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? `nav-link-active ${scrolled ? "text-[#14432A]" : "text-white"}`
                      : scrolled
                      ? "text-[#0A1F14]/55 hover:text-[#0A1F14]"
                      : "text-white/75 hover:text-white"
                  } ${scrolled ? "hover:bg-[#0A1F14]/[0.04]" : "hover:bg-white/[0.08]"}`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* ── CTA ── */}
            <div className="hidden lg:flex items-center">
              <a
                href="/#contact"
                className={`cta-glow flex items-center gap-2 font-semibold text-[13.5px] px-5 py-2.5 rounded-full transition-all duration-300 group ${
                  scrolled
                    ? "bg-gradient-to-r from-[#14432A] to-[#0A1F14] text-white hover:from-[#1a5436] hover:to-[#14432A] shadow-lg shadow-[#0A1F14]/20"
                    : "bg-white text-[#0A1F14] hover:bg-white/95 shadow-xl shadow-black/20"
                }`}
              >
                Get In Touch
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* ── Mobile Trigger ── */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-xl focus:outline-none transition-all duration-300 ${
                scrolled ? "text-[#0A1F14] hover:bg-[#0A1F14]/[0.05]" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-white shadow-2xl flex flex-col lg:hidden transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          {/* Full logo as single brand mark — no separate text to avoid duplication */}
          <div className="relative w-[120px] h-[48px]">
            <Image
              src="/logo-bg-removed.png"
              alt="AQYNTRA"
              fill
              className="object-contain object-left"
              sizes="120px"
            />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#0A1F14] p-2 rounded-xl hover:bg-gray-100 focus:outline-none transition-colors flex-shrink-0"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col gap-1 px-4 pt-6 flex-1 overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`font-sans font-medium text-base py-3.5 px-4 rounded-xl transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-[#EFF6F0] text-[#14432A] font-semibold"
                  : "text-[#0A1F14]/65 hover:text-[#0A1F14] hover:bg-gray-50"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-6 py-6 border-t border-gray-100">
          <a
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#14432A] to-[#0A1F14] text-white font-semibold py-4 rounded-2xl w-full transition-all hover:opacity-90 shadow-lg text-[15px]"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-center text-[9px] text-[#4A7C5C] tracking-[0.22em] uppercase font-semibold mt-3">
            Pure Nature · Pure Future
          </p>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-[#0A1F14]/25 backdrop-blur-sm lg:hidden"
        />
      )}
    </>
  );
}
