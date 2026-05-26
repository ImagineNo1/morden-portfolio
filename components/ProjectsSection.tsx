import { SlidersHorizontal } from "lucide-react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

const categories = [
  "All Categories",
  "3D Animation",
  "Character Design",
  "Product Visual",
  "Branding",
  "Motion Graphics",
  "Instagram Design",
];

export function ProjectsSection() {
  return (
    <section id="projects" className="glass-panel p-6 md:p-10 lg:p-12">
      <Reveal className="flex flex-col gap-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neon">My Work</p>
            <h2 className="mt-4 text-[44px] font-semibold leading-[1] tracking-[-0.045em] md:text-[64px]">
              All
              <br />
              <span className="text-gradient-purple">Projects</span>
            </h2>
            <p className="mt-5 max-w-sm leading-7 text-white/60">
              Explore my complete collection of visual, motion and 3D work.
            </p>
          </div>

          <MagneticButton href="#work">View Featured</MagneticButton>
        </div>

        <div className="flex flex-col gap-5 border-y border-white/10 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                  index === 0
                    ? "border-neon/60 bg-neon/15 text-neon"
                    : "border-white/10 bg-white/[0.035] text-white/55 hover:border-neon/40 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <button className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-semibold text-white/70">
            <SlidersHorizontal size={14} />
            Filter
          </button>
        </div>
      </Reveal>

      <Reveal className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3" delay={0.08}>
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </Reveal>

      <div className="mt-9 flex justify-center">
        <MagneticButton href="#projects" variant="solid">
          Load More Projects
        </MagneticButton>
      </div>
    </section>
  );
}
