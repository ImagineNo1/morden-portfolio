import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
const stats = ["Home Content", "Work Projects", "Instagram Designs", "Experience Timeline", "Creative Process", "Contact Info"];
export default function AdminDashboardPage() {
  return <><AdminPageHeader title="Dashboard" description="Manage all editable portfolio content from one admin panel." /><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{stats.map((item) => <div key={item} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6"><p className="text-sm text-white/45">Editable Section</p><h2 className="mt-3 text-2xl font-semibold">{item}</h2></div>)}</div></>;
}
