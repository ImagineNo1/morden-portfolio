"use client";

import Image from "next/image";
import { Box, Clapperboard, Feather, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { FloatingOrb } from "@/components/visual/FloatingOrb";
import { OrbitRing } from "@/components/visual/OrbitRing";
import { AbstractVortex } from "@/components/visual/AbstractVortex";

const services = [
  { title: "3D Design", icon: Box, text: "Creating stunning 3D models and scenes." },
  { title: "Animation", icon: Clapperboard, text: "Bringing ideas to life through smooth animation." },
  { title: "Visual Storytelling", icon: Feather, text: "Turning concepts into compelling narratives." },
  { title: "Branding", icon: Sparkles, text: "Designing visual identities that stand out." },
];

const tools = ["Blender", "Ae", "Ps", "Ai", "C4D", "Figma"];

export function AboutSection() {
  return (
    <section className="glass-panel p-6 md:p-10 lg:p-12">
      <Reveal className="grid gap-10 lg:grid-cols-[45%_55%]">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neon">About Me</p>

          <h1 className="mt-4 text-[44px] font-semibold leading-[1] tracking-[-0.045em] md:text-[64px]">
            I’m Designer &
            <br />
            <span className="text-gradient-purple">3D Animator</span>
          </h1>

          <p className="mt-5 max-w-md leading-7 text-white/62">
            I craft visual experiences that combine creativity, technology, and emotion into cinematic digital storytelling.
          </p>

          <div className="mt-8">
            <MagneticButton href="/work">View My Work</MagneticButton>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["5+ Years", "200+ Projects", "50+ Clients"].map((item) => (
              <div key={item} className="glass-card p-5">
                <p className="text-2xl font-semibold text-white">{item.split(" ")[0]}</p>
                <p className="mt-1 text-xs text-white/50">{item.replace(item.split(" ")[0], "").trim()}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[520px] overflow-hidden rounded-[30px] border border-white/10 bg-black">
          <Image
            src="/images/hero-portrait.jpg"
            alt="About portrait"
            fill
            className="object-cover object-[center_42%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-transparent to-transparent" />
          <OrbitRing className="bottom-24 left-[10%] h-52 w-[420px] rotate-[-18deg]" />
          <FloatingOrb className="left-12 top-16" size={58} />
          <FloatingOrb className="bottom-16 right-16" size={46} delay={1} dark />
        </div>
      </Reveal>

      <Reveal className="mt-10">
        <h2 className="text-2xl font-semibold">What I Do</h2>

        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div key={service.title} className="glass-card p-6 transition hover:border-neon/40">
                <Icon className="text-neon" size={28} />
                <h3 className="mt-5 font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{service.text}</p>
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal className="mt-10">
        <h2 className="text-2xl font-semibold">Tools I Use</h2>

        <div className="mt-5 flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-neon/35 bg-neon/10 px-5 py-3 text-sm font-semibold text-white"
            >
              {tool}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-12 grid gap-8 lg:grid-cols-[45%_55%]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neon">My Approach</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight">
            My Creative
            <br />
            <span className="text-gradient-purple">Approach</span>
          </h2>

          <div className="mt-7 space-y-5">
            {["Discover", "Design", "Develop", "Deliver"].map((step, index) => (
              <div key={step} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-sm text-white/70">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="font-semibold">{step}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/55">
                    {index === 0 && "Understanding the concept, goals, and audience."}
                    {index === 1 && "Crafting visuals and planning the story."}
                    {index === 2 && "Bringing everything to life with precision."}
                    {index === 3 && "Delivering high-quality work that makes impact."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative grid min-h-[360px] place-items-center overflow-hidden rounded-[28px] border border-white/10 bg-black">
          <AbstractVortex className="h-72 w-72" />
        </div>
      </Reveal>
    </section>
  );
}
