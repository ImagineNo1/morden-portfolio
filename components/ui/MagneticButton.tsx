'use client';
import { motion } from 'framer-motion';
export function MagneticButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <motion.button whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`rounded-full border border-border bg-gradient-to-r from-neon to-neonDeep px-6 py-3 text-sm font-medium ${className}`}>{children}</motion.button>;
}
