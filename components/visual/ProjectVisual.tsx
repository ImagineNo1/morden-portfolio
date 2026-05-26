export type VisualVariant='abstract-motion'|'product-ring'|'character'|'brand-symbol'|'motion-sphere'|'helmet'|'glass-cube'|'sneaker'|'bottle'|'watch'|'instagram';
const map:Record<VisualVariant,string>={
'abstract-motion':'radial-gradient(circle at 20% 20%, #8B5CF6aa, transparent 40%), linear-gradient(145deg,#101a3f,#070a12)',
'product-ring':'radial-gradient(circle at 70% 30%, #7C3AEDaa, transparent 36%), linear-gradient(145deg,#1d294b,#070a12)',
'character':'radial-gradient(circle at 45% 30%, #9333EA99, transparent 42%), linear-gradient(145deg,#0f2f3a,#070a12)',
'brand-symbol':'radial-gradient(circle at 60% 15%, #8B5CF688, transparent 36%), linear-gradient(145deg,#2a145a,#070a12)',
'motion-sphere':'radial-gradient(circle at 50% 50%, #7C3AED88, transparent 45%), linear-gradient(145deg,#172554,#070a12)',
'helmet':'radial-gradient(circle at 50% 30%, #8B5CF666, transparent 38%), linear-gradient(145deg,#1f2937,#070a12)',
'glass-cube':'radial-gradient(circle at 30% 30%, #a78bfa66, transparent 36%), linear-gradient(145deg,#1e1b4b,#070a12)',
'sneaker':'radial-gradient(circle at 65% 25%, #7C3AED88, transparent 35%), linear-gradient(145deg,#111827,#070a12)',
'bottle':'radial-gradient(circle at 40% 20%, #9333EA99, transparent 40%), linear-gradient(145deg,#0b1120,#070a12)',
'watch':'radial-gradient(circle at 45% 20%, #8B5CF666, transparent 36%), linear-gradient(145deg,#111827,#070a12)',
'instagram':'radial-gradient(circle at 50% 20%, #9333EA66, transparent 38%), linear-gradient(145deg,#1e1b4b,#070a12)'};
export function ProjectVisual({variant}:{variant:VisualVariant}){return <div className='relative h-full w-full overflow-hidden rounded-2xl' style={{background:map[variant]}}><div className='absolute inset-0 bg-gradient-to-t from-black/65 to-transparent'/></div>}
