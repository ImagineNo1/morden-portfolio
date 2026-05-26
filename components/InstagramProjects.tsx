import { Instagram } from "lucide-react";
import { InstagramCard } from "@/components/cards/InstagramCard";
import { instagramProjects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function InstagramProjects() {
  return (
    <section className="glass-panel p-6 md:p-10 lg:p-12">
      <Reveal className="mb-7 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-neon/35 bg-neon/15 text-neon">
            <Instagram size={20} />
          </span>
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-semibold tracking-[-0.03em]">Instagram Projects</h2>
              <span className="rounded-full bg-neon/20 px-3 py-1 text-xs font-bold text-neon">12+</span>
            </div>
            <p className="mt-1 text-sm text-white/55">Social media layouts and campaign visuals.</p>
          </div>
        </div>

        <MagneticButton href="#projects">View All Instagram Projects</MagneticButton>
      </Reveal>

      <Reveal className="flex gap-5 overflow-x-auto pb-3" delay={0.1}>
        {instagramProjects.map((project) => (
          <InstagramCard key={project.number} project={project} />
        ))}
      </Reveal>
    </section>
  );
}
