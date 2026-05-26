"use client";

import { motion } from "framer-motion";

type AbstractVortexProps = {
  className?: string;
};

export function AbstractVortex({ className = "" }: AbstractVortexProps) {
  return (
    <motion.div
      aria-hidden
      animate={{ rotate: 360 }}
      transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      className={`pointer-events-none relative overflow-hidden rounded-full ${className}`}
      style={{
        background:
          "radial-gradient(circle at 45% 45%, rgba(255,255,255,.35), rgba(139,92,246,.42) 12%, rgba(15,23,42,.95) 35%, rgba(0,0,0,.98) 68%)",
        boxShadow: "0 0 80px rgba(139,92,246,.35), inset 0 0 60px rgba(139,92,246,.22)",
      }}
    >
      <span className="absolute inset-[12%] rounded-full border border-neon/40" />
      <span className="absolute inset-[25%] rounded-full border border-white/10" />
      <span className="absolute left-1/2 top-1/2 h-[18%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/25 blur-xl" />
    </motion.div>
  );
}
