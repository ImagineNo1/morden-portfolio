'use client';
import { motion } from 'framer-motion';
export function FloatingOrb({ className = '' }: { className?: string }) {
  return <motion.div className={`absolute rounded-full bg-[radial-gradient(circle_at_30%_30%,#b794f6,transparent_36%),radial-gradient(circle,#2a133f,#050816)] blur-[1px] ${className}`} animate={{ y: [0, -14, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />;
}
