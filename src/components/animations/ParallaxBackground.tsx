"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ParallaxBackgroundProps {
  children: ReactNode;
  className?: string;
  /** Vertical travel in px across the scroll range. */
  strength?: number;
}

/**
 * Subtle vertical parallax tied to scroll position. Disabled under
 * reduced-motion. Pair with `overflow-hidden` on the parent.
 */
export function ParallaxBackground({
  children,
  className = "",
  strength = 60,
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [-strength, strength],
  );

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
