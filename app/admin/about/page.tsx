import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { ContentEditor } from "@/components/admin/ContentEditor";

export default function AdminAboutPage() {
  return (
    <>
      <AdminPageHeader title="Aboutabout" description="Edit about content." />
      <ContentEditor section="about" />
    </>
  );
}
