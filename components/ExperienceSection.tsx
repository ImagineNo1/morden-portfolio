import Image from "next/image";
import type { SiteContentShape } from "@/lib/defaultContent";
import { Reveal } from "@/components/ui/Reveal";
import { FloatingOrb } from "@/components/visual/FloatingOrb";

type ExperienceContent = SiteContentShape["experience"];

export function ExperienceSection({ content }: { content: ExperienceContent }) {
  return (
    <section className="glass-panel p-6 md:p-10 lg:p-12">
      <Reveal className="grid gap-10 lg:grid-cols-[38%_30%_32%]">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neon">{content.label}</p>
          <h2 className="mt-4 text-[44px] font-semibold leading-[1] tracking-[-0.045em] md:text-[64px]">{content.titleLine1}<br /><span className="text-gradient-purple">{content.titleHighlight}</span></h2>
          <p className="mt-5 max-w-sm leading-7 text-white/60">{content.description}</p>
          <div className="glass-card mt-10 grid grid-cols-3 divide-x divide-white/10 p-5 text-center">{content.stats.map((s)=><div key={s}><p className="text-2xl font-semibold">{s.split(" ")[0]}</p><p className="mt-1 text-xs text-white/45">{s.replace(s.split(" ")[0],"").trim()}</p></div>)}</div>
        </div>
        <div className="relative hidden min-h-[500px] overflow-hidden rounded-[30px] border border-white/10 bg-black lg:block"><Image src="/images/hero-portrait.jpg" alt="Experience portrait" fill className="object-cover object-[center_42%]" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" /><FloatingOrb className="left-8 top-16" size={42} /></div>
        <div className="relative flex flex-col justify-center gap-7 border-l border-neon/40 pl-7">{content.items.map((item)=><div key={item.year+item.title} className="relative"><span className="absolute -left-[35px] top-1 h-4 w-4 rounded-full border border-neon bg-bg shadow-neon" /><p className="text-sm text-white/45">{item.year}</p><h3 className="mt-2 font-semibold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{item.text}</p></div>)}</div>
      </Reveal>
    </section>
  );
}
