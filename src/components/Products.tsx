"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: "sizes",
    title: "Eco Bottle Sizes",
    subtitle: "250ml · 500ml · 750ml · 1000ml",
    image: "/product_bottles.png",
    desc: "Our premium biodegradable bottles come in standard sizes designed for retail, hospitality, fitness, and travel. Ergonomic grip, glass-like clarity, and fully compatible with existing bottling lines.",
    specs: [
      "Sizes: 250ml, 500ml, 750ml, 1000ml",
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
    image: "/hero_bottle.png",
    desc: "Customize packaging with your own logos, labels, and caps. We manufacture sustainable packaged drinking water for luxury hotels, premium airlines, corporate offices, and eco-brands.",
    specs: [
      "Custom high-resolution label printing",
      "Eco-friendly paper or biodegradable labels",
      "Water Sourcing: Natural Himalayan spring/purified options",
      "Low minimum order quantities (MOQs)",
    ],
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <section id="products" className="py-24 lg:py-32 bg-petal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-spring font-semibold text-[11px] uppercase tracking-[0.15em] mb-4 block">
            Our Products
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-deep tracking-tight mb-4">
            Sustainable. Reliable. Premium.
          </h2>
          <p className="text-lichen text-[15px] leading-relaxed">
            Finished bottled water, preforms for local manufacturing, and
            bespoke private label solutions.
          </p>
        </div>

        {/* Product tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {products.map((prod) => (
            <button
              key={prod.id}
              onClick={() => setSelectedProduct(prod)}
              className={`px-5 py-2.5 rounded-full font-medium text-[13px] transition-all duration-200 cursor-pointer ${
                selectedProduct.id === prod.id
                  ? "bg-deep text-petal shadow-md"
                  : "bg-mist text-lichen hover:text-deep hover:bg-cloud border border-deep/[0.04]"
              }`}
            >
              {prod.title}
            </button>
          ))}
        </div>

        {/* Product display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProduct.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="bg-mist rounded-2xl border border-deep/[0.04] overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] bg-cloud">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-spring text-[11px] font-semibold uppercase tracking-[0.15em] mb-3">
                  {selectedProduct.subtitle}
                </span>
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-deep mb-4 tracking-tight">
                  {selectedProduct.title}
                </h3>
                <p className="text-lichen text-[15px] leading-relaxed mb-8">
                  {selectedProduct.desc}
                </p>

                <h4 className="font-display font-semibold text-[13px] text-deep uppercase tracking-wider mb-4">
                  Key Specifications
                </h4>
                <ul className="flex flex-col gap-3 mb-8">
                  {selectedProduct.specs.map((spec, index) => (
                    <li key={index} className="flex gap-3 items-start text-[14px] text-lichen">
                      <span className="w-1.5 h-1.5 rounded-full bg-spring mt-2 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-deep hover:bg-forest text-petal font-medium text-[14px] px-6 py-3 rounded-full shadow transition-all hover:shadow-md group w-fit"
                >
                  Inquire About Product
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
