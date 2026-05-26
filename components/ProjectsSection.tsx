import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/cards/ProjectCard';
export function ProjectsSection() {
  const tabs = ['All Categories','3D Animation','Character Design','Product Visual','Branding','Motion Graphics','Instagram Design'];
  return <section className='glass-panel p-8 md:p-12'><div className='flex flex-wrap items-end justify-between gap-4'><div><h2 className='text-5xl font-semibold leading-none'>All <span className='text-gradient-purple'>Projects</span></h2><p className='mt-3 text-textMuted'>Explore my complete collection of work.</p></div><button className='rounded-full border border-border px-4 py-2 text-sm'>Filter</button></div><div className='mt-5 flex flex-wrap gap-2'>{tabs.map((tab)=><button key={tab} className='rounded-full border border-border px-4 py-2 text-xs text-textMuted hover:text-white'>{tab}</button>)}</div><div className='mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3'>{projects.map((p)=><ProjectCard key={p.id} project={p} />)}</div></section>;
}
