"use client";

import { Award, Leaf, ShieldCheck, Recycle, Trees } from "lucide-react";
import { motion } from "framer-motion";

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

export default function Features() {
  return (
    <section className="py-20 bg-petal relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-deep tracking-tight mb-4">
            Why Biodegradable?
          </h2>
          <p className="text-lichen text-[15px] leading-relaxed">
            AQYNTRA merges materials science with daily hydration. Our organic solutions are replacing petroleum-based bottles globally.
          </p>
        </div>

        {/* Features strip */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group relative bg-cloud hover:bg-petal rounded-2xl p-6 border border-deep/[0.04] hover:border-spring/20 hover:shadow-lg hover:shadow-spring/[0.04] transition-all duration-300"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${feature.accent} flex items-center justify-center mb-4`}
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
        </motion.div>
      </div>
    </section>
  );
}
