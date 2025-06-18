"use client";

import { motion } from "motion/react";
import AnimatedCard from "./animatedCard";

export default function digitalSkills() {
  return (
    <AnimatedCard
      initial={{ scaleY: 0, originY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.2, ease: "easeOut", delay: 1.7 }}
      className="bg-variant col-span-6 md:col-span-4 p-6"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="font-sans font-extrabold text-foreground text-3xl p-8"
      >
        Digital Skills
      </motion.h1>

      <div className="flex flex-wrap gap-4 ps-8 pb-8">
        <div className="border-solid border-2 border-primary p-4 rounded-xl transition hover:bg-surface hover:border-terciary">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.1 }}
            className="text-foreground font-semibold"
          >
            Kotlin
          </motion.h1>
        </div>
        <div className="border-solid border-2 border-primary p-4 rounded-xl transition hover:bg-surface hover:border-terciary">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            className="text-foreground font-semibold"
          >
            Flutter
          </motion.h1>
        </div>
        <div className="border-solid border-2 border-primary p-4 rounded-xl transition hover:bg-surface hover:border-terciary">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.1 }}
            className="text-foreground font-semibold"
          >
            TypeScript
          </motion.h1>
        </div>
        <div className="border-solid border-2 border-primary p-4 rounded-xl transition hover:bg-surface hover:border-terciary">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.3 }}
            className="text-foreground font-semibold"
          >
            Java
          </motion.h1>
        </div>
        <div className="border-solid border-2 border-primary p-4 rounded-xl transition hover:bg-surface hover:border-terciary">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            className="text-foreground font-semibold"
          >
            React
          </motion.h1>
        </div>
        <a href="./CV.pdf" download="cv">
          <div className="border-solid border-2 border-primary p-4 rounded-xl transition hover:bg-primary hover:border-terciary">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.1 }}
              className="text-foreground font-semibold"
            >
              See others in CV
            </motion.h1>
          </div>
        </a>
      </div>
    </AnimatedCard>
  );
}
