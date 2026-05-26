import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { ContentEditor } from "@/components/admin/ContentEditor";

export default function AdminExperiencePage() {
  return (
    <>
      <AdminPageHeader title="Experienceexperience" description="Edit experience content." />
      <ContentEditor section="experience" />
    </>
  );
}
