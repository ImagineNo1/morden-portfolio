import { SlidersHorizontal } from "lucide-react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionIndicator } from "@/components/SectionIndicator";

import type { SiteContentShape } from "@/lib/defaultContent";

type WorkContent = SiteContentShape["work"];

export function ProjectsSection({ content }: { content: WorkContent }) {
  return (
    <section className="glass-panel p-6 md:p-10 lg:p-12">
      <SectionIndicator active={2} />

      <Reveal className="flex flex-col gap-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neon">{content.label}</p>

            <h1 className="mt-4 text-[44px] font-semibold leading-[1] tracking-[-0.045em] md:text-[64px]">
              {content.allTitle}
              <br />
              <span className="text-gradient-purple">{content.allHighlight}</span>
            </h1>

            <p className="mt-5 max-w-sm leading-7 text-white/60">
              {content.allDescription}
            </p>
          </div>

          <MagneticButton href="/work">View Featured</MagneticButton>
        </div>

        <div className="flex flex-col gap-5 border-y border-white/10 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            {content.categories.map((category, index) => (
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
        {content.projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </Reveal>

      <div className="mt-9 flex justify-center">
        <MagneticButton href="/work" variant="solid">
          Load More Projects
        </MagneticButton>
      </div>
    </section>
  );
}
