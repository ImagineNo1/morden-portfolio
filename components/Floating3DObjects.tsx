'use client';
import { motion } from 'framer-motion';

export function Floating3DObjects() {
  return (
    <>
      <motion.div animate={{ y: [0, -18, 0] }} transition={{ repeat: Infinity, duration: 10 }} className="absolute -left-10 top-20 h-32 w-32 rounded-full bg-neon/20 blur-2xl" />
      <motion.div animate={{ y: [0, 16, 0], x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 12 }} className="absolute right-24 top-24 h-24 w-24 rounded-full border border-neon/50" />
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 35, ease: 'linear' }} className="absolute right-[18%] top-1/2 h-56 w-56 rounded-full border border-neon/25" />
    </>
  );
}
