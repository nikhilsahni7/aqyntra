"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Leaf, Globe, Droplets } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: "product",
    image: "/bottles.jpeg",
    imgPosition: "center center",
    badge: "Biodegradable Water Bottles",
    badgeIcon: "leaf",
    headline: "Pure Nature.\nPure Future.",
    accentWord: "Nature",
    description:
      "AQYNTRA develops biodegradable packaging solutions designed to reduce long-term environmental impact. Our bottles return to nature — not to landfill.",
    cta: { label: "Request Pricing", href: "#contact" },
    ctaSecondary: { label: "Explore Products", href: "#products" },
  },
  {
    id: "bottles",
    image: "/product_bottles.png",
    imgPosition: "center 40%",
    badge: "Product Range",
    badgeIcon: "droplets",
    headline: "Every Size.\nOne Mission.",
    accentWord: "Size",
    description:
      "Available in 250 ml, 500 ml and 1000 ml formats, designed for retail, hospitality, airlines and private-label brands worldwide.",
    cta: { label: "Explore Products", href: "#products" },
    ctaSecondary: { label: "Get Pricing", href: "#contact" },
  },
  {
    id: "preforms",
    image: "/product_preforms.png",
    imgPosition: "center 35%",
    badge: "Preforms & Export",
    badgeIcon: "globe",
    headline: "Blow Locally.\nShip Globally.",
    accentWord: "Globally",
    description:
      "Import biodegradable preforms to manufacture bottles in your own facility. Compatible with standard PET blow-molding machinery.",
    cta: { label: "Inquire Now", href: "#contact" },
    ctaSecondary: { label: "Export Markets", href: "#export" },
  },
  {
    id: "sustainability",
    image: "/clean_ocean.png",
    imgPosition: "center 55%",
    badge: "Ocean Protection",
    badgeIcon: "droplets",
    headline: "Protect What\nMatters Most.",
    accentWord: "Matters",
    description:
      "AQYNTRA packaging is designed to reduce dependence on conventional plastics and support cleaner ecosystems.",
    cta: { label: "Our Impact", href: "#sustainability" },
    ctaSecondary: { label: "Partner With Us", href: "#contact" },
  },
];

const stats = [
  { value: "Up to 45%*", label: "Compared with virgin PET" },
  { value: "20+", label: "Target Markets" },
  { value: "Bio-based", label: "Material Options" },
  { value: "Reduced", label: "Plastic Waste" },
];

