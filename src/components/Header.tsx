"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Sustainability", href: "#sustainability" },
    { name: "Export", href: "#export" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-petal/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)] py-3"
          : "bg-transparent py-5 [text-shadow:0_1px_3px_rgba(0,0,0,0.4)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <svg
            className={`w-9 h-9 transition-colors duration-500 ${scrolled ? "text-deep" : "text-petal"}`}
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
          <div className="flex flex-col">
            <span className={`font-display font-bold text-xl tracking-[0.08em] leading-none transition-colors duration-500 ${scrolled ? "text-deep" : "text-white"}`}>
              AQYNTRA
            </span>
            <span className={`text-[8px] tracking-[0.2em] font-medium leading-none mt-0.5 uppercase transition-colors duration-500 ${scrolled ? "text-lichen" : "text-white/70"}`}>
              Pure Nature · Pure Future
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-sans font-semibold text-[14px] px-3.5 py-2 rounded-lg transition-all duration-300 ${
                scrolled
                  ? "text-deep/70 hover:text-deep hover:bg-deep/[0.03]"
                  : "text-white hover:text-white hover:bg-white/[0.1]"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className={`flex items-center gap-2 font-semibold text-[14px] px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg group ${
              scrolled
                ? "bg-deep hover:bg-forest text-petal"
                : "bg-white text-deep hover:bg-white/90"
            }`}
          >
            Get In Touch
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 focus:outline-none transition-colors duration-500 ${scrolled ? "text-deep" : "text-petal"}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-petal shadow-2xl p-8 flex flex-col lg:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-10">
          <span className="font-display font-bold text-lg tracking-wider text-deep">
            AQYNTRA
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-deep p-2 focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 my-auto">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-sans font-medium text-base text-deep hover:text-spring transition-colors py-3 px-3 rounded-lg hover:bg-mist"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="mt-auto">
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-deep text-petal font-medium py-3.5 rounded-full w-full transition-colors hover:bg-forest"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-deep/20 backdrop-blur-sm lg:hidden"
        />
      )}
    </header>
  );
}
