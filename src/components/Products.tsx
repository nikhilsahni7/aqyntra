"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FadeUp, StaggerContainer } from "./AnimationUtils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const products = [
  {
    id: "sizes",
    title: "Eco Bottle Sizes",
    subtitle: "250ml · 500ml · 1000ml",
    image: "/bottles.jpeg",
    desc: "Our premium biodegradable bottles come in standard sizes designed for retail, hospitality, airlines and private-label brands. Ergonomic grip, glass-like clarity, and fully compatible with existing bottling lines.",
    specs: [
      "Sizes: 250ml, 500ml, 1000ml",
      "Caps: Standard 28mm organic thread caps",
      "Decomposition: Designed to reduce long-term environmental footprint",
      "Saves up to 45% carbon emissions during manufacture",
    ],
  },
  {
    id: "preforms",
    title: "Biodegradable Preforms",
    subtitle: "For Local Bottle Blowing",
    image: "/product_preforms.png",
    desc: "Import preforms to blow bottles locally! Designed to fit standard PET bottle-blowing machinery (stretch blow molding). Dramatically reduces shipping volume and logistics costs.",
    specs: [
      "Material: Biodegradable polymer blend",
      "Neck Finish: 28 PCO 1810 / 1881 standard threads",
      "Weight Options: Customized based on bottle design",
      "Logistics Benefit: Ships flat-packed to minimize carbon footprint",
    ],
  },
  {
    id: "private",
    title: "Private Label",
    subtitle: "Custom Brand Solutions",
    image: "/bottles.jpeg",
    desc: "Customize packaging with your own logos, labels, and caps. We manufacture sustainable packaged drinking water for luxury hotels, premium airlines, corporate offices, and eco-brands.",
    specs: [
      "Custom high-resolution label printing",
      "Eco-friendly paper or biodegradable labels",
      "Water sourcing options available based on customer requirements.",
      "Flexible MOQ programs available subject to production schedules.",
    ],
  },
];

const specVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <section id="products" className="py-24 lg:py-32 bg-petal relative overflow-hidden bg-grid-pattern">
      {/* Ambient glows */}
      <div className="absolute left-[-10%] top-[-10%] w-[500px] h-[500px] bg-spring/[0.04] rounded-full blur-[120px] pointer-events-none float-slow-1" />
      <div className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-spring/[0.03] rounded-full blur-[120px] pointer-events-none float-slow-2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <FadeUp className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-spring font-semibold text-[11px] uppercase tracking-[0.15em] mb-4 block">
            Our Products
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-deep tracking-tight mb-4">
            Sustainable. Reliable. <span className="font-serif italic font-semibold text-spring">Premium.</span>
          </h2>
          <p className="text-lichen text-[15px] leading-relaxed">
            Finished bottled water, preforms for local manufacturing, and
            bespoke private label solutions.
          </p>
        </FadeUp>

        {/* Product tabs */}
        <FadeUp delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {products.map((prod) => (
              <button
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className={`px-5 py-2.5 rounded-full font-medium text-[13px] transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-95 ${
                  selectedProduct.id === prod.id
                    ? "bg-deep text-petal shadow-[0_4px_14px_rgba(10,31,20,0.18)] scale-[1.03]"
                    : "bg-mist text-lichen hover:text-deep hover:bg-cloud border border-deep/[0.04] hover:shadow-sm"
                }`}
              >
                {prod.title}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Product display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProduct.id}
            initial={{ opacity: 0, y: 16, filter: "blur(3px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(3px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-mist hover:bg-cloud/40 rounded-2xl border border-deep/[0.05] hover:border-spring/25 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(93,186,114,0.04)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] bg-cloud overflow-hidden group">
                {/* Subtle border separator on desktop */}
                <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-deep/[0.03] hidden lg:block z-10" />
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </div>

              {/* Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-spring text-[11px] font-semibold uppercase tracking-[0.15em] mb-3"
                >
                  {selectedProduct.subtitle}
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="font-display font-bold text-2xl lg:text-3xl text-deep mb-4 tracking-tight"
                >
                  {selectedProduct.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-lichen text-[15px] leading-relaxed mb-8"
                >
                  {selectedProduct.desc}
                </motion.p>

                <h4 className="font-display font-semibold text-[13px] text-deep uppercase tracking-wider mb-4">
                  Key Specifications
                </h4>
                <StaggerContainer
                  delayChildren={0.25}
                  staggerChildren={0.07}
                  className="flex flex-col gap-3 mb-8"
                  once={false}
                >
                  {selectedProduct.specs.map((spec, index) => (
                    <motion.li
                      key={index}
                      variants={specVariants}
                      className="flex gap-3 items-start text-[14px] text-lichen list-none"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-spring mt-2 shrink-0" />
                      <span>{spec}</span>
                    </motion.li>
                  ))}
                </StaggerContainer>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-deep hover:bg-forest text-petal font-medium text-[14px] px-6 py-3 rounded-full shadow transition-all hover:shadow-md hover:-translate-y-0.5 group w-fit"
                  >
                    Inquire About Product
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
