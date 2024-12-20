"use client";

import { useRef } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  UseInViewOptions,
  Variants,
} from "framer-motion";

type MarginType = UseInViewOptions["margin"];

type TransitionType = "opacity" | "width" | "both"; // Define transition types

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variants; // Allow overriding the variants
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: MarginType;
  blur?: string;
  transitionType?: TransitionType; // New prop to define the transition type
}

export default function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  blur = "0px",
  transitionType = "opacity", // Default to opacity
}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;

  // Define variants based on transitionType
  const getVariants = (): Variants => {
    switch (transitionType) {
      case "width":
        return {
          hidden: { width: "0%", opacity: 1, filter: `blur(${blur})` },
          visible: { width: "100%", opacity: 1, filter: `blur(0px)` },
        };
      case "both":
        return {
          hidden: { width: "0%", opacity: 0, filter: `blur(${blur})` },
          visible: { width: "100%", opacity: 1, filter: `blur(0px)` },
        };
      default: // "opacity"
        return {
          hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
          visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
        };
    }
  };

  const combinedVariants = variant || getVariants();

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
