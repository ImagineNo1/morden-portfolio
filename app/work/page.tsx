import { FeaturedProjects } from "@/components/FeaturedProjects";
import { InstagramProjects } from "@/components/InstagramProjects";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-10">
      <FeaturedProjects />
      <ProjectsSection />
      <InstagramProjects />
    </div>
  );
}
