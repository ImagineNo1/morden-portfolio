export function AdminPageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neon">SEXIMON Admin</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">{title}</h1>
      {description && <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">{description}</p>}
    </div>
  );
}
