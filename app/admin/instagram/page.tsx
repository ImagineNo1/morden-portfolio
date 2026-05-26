import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { ContentEditor } from "@/components/admin/ContentEditor";

export default function AdminInstagramPage() {
  return (
    <>
      <AdminPageHeader title="Instagraminstagram" description="Edit instagram content." />
      <ContentEditor section="instagram" />
    </>
  );
}
