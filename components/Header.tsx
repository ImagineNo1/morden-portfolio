import { Menu } from "lucide-react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-6 md:px-8">
        <a href="#" className="text-sm font-bold tracking-[0.55em] text-white">
          SEXIMON
        </a>

        <nav className="hidden items-center gap-10 text-sm text-white/60 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
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
