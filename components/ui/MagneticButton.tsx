'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function MagneticButton({label}:{label:string}){return <motion.button whileHover={{y:-2,scale:1.02}} whileTap={{scale:.98}} className='inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm'>{label}<ArrowRight size={15}/></motion.button>}
