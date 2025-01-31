"use client";

import { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => (
  <div className={`bg-black text-white p-6 rounded-2xl shadow-lg ${className}`}>
    {children}
  </div>
);

interface AnimatedCardProps extends CardProps {
  initial: MotionProps["initial"];
  animate: MotionProps["animate"];
  transition: MotionProps["transition"];
}

const AnimatedCard = ({ children, className = "", initial, animate, transition }: AnimatedCardProps) => (
  <motion.div initial={initial} animate={animate} transition={transition} className={`bg-gray-800 text-white p-6 rounded-2xl shadow-lg ${className}`}>
    {children}
  </motion.div>
);

export default function Page() {
  return (
    <div className="min-h-screen text-white p-4 md:p-8 grid gap-8 grid-cols-1 md:grid-cols-3 grid-rows-7">
      <AnimatedCard 
        initial={{ opacity: 0, scaleY: 0, originY: 1 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.2, ease: "easeOut", delay: 1.7 }}
        className="col-span-3"
      >
        1
      </AnimatedCard>

      <div className="md:col-span-2 grid grid-cols-8 gap-8 row-span-6">
        <AnimatedCard 
          initial={{ scaleX: 0, originX: 1 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.8 }}
          className="col-span-5"
        >
          2
        </AnimatedCard>

        <AnimatedCard 
          initial={{ opacity: 0 }}
          animate={{ x: ["-30%", "-30%", "-30%", "0%"], y: ["30%", "30%", "30%", "0%"], scale: [1.5, 1, 1, 1], opacity: [1, 1, 1, 1] }}
          transition={{ times: [0, 0.5, 0.5, 0.5, 1], duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="col-span-3"
        >
          3
        </AnimatedCard>

        <AnimatedCard 
          initial={{ scaleX: 0, scaleY: 0, originX: 1, originY: 0 }}
          animate={{ scaleX: 1, scaleY: 1 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.7 }}
          className="col-span-4"
        >
          4
        </AnimatedCard>

        <AnimatedCard 
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.8 }}
          className="col-span-4"
        >
          5
        </AnimatedCard>
      </div>

      <div className="grid h-full grid-rows-2 gap-8 row-span-6">
        <AnimatedCard 
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.8 }}
          className="row-span-2"
        >
          6
        </AnimatedCard>
        <AnimatedCard 
          initial={{ scaleX: 0, scaleY: 0, originX: 0, originY: 0 }}
          animate={{ scaleX: 1, scaleY: 1 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.7 }}
          className="row-span-2"
        >
          7
        </AnimatedCard>
      </div>
    </div>
  );
}
