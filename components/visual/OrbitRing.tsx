'use client';
import { motion } from 'framer-motion';
export function OrbitRing({ className = '' }: { className?: string }) { return <motion.div className={`absolute rounded-[100%] border border-neon/60 shadow-[0_0_40px_rgba(139,92,246,.35)] ${className}`} animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }} />; }
