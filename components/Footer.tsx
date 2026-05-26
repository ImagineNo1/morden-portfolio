import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-4 px-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="font-bold tracking-[0.45em] text-white">
          SEXIMON
        </Link>
        <p>© 2026 SEXIMON. All rights reserved.</p>
      </div>
    </footer>
  );
}
