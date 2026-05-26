'use client';
import Image from 'next/image';
import { useState } from 'react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { SectionIndicator } from '@/components/SectionIndicator';
import { FloatingOrb } from '@/components/visual/FloatingOrb';
import { OrbitRing } from '@/components/visual/OrbitRing';
export function HeroSection() { const [src,setSrc]=useState('/images/hero-portrait.jpg');
return <section className='glass-panel noise-overlay relative min-h-[600px] overflow-hidden p-8 md:p-12'><SectionIndicator active={2} /><div className='grid gap-10 lg:grid-cols-[45%_55%]'><div className='flex flex-col justify-center'><p className='mb-6 text-xs uppercase tracking-[0.2em] text-neon'>3D Design · Animation · Visual Storytelling</p><h1 className='text-5xl font-semibold leading-[0.95] md:text-7xl'>Bringing Ideas<br/>to Life in 3D</h1><p className='mt-8 text-textMuted'>02 /05 Selected Projects</p><div className='mt-6'><MagneticButton>Explore Work</MagneticButton></div></div><div className='relative min-h-[440px] overflow-hidden rounded-[2rem] border border-border bg-bgAlt'><Image src={src} alt='Designer portrait' fill className='object-cover object-right md:object-[center_bottom]' onError={()=>setSrc('/images/portrait.svg')} /><div className='absolute inset-0 bg-gradient-to-l from-black/40 to-transparent'/><OrbitRing className='left-10 top-16 h-72 w-72' /><FloatingOrb className='left-6 top-8 h-16 w-16' /><FloatingOrb className='bottom-12 right-16 h-20 w-20' /></div></div></section>; }
