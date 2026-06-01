"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type FadeDirection = "up" | "down" | "left" | "right" | "none";

interface FadeInOnScrollProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: ReactNode;
  /** Seconds before the animation starts. */
  delay?: number;
  /** Travel distance in px. */
  distance?: number;
  direction?: FadeDirection;
  duration?: number;
}

const offset = (direction: FadeDirection, distance: number) => {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
};

/**
 * Fades content in (with optional directional slide) the first time it scrolls
 * into view. Movement is dropped automatically when reduced-motion is on.
 */
export function FadeInOnScroll({
  children,
  delay = 0,
  distance = 28,
  direction = "up",
  duration = 0.6,
  ...rest
}: FadeInOnScrollProps) {
  const reduce = useReducedMotion();
  const hiddenOffset = reduce ? {} : offset(direction, distance);

  return (
    <motion.div
      initial={{ opacity: 0, ...hiddenOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
