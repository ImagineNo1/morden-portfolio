import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { ContentEditor } from "@/components/admin/ContentEditor";

export default function AdminSettingsPage() {
  return (
    <>
      <AdminPageHeader title="Settingssettings" description="Edit settings content." />
      <ContentEditor section="settings" />
    </>
  );
}
