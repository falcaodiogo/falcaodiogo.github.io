"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="scroll-smooth"
    >
      {children}
    </motion.div>
  );
}

export default PageWrapper;
