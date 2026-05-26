'use client';
import { motion } from 'framer-motion';
export function AbstractVortex({ className = '' }: { className?: string }) {
  return <motion.div className={`absolute ${className}`} animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}><div className='h-56 w-56 rounded-full border border-neon/50' /><div className='absolute inset-4 rounded-full border border-neon/30' /><div className='absolute inset-10 rounded-full bg-gradient-to-br from-neon/35 to-transparent blur-xl' /></motion.div>;
}
