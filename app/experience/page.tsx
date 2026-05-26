import { ExperienceSection } from "@/components/ExperienceSection";
import { getSiteContent } from "@/lib/siteContent";

export default async function ExperiencePage() {
  const content = await getSiteContent();
  return <div className="flex flex-col gap-10"><ExperienceSection content={content.experience} /></div>;
}
