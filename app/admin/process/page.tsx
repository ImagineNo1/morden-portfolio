import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { ContentEditor } from "@/components/admin/ContentEditor";

export default function AdminProcessPage() {
  return (
    <>
      <AdminPageHeader title="Processprocess" description="Edit process content." />
      <ContentEditor section="process" />
    </>
  );
}
