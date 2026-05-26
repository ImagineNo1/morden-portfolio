"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Briefcase,
  Contact,
  Gauge,
  Home,
  Instagram,
  Layers,
  LogOut,
  Settings,
  Sparkles,
  User,
  Workflow,
} from "lucide-react";

const adminNav = [
  { label: "Dashboard", href: "/admin", icon: Gauge },
  { label: "Home", href: "/admin/home", icon: Home },
  { label: "Work", href: "/admin/work", icon: Briefcase },
  { label: "Projects", href: "/admin/projects", icon: Layers },
  { label: "Instagram", href: "/admin/instagram", icon: Instagram },
  { label: "About", href: "/admin/about", icon: User },
  { label: "Experience", href: "/admin/experience", icon: Sparkles },
  { label: "Process", href: "/admin/process", icon: Workflow },
  { label: "Contact", href: "/admin/contact", icon: Contact },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-white/10 bg-[#050816]/95 p-5 backdrop-blur-xl lg:block">
        <Link href="/admin" className="block rounded-3xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.4em] text-neon">Admin</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-[0.25em]">SEXIMON</h1>
        </Link>

        <nav className="mt-6 space-y-2">
          {adminNav.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${active ? "bg-neon text-white shadow-neon" : "text-white/58 hover:bg-white/[0.06] hover:text-white"}`}>
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button onClick={logout} className="absolute bottom-5 left-5 right-5 flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/70 transition hover:border-red-400/50 hover:text-white">
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      <div className="border-b border-white/10 bg-[#050816]/95 p-4 lg:hidden">
        <div className="flex items-center justify-between">
          <Link href="/admin" className="font-bold tracking-[0.35em]">SEXIMON</Link>
          <button onClick={logout} className="rounded-xl border border-white/10 px-3 py-2 text-xs text-white/70">Logout</button>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {adminNav.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/70">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <main className="min-h-screen px-4 py-6 lg:ml-72 lg:px-8"><div className="mx-auto max-w-[1180px]">{children}</div></main>
    </div>
  );
}
