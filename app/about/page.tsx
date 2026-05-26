import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10">
      <AboutSection />
      <ExperienceSection />
    </div>
  );
}
