import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { ContentEditor } from "@/components/admin/ContentEditor";

export default function AdminWorkPage() {
  return (
    <>
      <AdminPageHeader title="Workwork" description="Edit work content." />
      <ContentEditor section="work" />
    </>
  );
}
