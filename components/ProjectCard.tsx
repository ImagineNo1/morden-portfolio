'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article whileHover={{ y: -6, rotateX: 2, rotateY: -2 }} className="glass group rounded-3xl p-4">
      <div className="relative h-52 overflow-hidden rounded-2xl">
        <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <p className="mt-4 text-xs text-accent">#{String(project.id).padStart(3, '0')}</p>
      <div className="mt-2 flex items-center justify-between">
        <div><h3 className="font-medium">{project.title}</h3><p className="text-sm text-textMuted">{project.category}</p></div>
        <button className="rounded-full border border-line p-2 group-hover:border-neon"><ArrowUpRight size={16} /></button>
      </div>
    </motion.article>
  );
}
