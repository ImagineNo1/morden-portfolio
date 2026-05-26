import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { getSiteContent } from "@/lib/siteContent";

export default async function AboutPage() {
  const content = await getSiteContent();
  return <div className="flex flex-col gap-10"><AboutSection content={content.about} /><ExperienceSection content={content.experience} /></div>;
}
