"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, Target, Sparkles, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "vision",
    title: "Vision",
    icon: Eye,
    content:
      "To pioneer the global transition to nature-aligned packaging, rendering traditional single-use plastics obsolete. We envision a future where packaging naturally blends back into the environment without leaving toxic residues or microplastics behind.",
  },
  {
    id: "mission",
    title: "Mission",
    icon: Target,
    content:
      "To deliver high-performance, cost-effective biodegradable packaging solutions and preforms to importers, distributors, hotels, airlines, and brands worldwide. We empower enterprises to adopt sustainable operations without compromising on quality or production speed.",
  },
  {
    id: "commitment",
    title: "Commitment",
    icon: Sparkles,
    content:
      "We commit to strict ecological integrity. All of our material blends are designed to degrade into non-toxic components, lowering raw carbon footprints by over 45% compared to virgin PET, and maintaining complete circular economy standards.",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <section id="about" className="py-24 lg:py-32 bg-mist relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Story and Tabs */}
          <div className="flex flex-col items-start">
            <span className="text-spring font-semibold text-[11px] uppercase tracking-[0.15em] mb-5">
              About AQYNTRA
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-deep tracking-tight mb-5 leading-[1.15]">
              A Small Change Today,
              <br />
              <span className="text-spring">A Better Tomorrow</span>
            </h2>
            <p className="text-lichen text-[15px] leading-relaxed mb-10 max-w-lg">
              AQYNTRA was born out of a simple belief — that sustainability
              should be part of everyday life. Our biodegradable water bottles
              are designed to reduce plastic waste and protect the environment
              for future generations.
            </p>

            {/* Tabs */}
            <div className="flex gap-1 mb-5 bg-petal rounded-xl p-1 border border-deep/[0.04]">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-medium text-[13px] transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-deep text-petal shadow-sm"
                        : "text-lichen hover:text-deep"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {tab.title}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="min-h-[120px] w-full">
              <AnimatePresence mode="wait">
                {tabs.map((tab) => {
                  if (tab.id !== activeTab) return null;
                  return (
                    <motion.p
                      key={tab.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="text-lichen text-[15px] leading-relaxed max-w-lg"
                    >
                      {tab.content}
                    </motion.p>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Image + Quote */}
          <div className="flex flex-col gap-5">
            {/* Image card */}
            <div className="relative h-[340px] lg:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/hero_bottle.png"
                alt="Biodegradable water bottle"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/50 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="text-petal text-[13px] font-medium bg-deep/40 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                  Natural Packaged Drinking Water
                </span>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-petal rounded-2xl p-7 border border-deep/[0.04] relative overflow-hidden">
              <Quote className="w-20 h-20 text-spring/[0.06] absolute -right-2 -bottom-2 rotate-180" />
              <div className="w-8 h-8 rounded-lg bg-spring/10 flex items-center justify-center text-spring mb-4">
                <Quote className="w-4 h-4" />
              </div>
              <blockquote className="font-display font-semibold text-lg text-deep leading-snug mb-3 relative z-10">
                &ldquo;We don&rsquo;t just make bottles, we protect tomorrow.&rdquo;
              </blockquote>
              <div className="flex items-center gap-2">
                <span className="w-4 h-[2px] bg-spring rounded-full" />
                <span className="text-[11px] font-semibold text-lichen tracking-wider uppercase">
                  AQYNTRA Team
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
