import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { ContentEditor } from "@/components/admin/ContentEditor";

export default function AdminContactPage() {
  return (
    <>
      <AdminPageHeader title="Contactcontact" description="Edit contact content." />
      <ContentEditor section="contact" />
    </>
  );
}
