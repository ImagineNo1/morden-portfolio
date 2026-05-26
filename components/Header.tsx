'use client';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-bg/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-frame items-center justify-between px-4 py-5 md:px-8">
        <Link href="/" className="text-lg font-semibold tracking-[0.3em]">SEXIMON</Link>
        <div className="hidden items-center gap-10 text-sm text-textMuted md:flex">
          <Link href="/projects">Work</Link><Link href="/about">About</Link><Link href="/process">Process</Link><Link href="/contact">Contact</Link>
        </div>
        <button aria-label="menu" className="rounded-full border border-line p-2"><Menu size={18} /></button>
      </nav>
    </header>
  );
}
