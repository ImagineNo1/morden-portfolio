'use client';
import { motion } from 'framer-motion';
import { ProjectItem } from '@/data/projects';
import { ProjectVisual } from '@/components/visual/ProjectVisual';
export function ProjectCard({ project }: { project: ProjectItem }) {
  return <motion.article whileHover={{ y: -6 }} className='glass-card group p-3'><div className='h-48 overflow-hidden rounded-2xl'><ProjectVisual variant={project.variant} /></div><div className='mt-4 flex items-start justify-between'><div><p className='text-xs text-textMuted'>{project.id}</p><h4 className='font-semibold'>{project.title}</h4><p className='text-sm text-textMuted'>{project.category}</p></div><div className='rounded-full border border-border p-2'>↗</div></div></motion.article>;
}
