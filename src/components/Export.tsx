"use client";

import { Globe2, Ship } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { FadeLeft, FadeUp, StaggerContainer } from "./AnimationUtils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const regions = [
  {
    name: "Middle East",
    ports: "Jebel Ali, Jeddah, Hamad, Khalifa",
    demand: "High demand in luxury hospitality, hotels, and retail sectors.",
    badge: "Active",
  },
  {
    name: "Europe",
    ports: "Rotterdam, Antwerp, Hamburg, Felixstowe",
    demand: "Leading strict compliance with plastic reduction mandates.",
    badge: "Active",
  },
  {
    name: "North America",
    ports: "Los Angeles, Newark, Savannah, Vancouver",
    demand: "Fast-growing adoption among airlines and premium brands.",
    badge: "Active",
  },
  {
    name: "Africa",
    ports: "Durban, Mombasa, Lagos, Port Said",
    demand: "Supporting sustainable developmental and tourism projects.",
    badge: "Expanding",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(2px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
};

export default function Export() {
  return (
    <section id="export" className="py-24 lg:py-32 bg-deep relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(93,186,114,0.04)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-spring/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-spring/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Pitch */}
          <FadeLeft className="lg:col-span-5 flex flex-col items-start">
            <span className="text-spring font-semibold text-[11px] uppercase tracking-[0.15em] mb-5">
              Export &amp; Logistics
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-petal tracking-tight mb-6 leading-[1.15]">
              Global Supply.
              <br />
              <span className="text-spring">Nature-Aligned.</span>
            </h2>

            <p className="text-petal/60 text-[15px] leading-relaxed mb-6 border-l-2 border-spring/40 pl-4 italic">
              &ldquo;We supply biodegradable packaged drinking water bottles and
              preforms to importers, distributors, hotels, airlines and private
              label brands worldwide.&rdquo;
            </p>

            <p className="text-petal/50 text-[14px] leading-relaxed mb-10">
              Leveraging robust logistics partners to guarantee secure,
              port-to-port deliveries. Our materials meet food-grade standards
              internationally, ensuring seamless customs clearing.
            </p>

            {/* Stats */}
            <StaggerContainer
              delayChildren={0.3}
              staggerChildren={0.12}
              className="grid grid-cols-2 gap-8 w-full pt-8 border-t border-petal/[0.08]"
            >
              {[
                { value: "50+", label: "Countries We Serve" },
                { value: "100%", label: "Logistics Security" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                  }}
                  className="flex flex-col"
                >
                  <span className="font-display font-bold text-3xl text-petal tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-petal/40 mt-1 uppercase tracking-wider font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </StaggerContainer>
          </FadeLeft>

          {/* Right: Region cards */}
          <StaggerContainer
            delayChildren={0.1}
            staggerChildren={0.1}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {regions.map((reg, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
                className="bg-petal/[0.05] backdrop-blur-sm rounded-2xl p-6 border border-petal/[0.08] hover:border-spring/25 hover:bg-petal/[0.09] transition-colors duration-300 flex flex-col justify-between group"
              >
                {/* Top shimmer on hover */}
                <div className="absolute top-0 left-0 right-0 h-[1px] rounded-t-2xl bg-gradient-to-r from-transparent via-spring/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-spring/10 text-spring flex items-center justify-center group-hover:bg-spring/20 transition-colors duration-300">
                      <Globe2 className="w-4.5 h-4.5" />
                    </div>
                    <span
                      className={`text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full ${
                        reg.badge === "Active"
                          ? "bg-spring/15 text-spring"
                          : "bg-amber-500/15 text-amber-400"
                      }`}
                    >
                      {reg.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-petal mb-2">
                    {reg.name}
                  </h3>
                  <p className="text-petal/50 text-[13px] leading-relaxed mb-4">
                    {reg.demand}
                  </p>
                </div>

                <div className="border-t border-petal/[0.06] pt-4 flex items-center gap-2.5 text-[12px] text-petal/40">
                  <Ship className="w-3.5 h-3.5 text-spring/60 shrink-0" />
                  <span className="font-medium truncate" title={reg.ports}>
                    {reg.ports}
                  </span>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