function BadgeIcon({ type }: { type: string }) {
  if (type === "globe") return <Globe className="w-3 h-3" />;
  if (type === "droplets") return <Droplets className="w-3 h-3" />;
  return <Leaf className="w-3 h-3" />;
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const slide = slides[current];

  const imageVariants = {
    enter: (d: number) => ({ opacity: 0, scale: 1.06, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, scale: 1.03, x: d > 0 ? -40 : 40 }),
  };

  const textVariants = {
    enter: { opacity: 0, y: 36, filter: "blur(4px)" },
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -20, filter: "blur(2px)" },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      {/* ─── Styles ─── */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(3deg); }
        }
        @keyframes float-slow-rev {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-2deg); }
        }
        @keyframes shimmer-badge {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes progress-bar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes stat-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .progress-bar-anim {
          animation: progress-bar 7s linear forwards;
          transform-origin: left;
        }
        .float-1 { animation: float-slow 8s ease-in-out infinite; }
        .float-2 { animation: float-slow-rev 10s ease-in-out infinite; animation-delay: -2s; }
        .stat-item { animation: stat-in 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .badge-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.06) 0%,
            rgba(255,255,255,0.16) 50%,
            rgba(255,255,255,0.06) 100%
          );
          background-size: 200% auto;
          animation: shimmer-badge 3s linear infinite;
        }
        .headline-gradient-text {
          background: linear-gradient(135deg, #ffffff 0%, #eefbf3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .accent-line {
          background: linear-gradient(90deg, #5DBA72, #B8E6C4);
          height: 4px;
          border-radius: 99px;
          display: block;
          margin-top: 8px;
        }
        @keyframes sheen {
          100% { left: 125%; }
        }
      `}</style>

      {/* ─── Background images ─── */}
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={slide.id}
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.badge}
            fill
            priority={current === 0}
            loading="eager"
            className="object-cover"
            style={{ objectPosition: slide.imgPosition }}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* ─── Gradient layers ─── */}
      {/* Cinematic dark base */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020d07] via-[#040f09]/70 to-[#040f09]/20 z-[1]" />
      {/* Left vignette for text */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020d07]/80 via-[#020d07]/40 to-transparent z-[1]" />
      {/* Top dark for nav readability */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#020d07]/60 to-transparent z-[1]" />
      {/* Subtle green tint glow bottom-right */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#5DBA72]/[0.06] blur-[120px] rounded-full z-[1]" />

      {/* ─── Decorative floating orbs ─── */}
      <div className="absolute top-32 right-16 w-80 h-80 rounded-full bg-[#5DBA72]/[0.07] blur-[80px] float-1 z-[1] pointer-events-none" />
      <div className="absolute bottom-48 right-40 w-48 h-48 rounded-full bg-[#B8E6C4]/[0.05] blur-[60px] float-2 z-[1] pointer-events-none" />

      {/* ─── Content ─── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-14 pt-40 lg:pt-52">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">

          {/* ── Left: Text ── */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + "-text"}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-start"
              >
                {/* Badge */}
                <div className="badge-shimmer inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.15] text-white/85 text-[11px] font-semibold tracking-[0.12em] uppercase mb-8 backdrop-blur-sm">
                  <BadgeIcon type={slide.badgeIcon} />
                  {slide.badge}
                </div>

                {/* Headline */}
                <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.02] tracking-[-0.02em] mb-2 whitespace-pre-line">
                  {slide.headline.split("\n").map((line, i) => {
                    const hasAccent = line.includes(slide.accentWord);
                    let lineContent: React.ReactNode = line;

                    if (hasAccent) {
                      const parts = line.split(slide.accentWord);
                      lineContent = (
                        <>
                          {parts[0]}
                          <span className="font-serif italic font-normal text-[#B8E6C4] text-glow-green tracking-normal">
                            {slide.accentWord}
                          </span>
                          {parts[1]}
                        </>
                      );
                    }

                    return (
                      <span key={i} className={`block ${i === 0 ? "headline-gradient-text" : "text-white/95"}`}>
                        {lineContent}
                        {i === 0 && <span className="accent-line" style={{ width: "3.5rem" }} />}
                      </span>
                    );
                  })}
                </h1>

                {/* Description */}
                <p className="text-white/60 text-base lg:text-[17px] max-w-[480px] leading-[1.75] mb-9 mt-4 font-sans">
                  {slide.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3.5">
                  <a
                    href={slide.cta.href}
                    className="group relative overflow-hidden flex items-center gap-2.5 bg-[#5DBA72] hover:bg-[#6cce80] text-[#0A1F14] font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_8px_30px_rgba(93,186,114,0.3)] hover:shadow-[0_12px_40px_rgba(93,186,114,0.45)] text-[14.5px] hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                  >
                    {/* Visual shine card */}
                    <span className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 group-hover:animate-[sheen_1.2s_ease]" />
                    <span className="relative z-10 flex items-center gap-2.5">
                      {slide.cta.label}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </a>
                  <a
                    href={slide.ctaSecondary.href}
                    className="group flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold px-7 py-3.5 rounded-full border border-white/[0.12] hover:border-white/[0.22] transition-all duration-300 text-[14.5px] backdrop-blur-sm hover:-translate-y-0.5 active:scale-95"
                  >
                    {slide.ctaSecondary.label}
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Right: Slide nav ── */}
          <div className="lg:col-span-5 flex flex-col items-end justify-end gap-5">
            {/* Slide thumbnail strip */}
            <div className="hidden lg:flex gap-2.5 items-end">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-400 cursor-pointer flex-shrink-0 ${
                    i === current
                      ? "border-[#5DBA72] shadow-[0_0_20px_rgba(93,186,114,0.5)]"
                      : "border-white/20 hover:border-white/40 opacity-50 hover:opacity-80"
                  }`}
                  style={{
                    width: i === current ? 120 : 80,
                    height: i === current ? 80 : 56,
                  }}
                  aria-label={`Go to slide ${i + 1}: ${s.badge}`}
                >
                  <Image
                    src={s.image}
                    alt={s.badge}
                    fill
                    className="object-cover transition-transform duration-500"
                    style={{ objectPosition: s.imgPosition }}
                    sizes="120px"
                  />
                  {/* Dark overlay on inactive */}
                  {i !== current && (
                    <div className="absolute inset-0 bg-black/30" />
                  )}
                  {/* Active green tint + label */}
                  {i === current && (
                    <>
                      <div className="absolute inset-0 bg-[#5DBA72]/10" />
                      <div className="absolute bottom-1.5 left-0 right-0 flex justify-center">
                        <span className="text-[8px] font-bold text-white tracking-wider bg-[#5DBA72]/80 px-1.5 py-0.5 rounded-full uppercase">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </>
                  )}
                </button>
              ))}
            </div>

            {/* Arrow nav + counter */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={goPrev}
                  className="w-11 h-11 rounded-full bg-white/[0.07] hover:bg-white/[0.15] border border-white/[0.12] hover:border-white/[0.25] text-white flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 backdrop-blur-sm"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={goNext}
                  className="w-11 h-11 rounded-full bg-[#5DBA72]/20 hover:bg-[#5DBA72]/35 border border-[#5DBA72]/30 hover:border-[#5DBA72]/50 text-white flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 backdrop-blur-sm"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-baseline gap-1 text-white/30 text-[13px] font-medium tabular-nums">
                <span className="text-white text-[22px] font-display font-bold leading-none">
                  {String(current + 1).padStart(2, "0")}
                </span>
                <span className="text-white/20 mx-0.5 text-base">/</span>
                <span>{String(slides.length).padStart(2, "0")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-10 pt-7 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Progress dots */}
          <div className="flex items-center gap-3">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className="relative cursor-pointer group"
                aria-label={`Go to slide ${i + 1}`}
              >
                {i === current ? (
                  <span className="relative flex h-1.5 w-9 rounded-full bg-white/20 overflow-hidden">
                    <span
                      key={`progress-${current}`}
                      className="absolute inset-y-0 left-0 bg-[#5DBA72] rounded-full progress-bar-anim"
                      style={{ width: "100%" }}
                    />
                  </span>
                ) : (
                  <span className={`flex h-1.5 rounded-full bg-white/20 group-hover:bg-white/40 transition-all duration-300 ${i < current ? "w-3 bg-[#5DBA72]/60" : "w-1.5"}`} />
                )}
              </button>
            ))}
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex gap-8 sm:gap-12"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="stat-item flex flex-col"
                style={{ animationDelay: `${0.8 + i * 0.1}s` }}
              >
                <span className="font-display font-extrabold text-xl lg:text-2xl text-white tabular-nums leading-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] text-white/35 font-semibold uppercase tracking-[0.14em] mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
        {/* Stat footnote */}
        <p className="text-white/20 text-[9px] mt-2 text-right italic">
          *Indicative estimate. Subject to material composition and independent verification.
        </p>
      </div>
    </section>
  );
}
