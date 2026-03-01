"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface NavButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "glass" | "solid" | "outline";
  className?: string;
  isActive?: boolean;
  swap?: boolean;
}

export default function NavButton({
  children,
  icon,
  variant = "glass",
  className = "",
  isActive = false,
  swap = false,
  ...props
}: Readonly<NavButtonProps>) {
  const getVariantClasses = () => {
    switch (variant) {
      case "outline":
        return isActive
          ? "bg-gray-200 border-2 border-gray-200 text-black"
          : "bg-transparent border-2 border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-black";

      case "solid":
        return isActive
          ? "bg-white text-black"
          : "bg-gray-200 text-black hover:bg-white";

      case "glass":
      default:
        return isActive
          ? "bg-gray-400/70 backdrop-blur-lg border border-white/10 text-neutral-900 shadow-lg"
          : "bg-gray-400/60 backdrop-blur-lg border border-white/10 text-neutral-900 shadow-lg hover:bg-gray-400/70";
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
      className={`
        cursor-pointer relative flex items-center justify-center px-4 py-3
        font-medium rounded-full transition-colors duration-300
        ${getVariantClasses()} 
        ${className}
      `}
      {...props}
    >
      {variant === "glass" && (
        <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
      )}

      {swap ? (
        <span className="relative z-10 flex items-center gap-3">
          {children}
          {icon && <span className="mb-1">{icon}</span>}
        </span>
      ) : (
        <span className="relative z-10 flex items-center gap-3">
          {icon && <span className="mb-1">{icon}</span>}
          {children}
        </span>
      )}
    </motion.button>
  );
}
