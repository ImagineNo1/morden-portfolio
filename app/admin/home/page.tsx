import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { ContentEditor } from "@/components/admin/ContentEditor";

export default function AdminHomePage() {
  return (
    <>
      <AdminPageHeader title="Home" description="Edit home content." />
      <ContentEditor section="home" />
    </>
  );
}
