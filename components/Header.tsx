"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-bg/72 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-6 md:px-8">
        <Link href="/" className="text-sm font-bold tracking-[0.55em] text-white">
          SEXIMON
        </Link>

        <nav className="hidden items-center gap-10 text-sm md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition ${
                  active ? "text-white" : "text-white/58 hover:text-white"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-3 left-1/2 h-px w-6 -translate-x-1/2 bg-neon shadow-neon" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="Open menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.03] text-white/80 transition hover:border-neon/50 hover:text-white"
        >
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}
