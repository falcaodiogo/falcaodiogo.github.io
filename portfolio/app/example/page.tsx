"use client";

// import TextPressure from "../components/textPressure";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { delay } from "motion";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-black text-white p-6 rounded-2xl shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen text-white p-4 md:p-8 grid gap-8 grid-cols-1 md:grid-cols-3 grid-rows-7">
      <motion.div
        initial={{ opacity: 0, scaleY: 0, originY: 1 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.2, ease: "easeOut", delay: 1.7 }}
        className="bg-gray-800 col-span-3 text-white p-6 rounded-2xl shadow-lg"
      >
        1
      </motion.div>

      <div className="md:col-span-2 grid grid-cols-8 gap-8 row-span-6">
        <motion.div
          initial={{ scaleX: 0, originX: 1 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.8 }}
          className="bg-gray-800 col-span-5 text-white p-6 rounded-2xl shadow-lg"
        >
          2
        </motion.div>

        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{
            x: ["-30%", "-30%", "-30%", "0%"],
            y: ["30%", "30%", "30%", "0%"],
            scale: [1.5, 1, 1, 1],
          }}
          transition={{
            times: [0, 0.5, 0.5, 0.5, 1],
            duration: 1.5,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="bg-gray-800 col-span-3 text-white p-6 rounded-2xl shadow-lg"
        >
          3
        </motion.div>

        <motion.div
          initial={{ scaleX: 0, scaleY: 0, originX: 1, originY: 0 }}
          animate={{ scaleX: 1, scaleY: 1 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.8 }}
          className="bg-gray-800 col-span-4 text-white p-6 rounded-2xl shadow-lg"
        >
          4
        </motion.div>

        <motion.div
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.7 }}
          className="bg-gray-800 col-span-4 text-white p-6 rounded-2xl shadow-lg"
        >
          5
        </motion.div>
      </div>

      <div className="grid h-full grid-rows-2 gap-8 row-span-6">
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.8 }}
          className="bg-gray-800 row-span-2 text-white p-6 rounded-2xl shadow-lg"
        >
          6
        </motion.div>
        <motion.div
          initial={{ scaleX: 0, scaleY: 0, originX: 0, originY: 0 }}
          animate={{ scaleX: 1, scaleY: 1 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.7 }}
          className="bg-gray-800 row-span-2 text-white p-6 rounded-2xl shadow-lg"
        >
          7
        </motion.div>
      </div>
    </div>
  );
}
