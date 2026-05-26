import { ProjectVisual } from '@/components/visual/ProjectVisual';
export function InstagramCard({ idx, title }: { idx: number; title: string }) {
  return <article className='glass-card min-w-[220px] p-3'><div className='mb-3 flex items-center justify-between text-xs text-textMuted'><span>● @seximon.design</span><span>⋯</span></div><div className='h-72'><ProjectVisual variant='instagram' /></div><h4 className='mt-3 text-sm font-medium'>{String(idx).padStart(2,'0')} {title}</h4><p className='text-xs text-textMuted'>Instagram Design</p></article>;
}
