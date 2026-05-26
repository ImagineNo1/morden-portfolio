import { ArrowRight } from 'lucide-react';

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-6 py-3 text-sm font-medium transition hover:border-neon hover:bg-neon/15">
      {children}
      <ArrowRight size={16} />
    </button>
  );
}
