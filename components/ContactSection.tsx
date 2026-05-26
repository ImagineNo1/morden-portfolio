import Image from "next/image";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AbstractVortex } from "@/components/visual/AbstractVortex";

const contacts = [
  { label: "Email", value: "hello@seximon.com", icon: Mail },
  { label: "Phone", value: "+98 912 345 6789", icon: Phone },
  { label: "Location", value: "Tehran, Iran", icon: MapPin },
  { label: "Instagram", value: "@seximon.design", icon: Instagram },
];

export function ContactSection() {
  return (
    <section id="contact" className="glass-panel p-6 md:p-10 lg:p-12">
      <div className="absolute inset-0 opacity-35">
        <Image src="/images/hero-portrait.jpg" alt="Contact background" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />
      </div>

      <Reveal className="relative z-10 grid gap-10 lg:grid-cols-[55%_45%]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neon">Contact Me</p>
          <h2 className="mt-4 text-[44px] font-semibold leading-[1] tracking-[-0.045em] md:text-[64px]">
            Let’s Work
            <br />
            <span className="text-gradient-purple">Together</span>
          </h2>
          <p className="mt-5 max-w-sm leading-7 text-white/62">
            Have a project in mind? I’d love to hear from you.
          </p>

          <form className="mt-8 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 text-sm outline-none transition placeholder:text-white/35 focus:border-neon/60" placeholder="Your Name" />
              <input className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 text-sm outline-none transition placeholder:text-white/35 focus:border-neon/60" placeholder="Your Email" />
            </div>
            <input className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 text-sm outline-none transition placeholder:text-white/35 focus:border-neon/60" placeholder="Project Type" />
            <textarea className="min-h-[150px] resize-none rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 text-sm outline-none transition placeholder:text-white/35 focus:border-neon/60" placeholder="Your Message" />
            <MagneticButton href="#contact" variant="solid" className="justify-center">
              Send Message
            </MagneticButton>
          </form>
        </div>

        <div className="relative flex flex-col justify-center gap-4">
          {contacts.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="glass-card flex items-center gap-4 p-5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-neon/35 bg-neon/15 text-neon">
                  <Icon size={22} />
                </span>
                <div>
                  <p className="font-semibold">{item.label}</p>
                  <p className="mt-1 text-sm text-white/50">{item.value}</p>
                </div>
              </div>
            );
          })}

          <div className="mt-6 grid place-items-center">
            <AbstractVortex className="h-44 w-44" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
