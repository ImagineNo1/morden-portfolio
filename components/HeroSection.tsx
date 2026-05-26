'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Floating3DObjects } from './Floating3DObjects';
import { SectionIndicator } from './SectionIndicator';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[42px] border border-line bg-bgSoft p-8 md:p-14">
      <Floating3DObjects />
      <SectionIndicator />
      <div className="grid items-end gap-10 lg:grid-cols-2">
        <div className="relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-semibold leading-tight md:text-7xl">Bringing Ideas<br/>to Life in 3D</motion.h1>
          <p className="mt-6 text-textMuted">3D Design · Animation · Visual Storytelling</p>
          <div className="mt-10"><Button>Explore Work</Button></div>
          <p className="mt-16 text-sm text-textMuted"><span className="text-accent">02</span> /05 Selected Projects</p>
        </div>
        <div className="relative h-[520px] w-full overflow-hidden rounded-3xl border border-line">
          <Image src="https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80" alt="night portrait" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/10" />
        </div>
      </div>
    </section>
  );
}
