import type { SiteContentShape } from "@/lib/defaultContent";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectVisual } from "@/components/visual/ProjectVisual";

type WorkContent = SiteContentShape["work"];

export function FeaturedProjects({ content }: { content: WorkContent }) {
  const featured = content.projects[0] || { number: "01", title: "Project", category: "Category", variant: "abstract-motion" };
  const small = content.projects.slice(1, 5);
  return (<section className="glass-panel p-6 md:p-10 lg:p-12"><Reveal className="grid gap-8 lg:grid-cols-[36%_64%]"><div className="flex flex-col justify-center"><p className="text-xs font-semibold uppercase tracking-[0.26em] text-neon">{content.label}</p><h1 className="mt-4 text-[44px] font-semibold leading-[1] tracking-[-0.045em] md:text-[62px]">{content.featuredTitle}<br /><span className="text-gradient-purple">{content.featuredHighlight}</span></h1><p className="mt-5 max-w-xs leading-7 text-white/60">{content.featuredDescription}</p><div className="mt-8"><MagneticButton href="/work">View All Works</MagneticButton></div></div><div className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-white/10 bg-black"><ProjectVisual variant={(featured.variant || "abstract-motion") as never} /><div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/45" /><div className="glass-card absolute right-7 top-1/2 w-[230px] -translate-y-1/2 p-6"><p className="text-lg font-semibold text-white">{featured.number}</p><h3 className="mt-5 text-2xl font-semibold">{featured.title}</h3><p className="mt-3 text-sm leading-6 text-white/55">{featured.category}</p><div className="mt-6"><MagneticButton href="/work">View Project</MagneticButton></div></div></div></Reveal><Reveal className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" delay={0.1}>{small.map((project) => <ProjectCard key={project.number} project={project} />)}</Reveal></section>);
}
