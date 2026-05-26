export function SectionIndicator() {
  return (
    <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col gap-3 text-sm md:flex">
      {[1, 2, 3, 4, 5].map((num) => (
        <span key={num} className={num === 2 ? 'text-accent' : 'text-white/45'}>{String(num).padStart(2, '0')}</span>
      ))}
    </div>
  );
}
