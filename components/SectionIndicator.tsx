export function SectionIndicator({ active = 2 }: { active?: number }) {
  return <div className='absolute right-5 top-1/2 hidden -translate-y-1/2 items-center gap-3 lg:flex'><div className='h-52 w-px bg-white/20' /><div className='space-y-3 text-sm'>{[1,2,3,4,5].map((n)=><div key={n} className={`relative ${n===active?'text-accent':'text-white/45'}`}>{n===active&&<span className='absolute -left-3 top-1/2 h-4 w-0.5 -translate-y-1/2 bg-accent'/>}{String(n).padStart(2,'0')}</div>)}</div></div>;
}
