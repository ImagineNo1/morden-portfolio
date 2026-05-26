import { FeaturedProjects } from "@/components/FeaturedProjects";
import { InstagramProjects } from "@/components/InstagramProjects";
import { ProjectsSection } from "@/components/ProjectsSection";
import { getSiteContent } from "@/lib/siteContent";

export default async function WorkPage() {
  const content = await getSiteContent();
  return <div className="flex flex-col gap-10"><FeaturedProjects content={content.work} /><ProjectsSection content={content.work} /><InstagramProjects content={content.work} /></div>;
}
