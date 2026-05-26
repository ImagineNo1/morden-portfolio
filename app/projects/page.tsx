import { InstagramProjects } from '@/components/InstagramProjects';
import { ProjectsSection } from '@/components/ProjectsSection';

export default function ProjectsPage() {
  return <div className='mx-auto max-w-[1320px] space-y-8 px-4 pb-16 pt-28 md:px-8'><ProjectsSection /><InstagramProjects /></div>;
}
