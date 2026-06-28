"use client";

import Image from "next/image";
import { Leaf, RefreshCw, BarChart2, ShieldCheck } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { FadeUp, FadeLeft, ScaleIn, StaggerContainer } from "./AnimationUtils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const pillarVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(2px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
};

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-24 lg:py-32 bg-petal relative overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] bg-spring/[0.04] rounded-full blur-[140px] pointer-events-none float-slow-1" />
      <div className="absolute left-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-spring/[0.03] rounded-full blur-[120px] pointer-events-none float-slow-2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-spring font-semibold text-[11px] uppercase tracking-[0.15em] mb-4 block">
            Sustainability &amp; Science
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-deep tracking-tight mb-4">
            Designed for the <span className="font-serif italic font-semibold text-spring">Environment.</span>
          </h2>
          <p className="text-lichen text-[15px] leading-relaxed">
            Bottles designed to integrate back into earth&rsquo;s natural loops — 
            from agricultural biomass to industrial composting streams.
          </p>
        </FadeUp>

        {/* Visual story: Image + 3 pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-16">
          {/* Large image card spanning left */}
          <ScaleIn className="lg:row-span-2 relative rounded-2xl overflow-hidden min-h-[320px] lg:min-h-0 group">
            <Image
              src="/decomposing_bottle_soil.png"
              alt="Biodegradable bottle decomposing naturally in soil"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-petal font-display font-semibold text-lg block mb-1">
                Natural Decomposition
              </span>
              <span className="text-petal/70 text-[13px]">
                Returns to earth as organic compost, water, and CO₂
              </span>
            </div>
          </ScaleIn>

          {/* Pillars — staggered */}
          <StaggerContainer
            delayChildren={0.15}
            staggerChildren={0.12}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5"
          >
            {/* Biodegradable Material */}
            <motion.div
              variants={pillarVariants}
              whileHover={{ y: -3, transition: { duration: 0.25 } }}
              className="bg-mist rounded-2xl p-7 border border-deep/[0.04] flex flex-col hover:border-spring/20 hover:shadow-md hover:shadow-spring/[0.05] transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-spring/10 text-spring flex items-center justify-center mb-5 transition-transform duration-300 hover:scale-110">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-[17px] text-deep mb-3">
                Biodegradable Material
              </h3>
              <p className="text-lichen text-[14px] leading-relaxed mb-4 flex-1">
                Manufactured using plant-derived polymers rather than fossil fuels,
                replacing standard PET with a clean, organic alternative.
              </p>
              <ul className="text-[12px] text-lichen flex flex-col gap-1.5 font-medium">
                <li className="flex gap-2 items-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-spring shrink-0" />
                  Bio-based feedstock options
                </li>
              </ul>
            </motion.div>

            {/* Decomposition Cycle */}
            <motion.div
              variants={pillarVariants}
              whileHover={{ y: -3, transition: { duration: 0.25 } }}
              className="bg-mist rounded-2xl p-7 border border-deep/[0.04] flex flex-col hover:border-spring/20 hover:shadow-md hover:shadow-spring/[0.05] transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-spring/10 text-spring flex items-center justify-center mb-5">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-[17px] text-deep mb-3">
                Decomposition Cycle
              </h3>
              <p className="text-lichen text-[14px] leading-relaxed mb-4 flex-1">
                Under composting conditions, the structure breaks down naturally
                into organic compost, water, and CO₂ via native microbes.
              </p>
              <ul className="text-[12px] text-lichen flex flex-col gap-1.5 font-medium">
                <li className="flex gap-2 items-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-spring shrink-0" />
                  Microbe-mediated disintegration
                </li>
                <li className="flex gap-2 items-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-spring shrink-0" />
                  Reduced persistence and lower potential for long-term microplastic accumulation
                </li>
              </ul>
            </motion.div>

            {/* Carbon Footprint — spans 2 cols */}
            <motion.div
              variants={pillarVariants}
              className="sm:col-span-2 bg-mist rounded-2xl p-7 border border-deep/[0.04] flex flex-col hover:border-spring/20 hover:shadow-md hover:shadow-spring/[0.05] transition-colors duration-300"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-spring/10 text-spring flex items-center justify-center shrink-0">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[17px] text-deep mb-1">
                    Carbon Footprint Potential
                  </h3>
                  <p className="text-lichen text-[14px] leading-relaxed">
                    Potential reduction in carbon footprint depending upon material selection and production route compared to virgin PET.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-auto">
                {/* AQYNTRA bar */}
                <div>
                  <div className="flex justify-between text-[12px] font-semibold text-deep mb-2">
                    <span>AQYNTRA</span>
                    <span className="text-spring tabular-nums font-bold">1.2 kg CO₂/kg</span>
                  </div>
                  <div className="w-full bg-deep/[0.06] rounded-full h-4 overflow-hidden p-[2px] shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "45%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                      className="bg-gradient-to-r from-spring to-dew h-full rounded-full shadow-[0_0_12px_rgba(93,186,114,0.45)] relative overflow-hidden animate-[pulse_3s_infinite_ease-in-out]"
                    />
                  </div>
                </div>

                {/* PET bar */}
                <div>
                  <div className="flex justify-between text-[12px] font-semibold text-deep mb-2">
                    <span>Virgin PET</span>
                    <span className="text-lichen/80 tabular-nums">2.2 kg CO₂/kg</span>
                  </div>
                  <div className="w-full bg-deep/[0.06] rounded-full h-4 overflow-hidden p-[2px] shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                      className="bg-lichen/35 h-full rounded-full"
                    />
                  </div>
                </div>

                <p className="text-[11px] text-lichen/85 italic text-right mt-1.5 font-medium tracking-wide">
                  *Indicative estimate. Subject to material composition and independent verification. Based on agricultural biomass life-cycle assessments (LCA).
                </p>
              </div>
            </motion.div>
          </StaggerContainer>
        </div>

        {/* Ocean protection banner */}
        <ScaleIn delay={0.1}>
          <div className="relative rounded-2xl overflow-hidden h-[240px] lg:h-[300px] group">
            <Image
              src="/clean_ocean.png"
              alt="Clean ocean coral reef protected from plastic pollution"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep/80 via-deep/50 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 lg:px-14">
              <FadeLeft delay={0.2} className="max-w-md">
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-petal tracking-tight mb-3">
                  Protecting Our Oceans
                </h3>
                <p className="text-petal/70 text-[14px] leading-relaxed">
                  AQYNTRA aims to support cleaner oceans through innovative packaging materials.
                </p>
              </FadeLeft>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
