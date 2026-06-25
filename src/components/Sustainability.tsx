"use client";

import Image from "next/image";
import { Leaf, RefreshCw, BarChart2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-24 lg:py-32 bg-petal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-spring font-semibold text-[11px] uppercase tracking-[0.15em] mb-4 block">
            Sustainability & Science
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-deep tracking-tight mb-4">
            Designed for the Environment.
          </h2>
          <p className="text-lichen text-[15px] leading-relaxed">
            Bottles designed to integrate back into earth&rsquo;s natural loops — 
            from agricultural biomass to organic compost.
          </p>
        </div>

        {/* Visual story: Image + 3 pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-16">
          {/* Large image card spanning left */}
          <div className="lg:row-span-2 relative rounded-2xl overflow-hidden min-h-[320px] lg:min-h-0">
            <Image
              src="/decomposing_bottle_soil.png"
              alt="Biodegradable bottle decomposing naturally in soil"
              fill
              className="object-cover"
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
          </div>

          {/* Biodegradable Material */}
          <div className="bg-mist rounded-2xl p-7 border border-deep/[0.04] flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-spring/10 text-spring flex items-center justify-center mb-5">
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
                100% Plant-Derived Biomass Sourced
              </li>
              <li className="flex gap-2 items-center">
                <ShieldCheck className="w-3.5 h-3.5 text-spring shrink-0" />
                Zero petroleum chemical traces
              </li>
            </ul>
          </div>

          {/* Decomposition Cycle */}
          <div className="bg-mist rounded-2xl p-7 border border-deep/[0.04] flex flex-col">
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
                No toxic chemical micro-residues
              </li>
            </ul>
          </div>

          {/* Carbon Footprint — spans 2 cols */}
          <div className="lg:col-span-2 bg-mist rounded-2xl p-7 border border-deep/[0.04] flex flex-col">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl bg-spring/10 text-spring flex items-center justify-center shrink-0">
                <BarChart2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-[17px] text-deep mb-1">
                  Carbon Footprint Savings
                </h3>
                <p className="text-lichen text-[14px] leading-relaxed">
                  Shifting from crude oil to agricultural biomass locks carbon inside the product lifecycle.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-auto">
              {/* AQYNTRA bar */}
              <div>
                <div className="flex justify-between text-[12px] font-medium text-deep mb-1.5">
                  <span>AQYNTRA</span>
                  <span className="text-spring tabular-nums">1.2 kg CO₂/kg</span>
                </div>
                <div className="w-full bg-deep/[0.04] rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "45%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-spring h-full rounded-full"
                  />
                </div>
              </div>

              {/* PET bar */}
              <div>
                <div className="flex justify-between text-[12px] font-medium text-deep mb-1.5">
                  <span>Virgin PET</span>
                  <span className="text-lichen tabular-nums">2.2 kg CO₂/kg</span>
                </div>
                <div className="w-full bg-deep/[0.04] rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-lichen/40 h-full rounded-full"
                  />
                </div>
              </div>

              <p className="text-[10px] text-lichen/60 italic text-right mt-1">
                *Estimated figures based on agricultural biomass life-cycle assessments (LCA).
              </p>
            </div>
          </div>
        </div>

        {/* Ocean protection banner */}
        <div className="relative rounded-2xl overflow-hidden h-[240px] lg:h-[300px]">
          <Image
            src="/clean_ocean.png"
            alt="Clean ocean coral reef protected from plastic pollution"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep/80 via-deep/50 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 lg:px-14">
            <div className="max-w-md">
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-petal tracking-tight mb-3">
                Protecting Our Oceans
              </h3>
              <p className="text-petal/70 text-[14px] leading-relaxed">
                Every AQYNTRA bottle that decomposes naturally is one less piece
                of permanent plastic threatening marine ecosystems and coral reefs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
