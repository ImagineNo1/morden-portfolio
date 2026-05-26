"use client";

import { motion } from "framer-motion";

type FloatingOrbProps = {
  className?: string;
  size?: number;
  delay?: number;
  dark?: boolean;
};

export function FloatingOrb({ className = "", size = 72, delay = 0, dark = false }: FloatingOrbProps) {
  return (
    <motion.span
      aria-hidden
      animate={{ y: [0, -16, 0], x: [0, 8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay }}
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: dark
          ? "radial-gradient(circle at 30% 28%, rgba(255,255,255,.24), rgba(3,7,18,.95) 42%, rgba(0,0,0,.95))"
          : "radial-gradient(circle at 30% 28%, rgba(255,255,255,.55), #8B5CF6 28%, #2e1065 68%, rgba(0,0,0,.8))",
        boxShadow: "0 0 42px rgba(139,92,246,.35)",
      }}
    />
  );
}
