import { ArrowUpRight } from "lucide-react";
import type { ProjectVisualVariant } from "@/components/visual/ProjectVisual";
import { ProjectVisual } from "@/components/visual/ProjectVisual";

export type CardProject = { number: string; title: string; category: string; variant?: ProjectVisualVariant | string };

export function ProjectCard({ project }: { project: CardProject }) {
  return <article className="group glass-card h-[250px] cursor-pointer overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-neon/45"><div className="relative h-full"><ProjectVisual variant={(project.variant || "abstract-motion") as ProjectVisualVariant} /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" /><div className="absolute bottom-5 left-5 right-5"><p className="mb-2 text-xs font-semibold text-accent">#{project.number}</p><h3 className="text-lg font-semibold text-white">{project.title}</h3><p className="text-sm text-white/55">{project.category}</p></div><button aria-label={`Open ${project.title}`} className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.05] text-white transition group-hover:border-neon/50 group-hover:bg-neon group-hover:text-white"><ArrowUpRight size={17} /></button></div></article>;
}
