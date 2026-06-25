"use client";

import { motion, MotionProps, Variants } from "framer-motion";
import { ReactNode } from "react";

// Typed cubic-bezier ease — Framer Motion requires a 4-tuple, not number[]
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ─── Shared Variants ───────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(2px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32, filter: "blur(2px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32, filter: "blur(2px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.93 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const stagger = (delayChildren = 0.07, staggerChildren = 0.09): Variants => ({
  hidden: {},
  show: {
    transition: {
      delayChildren,
      staggerChildren,
    },
  },
});

// ─── Wrapper Components ────────────────────────────────────────────

interface RevealProps extends Omit<MotionProps, "variants"> {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
  margin?: string;
}

/** Animate a single element into view from below */
export function FadeUp({ children, className, delay = 0, once = true, margin = "-60px", ...rest }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin }}
      variants={{
        hidden: { opacity: 0, y: 28, filter: "blur(2px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.65, delay, ease: EASE },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Animate from the left */
export function FadeLeft({ children, className, delay = 0, once = true, margin = "-60px", ...rest }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin }}
      variants={{
        hidden: { opacity: 0, x: -36, filter: "blur(2px)" },
        show: {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          transition: { duration: 0.7, delay, ease: EASE },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Animate from the right */
export function FadeRight({ children, className, delay = 0, once = true, margin = "-60px", ...rest }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin }}
      variants={{
        hidden: { opacity: 0, x: 36, filter: "blur(2px)" },
        show: {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          transition: { duration: 0.7, delay, ease: EASE },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Scale + fade in */
export function ScaleIn({ children, className, delay = 0, once = true, margin = "-60px", ...rest }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin }}
      variants={{
        hidden: { opacity: 0, scale: 0.94 },
        show: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, delay, ease: EASE },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container — pairs with fadeUp variants on children */
export function StaggerContainer({
  children,
  className,
  delayChildren = 0.05,
  staggerChildren = 0.1,
  once = true,
  margin = "-60px",
  ...rest
}: RevealProps & { delayChildren?: number; staggerChildren?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin }}
      variants={{
        hidden: {},
        show: { transition: { delayChildren, staggerChildren } },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
