'use client';import { motion } from 'framer-motion';
export function OrbitRing({className=''}:{className?:string}){return <motion.div className={`absolute rounded-full border border-neon/55 shadow-neon ${className}`} animate={{rotate:360}} transition={{duration:42,repeat:Infinity,ease:'linear'}}/>}
