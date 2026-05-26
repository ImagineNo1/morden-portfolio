'use client';import { motion } from 'framer-motion';
export function FloatingOrb({className='',duration=10}:{className?:string;duration?:number}){return <motion.div className={`absolute rounded-full bg-gradient-to-br from-neon/50 via-neon/20 to-black/20 blur-xl ${className}`} animate={{y:[0,-14,0],x:[0,6,0]}} transition={{duration,repeat:Infinity,ease:'easeInOut'}}/>}
