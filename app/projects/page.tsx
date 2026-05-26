import { InstagramProjects } from "@/components/InstagramProjects";
import { ProjectsSection } from "@/components/ProjectsSection";
import { getSiteContent } from "@/lib/siteContent";

export default async function ProjectsPage() {
  const content = await getSiteContent();
  return <div className="flex flex-col gap-10"><ProjectsSection content={content.work} /><InstagramProjects content={content.work} /></div>;
}
