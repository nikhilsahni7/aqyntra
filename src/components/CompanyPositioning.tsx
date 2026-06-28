"use client";

import {
  Lightbulb,
  Palette,
  PackageCheck,
  ShieldCheck,
  FileText,
  Truck,
  Factory,
  ArrowRight,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { FadeUp, FadeLeft, FadeRight, StaggerContainer } from "./AnimationUtils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const manages = [
  {
    icon: Lightbulb,
    title: "Product Development",
    desc: "End-to-end biodegradable packaging innovation and R&D.",
  },
  {
    icon: Palette,
    title: "AQYNTRA Branding",
    desc: "Premium brand identity, design language and market positioning.",
  },
  {
    icon: PackageCheck,
    title: "Packaging Design",
    desc: "Bottle design, label systems and sustainable packaging architecture.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Rigorous quality control across all manufacturing partners.",
  },
  {
    icon: FileText,
    title: "Export Documentation",
    desc: "Complete trade compliance, certifications and customs paperwork.",
  },
  {
    icon: Truck,
    title: "Logistics Coordination",
    desc: "International shipping, port-to-port delivery and supply chain management.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(2px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: EASE },
  },
};

export default function CompanyPositioning() {
  return (
    <section className="py-24 lg:py-32 bg-deep relative overflow-hidden bg-grid-pattern-dark">
      {/* Ambient glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-spring/[0.06] rounded-full blur-[140px] pointer-events-none float-slow-1" />
      <div className="absolute bottom-[-10%] right-0 w-[400px] h-[400px] bg-spring/[0.04] rounded-full blur-[100px] pointer-events-none float-slow-2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <FadeUp className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-spring font-semibold text-[11px] uppercase tracking-[0.15em] mb-4 block">
            Company Positioning
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-petal tracking-tight mb-5">
            Premium Sustainable Hydration.
            <br />
            <span className="text-spring font-serif italic font-semibold">Partnership-Driven.</span>
          </h2>
          <p className="text-petal/55 text-[15px] leading-relaxed max-w-2xl mx-auto text-wrap-pretty">
            AQYNTRA is a premium sustainable hydration and packaging company
            supplying biodegradable bottles and preforms through approved
            manufacturing partners under the AQYNTRA brand.
          </p>
        </FadeUp>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: What AQYNTRA manages */}
          <FadeLeft className="lg:col-span-7">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-spring/10 border border-spring/20 mb-5">
                <span className="w-2 h-2 rounded-full bg-spring animate-pulse" />
                <span className="text-spring text-[11px] font-bold uppercase tracking-[0.12em]">
                  AQYNTRA Manages
                </span>
              </div>
              <h3 className="font-display font-semibold text-xl text-petal mb-2">
                Core Business Functions
              </h3>
              <p className="text-petal/45 text-[14px] leading-relaxed">
                End-to-end brand and supply chain management — from product
                concept to international delivery.
              </p>
            </div>

            <StaggerContainer
              delayChildren={0.1}
              staggerChildren={0.08}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {manages.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    whileHover={{
                      y: -5,
                      scale: 1.015,
                      transition: { duration: 0.25, ease: "easeOut" },
                    }}
                    className="group bg-petal/[0.03] hover:bg-petal/[0.07] rounded-xl p-5 border border-petal/[0.05] hover:border-spring/30 hover:shadow-[0_15px_30px_rgba(93,186,114,0.06)] transition-all duration-300 cursor-default relative overflow-hidden"
                  >
                    {/* Hover glow radial overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(93,186,114,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    {/* Hover shimmer */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-spring/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-spring/10 text-spring flex items-center justify-center shrink-0 group-hover:bg-spring/20 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-[14px] text-petal mb-1 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-petal/40 text-[12px] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </StaggerContainer>
          </FadeLeft>

          {/* Right: Manufacturing Partner Model */}
          <FadeRight delay={0.15} className="lg:col-span-5">
            <div className="bg-petal/[0.03] hover:bg-petal/[0.06] border border-petal/[0.08] hover:border-spring/25 rounded-2xl p-7 lg:p-8 relative overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(93,186,114,0.05)]">
              {/* Decorative corner glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-spring/[0.08] rounded-full blur-[40px] pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-petal/[0.06] border border-petal/[0.1] mb-6">
                  <Factory className="w-3.5 h-3.5 text-petal/60" />
                  <span className="text-petal/60 text-[11px] font-bold uppercase tracking-[0.12em]">
                    Production Model
                  </span>
                </div>

                <h3 className="font-display font-semibold text-xl text-petal mb-4">
                  Approved Manufacturing
                  <br />
                  <span className="text-spring font-serif italic font-semibold">Partners</span>
                </h3>

                <p className="text-petal/50 text-[14px] leading-[1.8] mb-6">
                  Production is undertaken through approved manufacturing
                  partners. AQYNTRA maintains strict oversight of quality,
                  branding consistency and compliance at every stage.
                </p>

                {/* Visual separator */}
                <div className="border-t border-petal/[0.08] pt-6 mb-6">
                  <span className="text-spring text-[10px] font-bold uppercase tracking-[0.14em] block mb-4">
                    Partnership Framework
                  </span>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Preform manufacturing partners",
                      "Bottle blowing facilities",
                      "Bottling and filling partners",
                      "Quality-audited supply chain",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.3 + i * 0.08,
                          ease: EASE,
                        }}
                        className="flex items-center gap-3 text-[13px] text-petal/55 font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-spring shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-spring text-[13px] font-semibold group hover:gap-3 transition-all duration-300"
                >
                  Partner With AQYNTRA
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
