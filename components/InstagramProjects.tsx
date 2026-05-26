import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { instagramProjects } from '@/data/projects';

export function InstagramProjects() {
  return (
    <section className="mt-20 rounded-[36px] border border-line bg-bgSoft/70 p-8">
      <div className="mb-7 flex items-center justify-between"><h2 className="text-3xl font-semibold">Instagram Projects <span className="ml-2 rounded-full bg-neon/20 px-3 py-1 text-sm text-neon">12+</span></h2></div>
      <div className="flex gap-4 overflow-x-auto pb-3">{instagramProjects.map((p) => <article key={p.id} className="glass min-w-[240px] rounded-3xl p-3"><div className="mb-2 flex items-center gap-2 text-xs text-textMuted"><Instagram size={14}/>Instagram Design</div><div className="relative h-72 overflow-hidden rounded-2xl"><Image src={p.image} alt={p.title} fill className="object-cover" /></div><h4 className="mt-3">{p.title}</h4></article>)}</div>
      <button className="mt-8 rounded-full border border-line bg-white/5 px-6 py-3">View All Instagram Projects</button>
    </section>
  );
}
