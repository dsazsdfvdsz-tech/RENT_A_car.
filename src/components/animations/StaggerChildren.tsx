"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion";
import type { ReactNode } from "react";

/** Item variant — use inside a <StaggerChildren> container. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

interface StaggerChildrenProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: ReactNode;
  /** Delay between each child, seconds. Mobile callers pass ~0.05. */
  stagger?: number;
  delayChildren?: number;
}

/**
 * Container that reveals its <StaggerItem> children one after another on scroll.
 */
export function StaggerChildren({
  children,
  stagger = 0.1,
  delayChildren = 0,
  ...rest
}: StaggerChildrenProps) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** A single staggered child. */
export function StaggerItem({
  children,
  ...rest
}: Omit<HTMLMotionProps<"div">, "ref"> & { children: ReactNode }) {
  return (
    <motion.div variants={staggerItem} {...rest}>
      {children}
    </motion.div>
  );
}
