import { AbstractVortex } from "./AbstractVortex";

export type ProjectVisualVariant =
  | "abstract-motion"
  | "product-ring"
  | "character"
  | "brand-symbol"
  | "motion-sphere"
  | "helmet"
  | "glass-cube"
  | "sneaker"
  | "bottle"
  | "watch"
  | "instagram";

type ProjectVisualProps = {
  variant?: ProjectVisualVariant;
};

export function ProjectVisual({ variant = "abstract-motion" }: ProjectVisualProps) {
  if (variant === "abstract-motion") {
    return (
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,.65),transparent_26%),linear-gradient(135deg,#050816,#14002d_45%,#020617)]">
        <AbstractVortex className="absolute -left-10 top-8 h-56 w-56 opacity-90" />
      </div>
    );
  }

  if (variant === "brand-symbol") {
    return (
      <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,.35),transparent_35%),linear-gradient(135deg,#050816,#1e0b46,#020617)]">
        <div className="grid h-28 w-28 place-items-center rounded-[28px] border border-neon/35 bg-black/35 text-6xl font-black text-neon shadow-neon rotate-[-12deg]">
          S
        </div>
      </div>
    );
  }

  if (variant === "character") {
    return (
      <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_50%_30%,rgba(139,92,246,.32),transparent_32%),linear-gradient(135deg,#020617,#111827)]">
        <div className="relative h-36 w-28">
          <div className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 rounded-full bg-gradient-to-br from-amber-200 to-orange-500 shadow-2xl" />
          <div className="absolute left-1/2 top-20 h-24 w-24 -translate-x-1/2 rounded-[28px] bg-gradient-to-br from-slate-900 to-black border border-white/10" />
          <div className="absolute left-[34px] top-8 h-2 w-2 rounded-full bg-black" />
          <div className="absolute right-[34px] top-8 h-2 w-2 rounded-full bg-black" />
        </div>
      </div>
    );
  }

  if (variant === "product-ring") {
    return (
      <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_50%_35%,rgba(139,92,246,.38),transparent_30%),linear-gradient(135deg,#020617,#111827)]">
        <div className="relative h-36 w-56">
          <div className="absolute inset-x-0 top-10 h-20 rounded-[50%] border-[18px] border-slate-950 bg-black shadow-neon" />
          <div className="absolute left-1/2 top-14 h-12 w-28 -translate-x-1/2 rounded-[50%] border border-neon/60 bg-neon/10" />
        </div>
      </div>
    );
  }

  if (variant === "motion-sphere") {
    return (
      <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,.28),transparent_35%),linear-gradient(135deg,#150a03,#020617)]">
        <div className="relative h-36 w-36 rounded-full bg-[radial-gradient(circle_at_28%_25%,rgba(255,255,255,.5),#f97316_10%,#111827_48%,#020617)] shadow-[0_0_60px_rgba(249,115,22,.35)]">
          <span className="absolute inset-5 rounded-full border border-orange-300/30" />
          <span className="absolute left-1/2 top-0 h-full w-px bg-orange-300/30" />
          <span className="absolute left-0 top-1/2 h-px w-full bg-orange-300/30" />
        </div>
      </div>
    );
  }

  if (variant === "glass-cube") {
    return (
      <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_50%_45%,rgba(59,130,246,.42),transparent_34%),linear-gradient(135deg,#020617,#08111f)]">
        <div className="h-28 w-28 rotate-45 rounded-2xl border border-blue-300/50 bg-blue-400/10 shadow-[0_0_60px_rgba(59,130,246,.45)]" />
      </div>
    );
  }

  if (variant === "helmet") {
    return (
      <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_45%_35%,rgba(139,92,246,.35),transparent_32%),linear-gradient(135deg,#020617,#09090b)]">
        <div className="h-36 w-32 rounded-t-[70px] rounded-b-[30px] border border-white/10 bg-gradient-to-br from-slate-700 via-slate-950 to-black shadow-neon">
          <div className="mx-auto mt-16 h-4 w-20 rounded-full bg-neon/60 blur-[1px]" />
        </div>
      </div>
    );
  }

  if (variant === "sneaker") {
    return (
      <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,#1e1035,#020617)]">
        <div className="h-20 w-52 -rotate-6 rounded-t-[60px] rounded-bl-[24px] rounded-br-[60px] border border-white/10 bg-gradient-to-br from-slate-900 to-black shadow-neon">
          <div className="ml-24 mt-5 h-3 w-16 rounded-full bg-neon/80" />
        </div>
      </div>
    );
  }

  if (variant === "bottle") {
    return (
      <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,.32),transparent_34%),linear-gradient(135deg,#1e1028,#020617)]">
        <div className="h-40 w-16 rounded-b-3xl rounded-t-lg border border-white/15 bg-gradient-to-br from-purple-200/30 to-black shadow-neon">
          <div className="mx-auto -mt-5 h-6 w-8 rounded-t-md bg-slate-800" />
          <div className="mx-auto mt-16 h-8 w-12 rounded-lg border border-neon/40" />
        </div>
      </div>
    );
  }

  if (variant === "watch") {
    return (
      <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,#020617,#0f0a1f)]">
        <div className="grid h-36 w-36 place-items-center rounded-full border-[12px] border-slate-950 bg-black shadow-neon">
          <div className="h-24 w-24 rounded-full border border-neon/60 bg-neon/10" />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(139,92,246,.5),transparent_28%),linear-gradient(135deg,#020617,#1e1b4b,#020617)]">
      <div className="absolute inset-x-8 top-8 h-44 rounded-3xl border border-white/10 bg-white/5" />
    </div>
  );
}
