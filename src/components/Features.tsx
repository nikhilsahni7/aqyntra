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
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    desc: "Made from plant-derived raw materials that leave no harmful chemical traces.",
    accent: "bg-[#E8F5E9] text-[#2E7D32]",
  },
  {
    icon: Trees,
    title: "Sustainable Future",
    desc: "Reducing dependence on petroleum-based polymers, cutting greenhouse gas emissions.",
    accent: "bg-[#E3F2FD] text-[#1565C0]",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Non-Toxic",
    desc: "100% safe. Free of harmful toxins, heavy metals, bisphenols, and microplastics.",
    accent: "bg-[#FFF3E0] text-[#E65100]",
  },
  {
    icon: Recycle,
    title: "Circular Solution",
    desc: "A closed-loop cycle. Manufactured from biomass, fully recyclable, returns to earth.",
    accent: "bg-[#F3E5F5] text-[#6A1B9A]",
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
    <section className="py-20 bg-petal relative overflow-hidden">
      {/* Subtle bottom-right glow */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-spring/[0.05] rounded-full blur-[100px] pointer-events-none" />

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
                whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
                className="group relative bg-cloud hover:bg-petal rounded-2xl p-6 border border-deep/[0.04] hover:border-spring/20 hover:shadow-lg hover:shadow-spring/[0.06] transition-colors duration-300 cursor-default"
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
