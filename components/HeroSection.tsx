"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionIndicator } from "./SectionIndicator";
import { MagneticButton } from "./ui/MagneticButton";
import { FloatingOrb } from "./visual/FloatingOrb";
import { OrbitRing } from "./visual/OrbitRing";

export function HeroSection() {
  return (
    <section className="glass-panel min-h-[620px] p-6 md:p-10 lg:p-12">
      <SectionIndicator active={2} />

      <div className="purple-haze -left-24 top-20 h-72 w-72" />
      <div className="purple-haze bottom-0 right-16 h-96 w-96 opacity-60" />

      <div className="grid min-h-[520px] items-center gap-10 lg:grid-cols-[43%_57%]">
        <div className="relative z-10 flex h-full flex-col justify-center lg:pl-2">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 text-xs font-semibold uppercase tracking-[0.28em] text-neon"
          >
            3D Design · Animation · Visual Storytelling
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08 }}
            className="max-w-[560px] text-[48px] font-semibold leading-[0.98] tracking-[-0.055em] text-white md:text-[70px]"
          >
            Bringing Ideas
            <br />
            to Life in <span className="text-gradient-purple">3D</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18 }}
            className="mt-7 max-w-sm text-base leading-7 text-white/62"
          >
            I create clean, cinematic 3D visuals and motion experiences full of character.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28 }}
            className="mt-9 flex items-center gap-5"
          >
            <MagneticButton href="#work" variant="solid">
              Explore Work
            </MagneticButton>
            <span className="text-sm text-white/55">
              <span className="font-semibold text-accent">02</span> /05 Selected Projects
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.1 }}
          className="relative h-[520px] overflow-hidden rounded-[30px] border border-white/10 bg-black"
        >
          <Image
            src="/images/hero-portrait.jpg"
            alt="SEXIMON designer portrait"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <OrbitRing className="bottom-20 left-[18%] h-56 w-[420px] rotate-[-18deg]" />
          <FloatingOrb className="left-14 top-16" size={72} delay={0.2} />
          <FloatingOrb className="bottom-20 right-24" size={42} delay={1.3} dark />
          <FloatingOrb className="right-20 top-20" size={96} delay={0.8} />

          <div className="absolute bottom-8 left-8 max-w-[260px] rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-md">
            <p className="text-4xl leading-none text-neon">“</p>
            <p className="text-sm leading-6 text-white/70">
              I don’t just create visuals, I tell stories that connect.
            </p>
            <p className="mt-3 text-sm font-semibold text-neon">— Seximon</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
