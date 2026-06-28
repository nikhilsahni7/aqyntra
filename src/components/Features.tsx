"use client";

import { Award, Leaf, ShieldCheck, Recycle, Trees } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { FadeUp, StaggerContainer } from "./AnimationUtils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const features = [
  {
    icon: Award,
    title: "Biodegradable Material",
    desc: "Manufactured using biodegradable materials designed to reduce long-term environmental impact.",
    accent: "bg-spring/10 text-spring",
    glow: "hover:shadow-[0_20px_40px_rgba(93,186,114,0.12)] hover:border-spring/30",
  },
  {
    icon: Leaf,
    title: "Reduced Environmental Impact",
    desc: "Made from plant-derived raw materials with reduced environmental footprint throughout the product lifecycle.",
    accent: "bg-[#E8F5E9] text-[#2E7D32]",
    glow: "hover:shadow-[0_20px_40px_rgba(46,125,50,0.08)] hover:border-[#2E7D32]/30",
  },
  {
    icon: Trees,
    title: "Sustainable Future",
    desc: "Reducing dependence on petroleum-based polymers, cutting greenhouse gas emissions.",
    accent: "bg-[#E3F2FD] text-[#1565C0]",
    glow: "hover:shadow-[0_20px_40px_rgba(21,101,192,0.08)] hover:border-[#1565C0]/30",
  },
  {
    icon: ShieldCheck,
    title: "Designed Without Harmful Substances",
    desc: "Designed without intentionally added harmful substances, heavy metals, bisphenols, or microplastics.",
    accent: "bg-[#FFF3E0] text-[#E65100]",
    glow: "hover:shadow-[0_20px_40px_rgba(230,81,0,0.08)] hover:border-[#E65100]/30",
  },
  {
    icon: Recycle,
    title: "Responsible End-of-Life",
    desc: "Designed for responsible end-of-life management. Manufactured from biomass, returns to earth under suitable conditions.",
    accent: "bg-[#F3E5F5] text-[#6A1B9A]",
    glow: "hover:shadow-[0_20px_40px_rgba(106,27,154,0.08)] hover:border-[#6A1B9A]/30",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(2px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE },
  },
};

export default function Features() {
  return (
    <section className="py-20 bg-petal relative overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute right-[-10%] top-[10%] w-96 h-96 bg-spring/[0.05] rounded-full blur-[100px] pointer-events-none float-slow-1" />
      <div className="absolute left-[-5%] bottom-[15%] w-[380px] h-[380px] bg-[#B8E6C4]/[0.04] rounded-full blur-[90px] pointer-events-none float-slow-2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <FadeUp className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-deep tracking-tight mb-4">
            Why Biodegradable?
          </h2>
          <p className="text-lichen text-[15px] leading-relaxed">
            AQYNTRA merges materials science with daily hydration. Our organic solutions are replacing petroleum-based bottles globally.
          </p>
        </FadeUp>

        {/* Features strip */}
        <StaggerContainer
          delayChildren={0.05}
          staggerChildren={0.09}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.25, ease: "easeOut" } }}
                className={`group relative bg-cloud hover:bg-petal rounded-2xl p-6 border border-deep/[0.04] transition-all duration-300 cursor-default ${feature.glow}`}
              >
                {/* Subtle hover shimmer line at top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-spring/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                <div
                  className={`w-10 h-10 rounded-xl ${feature.accent} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-[15px] text-deep mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-lichen text-[13px] leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
