import { MoreHorizontal } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/visual/ProjectVisual";

type InstagramCardProps = {
  project: Project;
};

export function InstagramCard({ project }: InstagramCardProps) {
  return (
    <article className="glass-card min-w-[210px] max-w-[210px] overflow-hidden p-3 transition duration-300 hover:-translate-y-1 hover:border-neon/40">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-neon/20 text-[10px] font-bold text-neon">
            {project.number}
          </span>
          <span className="text-xs font-medium text-white/70">seximon</span>
        </div>
        <MoreHorizontal size={16} className="text-white/45" />
      </div>

      <div className="relative h-[250px] overflow-hidden rounded-2xl border border-white/10">
        <ProjectVisual variant={project.variant} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      <div className="pt-4">
        <p className="text-xs text-accent">#{project.number}</p>
        <h3 className="mt-1 text-sm font-semibold text-white">{project.title}</h3>
        <p className="text-xs text-white/45">{project.category}</p>
      </div>
    </article>
  );
}
