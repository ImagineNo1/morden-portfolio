import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline";
  className?: string;
};

export function MagneticButton({
  children,
  href = "#work",
  variant = "outline",
  className = "",
}: MagneticButtonProps) {
  const classes =
    variant === "solid"
      ? "border-neon/50 bg-gradient-to-r from-neon to-neonDeep text-white shadow-neon"
      : "border-white/15 bg-white/[0.035] text-white hover:border-neon/50 hover:bg-white/[0.07]";

  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 ${classes} ${className}`}
    >
      {children}
      <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
