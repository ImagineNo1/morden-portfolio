'use client';
import { useMemo, useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

const tabs = ['All Categories', '3D Animation', 'Character Design', 'Product Visual', 'Branding', 'Motion Graphics', 'Instagram Design'] as const;

export function ProjectGrid() {
  const [active, setActive] = useState<(typeof tabs)[number]>('All Categories');
  const [count, setCount] = useState(8);
  const filtered = useMemo(() => projects.filter((p) => p.featured && (active === 'All Categories' || p.category === active)), [active]);
  return (
    <section className="mt-8">
      <div className="mb-8 flex flex-wrap gap-3">{tabs.map((tab) => <button key={tab} onClick={() => setActive(tab)} className={`rounded-full border px-4 py-2 text-sm ${active===tab?'border-neon bg-neon/20':'border-line bg-white/5'}`}>{tab}</button>)}</div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filtered.slice(0, count).map((project) => <ProjectCard key={project.id} project={project} />)}</div>
      <div className="mt-10 flex gap-3"><button onClick={() => setCount((c) => c + 4)} className="rounded-full border border-line bg-white/5 px-6 py-3">Load More Projects</button><button className="rounded-full border border-neon bg-neon/20 px-6 py-3">View Featured</button></div>
    </section>
  );
}
