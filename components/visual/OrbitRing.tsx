"use client";

import { motion } from "framer-motion";

type OrbitRingProps = {
  className?: string;
};

export function OrbitRing({ className = "" }: OrbitRingProps) {
  return (
    <motion.div
      aria-hidden
      animate={{ rotate: 360 }}
      transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      className={`pointer-events-none absolute rounded-[50%] border border-neon/55 ${className}`}
      style={{
        boxShadow: "0 0 34px rgba(139,92,246,.42), inset 0 0 24px rgba(139,92,246,.14)",
      }}
    />
  );
}
