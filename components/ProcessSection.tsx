import { CheckCircle2, Cuboid, Lightbulb, PenTool } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { AbstractVortex } from "@/components/visual/AbstractVortex";

const steps = [
  { title: "Discover", text: "Understanding the concept, audience, and creative direction.", icon: Lightbulb },
  { title: "Design", text: "Crafting visual systems, moodboards, and strong compositions.", icon: PenTool },
  { title: "Develop", text: "Building 3D scenes, motion, lighting, and production details.", icon: Cuboid },
  { title: "Deliver", text: "Finalizing polished outputs that feel premium and memorable.", icon: CheckCircle2 },
];

export function ProcessSection() {
  return (
    <section id="process" className="glass-panel p-6 md:p-10 lg:p-12">
      <Reveal className="grid gap-10 lg:grid-cols-[32%_68%]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neon">My Approach</p>
          <h2 className="mt-4 text-[44px] font-semibold leading-[1] tracking-[-0.045em] md:text-[60px]">
            My Creative
            <br />
            <span className="text-gradient-purple">Process</span>
          </h2>
          <p className="mt-5 leading-7 text-white/60">
            A clear process that turns ideas into impactful visual experiences.
          </p>

          <div className="mt-10 hidden lg:block">
            <AbstractVortex className="h-56 w-56" />
          </div>
        </div>

        <div className="relative grid gap-5 md:grid-cols-2">
          <span className="absolute left-1/2 top-1/2 hidden h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-neon/45 to-transparent md:block" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="glass-card group min-h-[210px] p-6 transition duration-300 hover:-translate-y-1 hover:border-neon/45">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-neon/35 bg-neon/15 text-neon">
                    <Icon size={22} />
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{step.text}</p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
