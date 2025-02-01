"use client";

import { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
}

interface AnimatedCardProps extends CardProps {
  initial: MotionProps["initial"];
  animate: MotionProps["animate"];
  transition: MotionProps["transition"];
}

const AnimatedCard = ({
  children,
  className = "",
  initial,
  animate,
  transition,
}: AnimatedCardProps) => (
  <motion.div
    initial={initial}
    animate={animate}
    transition={transition}
    className={`text-white rounded-2xl shadow-lg ${className}`}
  >
    {children}
  </motion.div>
);

export default AnimatedCard;