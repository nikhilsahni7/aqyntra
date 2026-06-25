"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: "product",
    image: "/hero_bottle.png",
    badge: "Biodegradable Water Bottles",
    headline: "Pure Nature.\nPure Future.",
    description:
      "Our bottles return to nature — not to landfill. Manufactured using biodegradable materials designed to reduce long-term environmental impact.",
    cta: { label: "Request Quotation", href: "#contact" },
    ctaSecondary: { label: "View Products", href: "#products" },
  },
  {
    id: "bottles",
    image: "/product_bottles.png",
    badge: "Product Range",
    headline: "Every Size.\nOne Mission.",
    description:
      "Available in 250ml, 500ml, 750ml, and 1000ml — designed for retail, hospitality, fitness, and travel markets worldwide.",
    cta: { label: "Explore Products", href: "#products" },
    ctaSecondary: { label: "Get Pricing", href: "#contact" },
  },
  {
    id: "preforms",
    image: "/product_preforms.png",
    badge: "Preforms & Export",
    headline: "Blow Locally.\nShip Globally.",
    description:
      "Import biodegradable preforms to manufacture bottles in your own facility. Compatible with standard PET blow-molding machinery.",
    cta: { label: "Inquire Now", href: "#contact" },
    ctaSecondary: { label: "Export Markets", href: "#export" },
  },
  {
    id: "sustainability",
    image: "/clean_ocean.png",
    badge: "Ocean Protection",
    headline: "Protect What\nMatters Most.",
    description:
      "Every AQYNTRA bottle that decomposes naturally is one less piece of permanent plastic threatening marine ecosystems.",
    cta: { label: "Our Impact", href: "#sustainability" },
    ctaSecondary: { label: "Partner With Us", href: "#contact" },
  },
];

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
    enter: (d: number) => ({ opacity: 0, scale: 1.08, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, scale: 1.04, x: d > 0 ? -60 : 60 }),
  };

  const textVariants = {
    enter: { opacity: 0, y: 30 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background images with crossfade */}
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={slide.id}
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.badge}
            fill
            priority={current === 0}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Persistent gradient overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050f0a] via-[#050f0a]/65 to-[#050f0a]/40 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050f0a]/60 via-transparent to-transparent z-[1]" />
      {/* Top gradient specifically for header readability */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050f0a]/70 to-transparent z-[1]" />

      {/* Content layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-40 lg:pt-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Text column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + "-text"}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex flex-col items-start"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] text-white/80 text-xs font-medium tracking-wider uppercase mb-7">
                  <Leaf className="w-3 h-3" />
                  {slide.badge}
                </div>

                <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] mb-5 whitespace-pre-line">
                  {slide.headline}
                </h1>

                <p className="text-white/65 text-base lg:text-lg max-w-lg leading-relaxed mb-9">
                  {slide.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={slide.cta.href}
                    className="flex items-center gap-2.5 bg-spring hover:bg-spring/90 text-deep font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-spring/20 hover:shadow-xl hover:shadow-spring/30 group text-[15px]"
                  >
                    {slide.cta.label}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={slide.ctaSecondary.href}
                    className="flex items-center gap-2 bg-white/[0.08] hover:bg-white/[0.14] text-white font-medium px-7 py-3.5 rounded-full border border-white/[0.12] transition-all duration-300 text-[15px]"
                  >
                    {slide.ctaSecondary.label}
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Nav arrows + slide counter */}
          <div className="lg:col-span-5 flex flex-col items-end justify-end gap-6">
            {/* Slide navigation arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={goPrev}
                className="w-11 h-11 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.1] text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={goNext}
                className="w-11 h-11 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.1] text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
                aria-label="Next slide"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Slide counter */}
            <div className="flex items-center gap-1.5 text-white/40 text-[13px] font-medium tabular-nums">
              <span className="text-white text-lg font-display font-bold">
                {String(current + 1).padStart(2, "0")}
              </span>
              <span className="text-white/20 mx-1">/</span>
              <span>{String(slides.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>

        {/* Bottom bar: dots + stats */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-400 cursor-pointer ${
                  i === current
                    ? "w-8 bg-spring"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-8 sm:gap-12"
          >
            {[
              { value: "45%", label: "Lower Carbon" },
              { value: "50+", label: "Countries" },
              { value: "100%", label: "Plant-Based" },
              { value: "0", label: "Microplastics" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-display font-bold text-xl lg:text-2xl text-white tabular-nums">
                  {stat.value}
                </span>
                <span className="text-[10px] text-white/35 font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
