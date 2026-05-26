"use client";

import { Save } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { defaultContent, type SiteContentShape } from "@/lib/defaultContent";

type SectionKey = "home"|"work"|"about"|"experience"|"process"|"contact"|"settings"|"projects"|"instagram";
export function ContentEditor({ section }: { section: SectionKey }) {
  const [content, setContent] = useState<SiteContentShape>(defaultContent);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const title = useMemo(() => section === "settings" ? "Settings" : section === "projects" ? "Projects" : section === "instagram" ? "Instagram Projects" : section.charAt(0).toUpperCase() + section.slice(1), [section]);
  useEffect(() => { (async () => { const r = await fetch('/api/admin/content'); const d = await r.json(); if (d.ok && d.content) setContent(d.content); setLoading(false); })(); }, []);
  async function save() { setSaving(true); const r = await fetch('/api/admin/content',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(content)}); const d=await r.json(); if(d.ok&&d.content) setContent(d.content); setSaving(false);} 
  if (loading) return <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 text-white/55">Loading content...</div>;
  return <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"><div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between"><div><h2 className="text-2xl font-semibold">{title} Editor</h2><p className="mt-1 text-sm text-white/50">Edit content and save it to MongoDB.</p></div><button onClick={save} disabled={saving} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-neon to-neonDeep px-5 py-3 text-sm font-semibold text-white shadow-neon transition disabled:opacity-60"><Save size={18} />{saving ? "Saving..." : "Save Changes"}</button></div><textarea value={JSON.stringify(section==='projects'?content.work.projects:section==='instagram'?content.work.instagramProjects:section==='settings'?content.brand:(content as Record<string,unknown>)[section], null,2)} onChange={(e)=>{try{const p=JSON.parse(e.target.value); if(section==='projects') setContent({...content,work:{...content.work,projects:p}}); else if(section==='instagram') setContent({...content,work:{...content.work,instagramProjects:p}}); else if(section==='settings') setContent({...content,brand:p}); else setContent({...content,[section]:p});}catch{}}} rows={22} className="w-full resize-y rounded-2xl border border-white/10 bg-black/40 px-4 py-3 font-mono text-xs leading-6 text-white outline-none transition focus:border-neon/60" /></div>;
}
