type SectionIndicatorProps = {
  active?: number;
  className?: string;
};

export function SectionIndicator({ active = 2, className = "" }: SectionIndicatorProps) {
  return (
    <div
      className={`pointer-events-none absolute right-7 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-4 lg:flex ${className}`}
    >
      <div className="relative h-40 w-px bg-white/15">
        <span className="absolute left-1/2 top-[37%] h-7 w-px -translate-x-1/2 bg-accent" />
      </div>

      <div className="flex flex-col gap-4 text-sm font-medium">
        {[1, 2, 3, 4, 5].map((number) => (
          <span
            key={number}
            className={number === active ? "text-accent" : "text-white/50"}
          >
            {String(number).padStart(2, "0")}
          </span>
        ))}
      </div>
    </div>
  );
}
