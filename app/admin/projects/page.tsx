import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { ContentEditor } from "@/components/admin/ContentEditor";

export default function AdminProjectsPage() {
  return (
    <>
      <AdminPageHeader title="Projectsprojects" description="Edit projects content." />
      <ContentEditor section="projects" />
    </>
  );
}
