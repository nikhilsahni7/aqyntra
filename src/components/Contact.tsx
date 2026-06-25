"use client";

import { useState } from "react";
import { Send, CheckCircle2, Building, Globe2, User, Mail, Plus, Minus, MessageSquare, Tag, MapPin, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeLeft, FadeRight, FadeUp } from "./AnimationUtils";

export default function Contact() {
  const [formData, setFormData] = useState({
    companyName: "",
    country: "",
    contactPerson: "",
    email: "",
    quantity: 10000,
    productType: "500ml Bottle",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.contactPerson.trim()) newErrors.contactPerson = "Contact person name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (formData.quantity < 1000) newErrors.quantity = "Minimum order quantity is 1,000 units";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const adjustQuantity = (amount: number) => {
    setFormData((prev) => ({
      ...prev,
      quantity: Math.max(1000, prev.quantity + amount),
    }));
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-cloud border rounded-xl text-deep text-[14px] focus:outline-none focus:ring-2 focus:ring-spring/20 transition-all duration-200 placeholder:text-lichen/40 ${
      errors[field] ? "border-red-400" : "border-deep/[0.06] focus:border-spring"
    }`;

  return (
    <section id="contact" className="py-24 lg:py-32 bg-mist relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[700px] h-[350px] bg-spring/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Info sidebar */}
          <FadeLeft className="lg:col-span-4 flex flex-col items-start">
            <span className="text-spring font-semibold text-[11px] uppercase tracking-[0.15em] mb-5">
              Contact Us
            </span>
            <h2 className="font-display font-bold text-3xl text-deep tracking-tight mb-4">
              Partner With Us
            </h2>
            <p className="text-lichen text-[15px] leading-relaxed mb-10">
              Our global sales team will review your quantities and provide a
              tailored quotation within 24 hours.
            </p>

            <div className="flex flex-col gap-5 w-full">
              {[
                {
                  icon: MapPin,
                  content: (
                    <div className="text-[13px] text-lichen leading-relaxed">
                      Vishal Singh Global<br />
                      B088, DLF Prime Tower, Pocket F,<br />
                      Okhla Industrial Area Phase I,<br />
                      New Delhi - 110020, India
                    </div>
                  ),
                },
                {
                  icon: Phone,
                  content: (
                    <a href="tel:+918059596425" className="text-[13px] text-lichen hover:text-deep transition-colors">
                      +91 8059596425
                    </a>
                  ),
                },
                {
                  icon: Mail,
                  content: (
                    <div className="flex flex-col">
                      <a href="mailto:info@aqyntra.com" className="text-[13px] text-lichen hover:text-deep transition-colors">
                        info@aqyntra.com
                      </a>
                      <a href="mailto:vishalsingh260796@gmail.com" className="text-[11px] text-lichen/50 hover:text-lichen transition-colors">
                        vishalsingh260796@gmail.com
                      </a>
                    </div>
                  ),
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex gap-3 items-start"
                  >
                    <div className="w-9 h-9 rounded-lg bg-spring/10 text-spring flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    {item.content}
                  </motion.div>
                );
              })}
            </div>
          </FadeLeft>

          {/* Right: Form */}
          <FadeRight delay={0.1} className="lg:col-span-8">
            <div className="bg-petal border border-deep/[0.04] rounded-2xl p-7 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-400">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-semibold text-lichen uppercase tracking-wider flex items-center gap-1.5">
                          <Building className="w-3 h-3 text-spring" />
                          Company Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Green Waters Inc."
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className={inputClass("companyName")}
                        />
                        {errors.companyName && (
                          <motion.span
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-[10px] font-medium"
                          >
                            {errors.companyName}
                          </motion.span>
                        )}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-semibold text-lichen uppercase tracking-wider flex items-center gap-1.5">
                          <Globe2 className="w-3 h-3 text-spring" />
                          Country
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. United Arab Emirates"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className={inputClass("country")}
                        />
                        {errors.country && (
                          <motion.span
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-[10px] font-medium"
                          >
                            {errors.country}
                          </motion.span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-semibold text-lichen uppercase tracking-wider flex items-center gap-1.5">
                          <User className="w-3 h-3 text-spring" />
                          Contact Person
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. John Doe"
                          value={formData.contactPerson}
                          onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                          className={inputClass("contactPerson")}
                        />
                        {errors.contactPerson && (
                          <motion.span
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-[10px] font-medium"
                          >
                            {errors.contactPerson}
                          </motion.span>
                        )}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-semibold text-lichen uppercase tracking-wider flex items-center gap-1.5">
                          <Mail className="w-3 h-3 text-spring" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. john@greenwaters.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={inputClass("email")}
                        />
                        {errors.email && (
                          <motion.span
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-[10px] font-medium"
                          >
                            {errors.email}
                          </motion.span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-semibold text-lichen uppercase tracking-wider flex items-center gap-1.5">
                          <Tag className="w-3 h-3 text-spring" />
                          Product Type
                        </label>
                        <select
                          value={formData.productType}
                          onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                          className="w-full px-4 py-3 bg-cloud border border-deep/[0.06] rounded-xl text-deep text-[14px] focus:outline-none focus:ring-2 focus:ring-spring/20 transition-all appearance-none cursor-pointer"
                        >
                          <option value="250ml Bottle">250ml Packaged Bottle</option>
                          <option value="500ml Bottle">500ml Packaged Bottle</option>
                          <option value="750ml Bottle">750ml Packaged Bottle</option>
                          <option value="Biodegradable Preforms">Biodegradable Preforms</option>
                          <option value="Private Label Manufacturing">Private Label Manufacturing</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-semibold text-lichen uppercase tracking-wider">
                          Quantity (Units)
                        </label>
                        <div className="flex items-center w-full bg-cloud border border-deep/[0.06] rounded-xl overflow-hidden">
                          <button
                            type="button"
                            onClick={() => adjustQuantity(-5000)}
                            className="px-3.5 py-3 hover:bg-mist text-lichen transition-colors cursor-pointer active:scale-95"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <input
                            type="number"
                            min="1000"
                            step="1000"
                            value={formData.quantity}
                            onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 0 })}
                            className="w-full py-3 text-center bg-transparent text-deep font-display font-semibold text-[14px] focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />
                          <button
                            type="button"
                            onClick={() => adjustQuantity(5000)}
                            className="px-3.5 py-3 hover:bg-mist text-lichen transition-colors cursor-pointer active:scale-95"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        {errors.quantity && (
                          <motion.span
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-[10px] font-medium"
                          >
                            {errors.quantity}
                          </motion.span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-semibold text-lichen uppercase tracking-wider flex items-center gap-1.5">
                        <MessageSquare className="w-3 h-3 text-spring" />
                        Additional Message
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Custom design demands, logistics requirements, shipping schedules..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-cloud border border-deep/[0.06] rounded-xl text-deep text-[14px] focus:outline-none focus:ring-2 focus:ring-spring/20 transition-all duration-200 resize-y placeholder:text-lichen/40"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01, y: -1 }}
                      whileTap={{ scale: 0.99 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-center gap-2 bg-deep hover:bg-forest text-petal font-semibold py-3.5 rounded-xl w-full transition-colors duration-300 shadow-md hover:shadow-lg mt-2 cursor-pointer group"
                    >
                      Send Business Inquiry
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.94, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center text-center py-16"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 0.15, type: "spring", stiffness: 200, damping: 14 }}
                      className="w-14 h-14 rounded-full bg-spring/10 text-spring flex items-center justify-center mb-5"
                    >
                      <CheckCircle2 className="w-8 h-8" />
                    </motion.div>
                    <h3 className="font-display font-bold text-2xl text-deep mb-3">
                      Inquiry Sent Successfully
                    </h3>
                    <p className="text-lichen text-[14px] max-w-md leading-relaxed mb-8">
                      Our sales team will review your request for{" "}
                      <strong>{formData.quantity.toLocaleString()} units</strong> of{" "}
                      <strong>{formData.productType}</strong> and reach out to{" "}
                      <strong>{formData.email}</strong> shortly.
                    </p>
                    <button
                      onClick={() => {
                        setFormData({
                          companyName: "",
                          country: "",
                          contactPerson: "",
                          email: "",
                          quantity: 10000,
                          productType: "500ml Bottle",
                          message: "",
                        });
                        setSubmitted(false);
                      }}
                      className="px-6 py-2.5 bg-mist hover:bg-cloud text-deep font-medium text-[14px] rounded-full transition-colors cursor-pointer hover:-translate-y-0.5 transition-all duration-200"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
