import { InstagramProjects } from '@/components/InstagramProjects';
import { ProjectGrid } from '@/components/ProjectGrid';

export default function ProjectsPage(){return <div className="rounded-[42px] border border-line bg-bgAlt p-8"><h1 className="text-6xl font-semibold">All Projects</h1><p className="mt-4 text-textMuted">Explore my complete collection of work.</p><ProjectGrid/><InstagramProjects/></div>}
